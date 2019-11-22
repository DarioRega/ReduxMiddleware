
import React, { Fragment } from 'react'
const ContactUs = () => {
  const handleSubmit = evt => {
    evt.preventDefault()
    // Send message to Admin
    const date = Date.now()
    // axios.post(`https://routerhooks.firebaseio.com/users/${uid}/receivedMessage.json`, {
    //   date: date,
    //   fromUser: userInfos.userName || email,
    //   message: message,
    //   subject: subject,
    //   seen: false
    // })
  }

  return (
    <Fragment>
      <h1 className='text-black'>{}</h1>
      <form className='my-5' onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='col-6'>
            {/* <input type='text' className='form-control' placeholder='Subject' value={subject} onChange={updateSubject} name='subject' /> */}
          </div>
          <div className='col-6'>
            {/* {isLoggedUser
            ? <input type='text' className='form-control' placeholder='Chargement...' value={userInfos.userName} readOnly name='userName' />
              : <input type='text' className='form-control' placeholder='Email' value={email} onChange={updateEmail} name='email' />} */}
          </div>
        </div>
        <div className='form-row mt-4'>
          <div className='col-12'>
            {/* <textarea className='form-control' placeholder='Message' rows='5' value={message} onChange={updateMessage} name='message' /> */}
          </div>
        </div>
        <button className='btn-dark btn my-4'>Envoyer</button>
      </form>
    </Fragment>
  )
}

export default ContactUs
