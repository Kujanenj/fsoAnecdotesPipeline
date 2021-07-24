import React, { useState } from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Notification from './components/Notification'







const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])


 const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
   setAnecdotes(anecdotes.concat(anecdote))
  }

  
  return (
    <div>
    
 <Menu anecdotes = {anecdotes} addNew = {addNew} />
  <Notification></Notification>  
      <h1>Software anecdotes</h1>
   
      <Footer />
    </div>
  )
}

export default App;
