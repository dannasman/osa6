import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const vote = (id, anecdote) => {
        dispatch(addVote(id))
        dispatch(setNotification(`you voted '${anecdote}'`, 5))
    }


    return (
        anecdotes.filter(a => a.content.toLowerCase().indexOf(filter.toLowerCase()) > -1).sort((a, b) => b.votes - a.votes).map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => vote(anecdote.id, anecdote.content)} />
        )
    )
}

export default AnecdoteList