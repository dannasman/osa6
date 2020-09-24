import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_ANECDOTE':
			return state.concat(action.data)
		case 'INIT_ANECDOTES':
			return action.data
		case 'VOTE':
			return state.map(anecdote =>
				anecdote.id !== action.data.id ? anecdote : action.data
			)
		default:
			return state
	}
}

export const initializeAnecdotes = (anecdotes) => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({
			type: 'INIT_ANECDOTES',
			data: anecdotes
		})
	}
}

export const addVote = (id) => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		const anecdoteToChange = anecdotes.find(a => a.id === id)
		const updatedAnecdote = await anecdoteService.update(id, {
			...anecdoteToChange,
			votes: anecdoteToChange.votes + 1
		})
		dispatch({
			type: 'VOTE',
			data: updatedAnecdote
		})
	}
}

export const createAnecdote = content => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(content)
		dispatch({
			type: 'NEW_ANECDOTE',
			data: newAnecdote
		})
	}
}


export default anecdoteReducer