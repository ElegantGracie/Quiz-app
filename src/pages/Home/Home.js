import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='box'>
        <h1>Coding Quiz Challenge</h1>
        <p>Try to answer the following code related questions within the time limit</p>
        <p>Keep in mind that wrong anwers will penalize your score/time by 10 sec</p>
        <button type="button" class="btn customnav ">Primary</button>

      </div>
    </div>
  )
}

export default Home