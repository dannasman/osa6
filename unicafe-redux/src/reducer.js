const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  all: 0,
  average: 0,
  positive: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {
        ...state, good: state.good + 1,
        all: state.good + state.ok + state.bad + 1,
        average: (state.good + 1 - state.bad) / (state.good + state.ok + state.bad + 1),
        positive: (state.good + 1) / (state.good + state.ok + state.bad + 1) * 100
      }
    case 'OK':
      return {
        ...state, ok: state.ok + 1,
        all: state.good + state.ok + state.bad + 1,
        average: (state.good - state.bad) / (state.good + state.ok + state.bad + 1),
        positive: (state.good) / (state.good + state.ok + state.bad + 1) * 100
      }
    case 'BAD':
      return {
        ...state, bad: state.bad + 1,
        all: state.good + state.ok + state.bad + 1,
        average: (state.good - 1 - state.bad) / (state.good + state.ok + state.bad + 1),
        positive: (state.good) / (state.good + state.ok + state.bad + 1) * 100
      }
    case 'ZERO':
      return initialState
    default: return state
  }

}

export default counterReducer