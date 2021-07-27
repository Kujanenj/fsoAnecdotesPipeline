import React from "react"
const { useParams } = require("react-router-dom")

const Anecdote = ({ anecdotes, vote }) => {

    const id = useParams().id
    console.log(id)
    console.log(anecdotes)
    const anec = anecdotes.find(anecdote => anecdote.id === id)

    return (
        <>
            <div>
                <h1>{`${anec.content} by ${anec.author}`}</h1>
                {`Has ${anec.votes} votes`}
                <br />
                See  <a href={anec.info}>{anec.info}</a> for more info
            </div>
            <div>
                <button onClick={() => vote(anec.id)}>Vote</button>
            </div>
        </>
    )
}
export default Anecdote