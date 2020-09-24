import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
	const good = () => {
		store.dispatch({
			type: 'GOOD'
		})
	}

	const ok = () => {
		store.dispatch({
			type: 'OK'
		})
	}

	const bad = () => {
		store.dispatch({
			type: 'BAD'
		})
	}

	const reset = () => {
		store.dispatch({
			type: 'ZERO'
		})
	}

	return (
		<div>
			< h1 > give feedback</h1>
			<button onClick={good}>good</button>
			<button onClick={ok}>neutral</button>
			<button onClick={bad}>bad</button>
			<button onClick={reset}>reset stats</button>
			{store.getState().all === 0 ? <div>no feedback given</div> :
				<div>
					<h1>statistics</h1>
					<div>good {store.getState().good}</div>
					<div>neutral {store.getState().ok}</div>
					<div>bad {store.getState().bad}</div>
					<div>all {store.getState().all}</div>
					<div>average {store.getState().average}</div>
					<div>positive {store.getState().positive}%</div>
				</div>}
		</div >
	)
}

const renderApp = () => {
	ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
