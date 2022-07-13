import React from 'react'
import './alldone.css'

const Alldone = () => {
  return (
    <div className='alldone'>
      <div className='alldone-details'>
<<<<<<< HEAD:quiz-app/src/pages/Alldone/Alldone.js
        <div className='alldone-h1'><h1>All done! </h1></div>
        <div alldone-h><h4>Your final score is <span>9.</span></h4></div>
=======
        <div className='alldone-h1'><h1>All done!</h1></div>
        <div className='alldone-h1'><h4>Your final score is <span>9.</span></h4></div>
>>>>>>> 694cfc9fd736c2a94650f634463d842aa2adcd86:src/pages/Alldone/Alldone.js
        <div className='alldone-form'>
          <form>
            <label htmlFor='text' >Enter initials:</label>
            <input name='text' type='text' required></input>
            <input type='submit' name='submit'></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Alldone