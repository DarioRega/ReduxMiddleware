import React, { Fragment, useState } from 'react'
import { withFormik, Field, Form } from 'formik'
import { connect } from 'react-redux'

import { startLogin, startRegister, startLogout } from '../../actions/auth'
// import validator from 'validator'

const Connexion = ({ handleChange, values, handleSubmit, startLogout }) => {
  const [isAlreadyMember, setIsAlreadyMember] = useState(true)
  const [alertUser, setAlertUser] = useState('')
  // checkInput = input => {
  //   return (!validator.isEmpty(input, { ignore_whitespace: true }))
  // }

  return (
    <div className='container pt-5 mt-5'>
      <div className='row'>
        <div className="col-5 m-auto">
          <button onClick={startLogout}>Logout</button>
          {alertUser ?
            <div className='col-lg-6 col-10 col-md-6 m-auto pt-5 mt-5'>
              <div className='my-5'>
                <div className='alert alert-warning m-0' role='alert'>
                  <h6 className='m-0 text-danger'>{alertUser}</h6>
                </div>
              </div>
            </div>
            : null}
          <Form>
            <div className='py-4'>
              <h1 className='h1 text-center'>{isAlreadyMember ? 'Login' : 'Register'}</h1>
            </div>
            <div className='form-row'>
              <div className='col-6 m-auto '>
                <label htmlFor="">Email</label>
                <Field type='email' name='email' placeholder='Email' className='form-control' />
              </div>
              <div className='col-6 m-auto'>
                <label htmlFor="">Password</label>
                <Field type='password' name='password' placeholder='Password' className='form-control' />
              </div>
            </div>
            {!isAlreadyMember &&
            <Fragment> 
            <div className='form-row pt-4'>
              <div className='col-6 m-auto'>
                <label htmlFor="">First name</label>
                <Field type='text' name='firstName' placeholder='First name' className='form-control' />
              </div>
              <div className='col-6 m-auto'>
              <label htmlFor="">Last name</label>
                <Field type='text' name='lastName' placeholder='Last name' className='form-control' />
              </div>
            </div>
            <div className='form-row pt-4'>
              <div className='col-6 m-auto '>
                <label htmlFor="">Username</label>
                <Field type='text' name='username' placeholder='Username' className='form-control' />
              </div>
              <div className='col-6 m-auto'>
                <label htmlFor="">Date of birth</label>
                <Field type='date' name='dateOfBirth' placeholder='Date of birth' className='form-control' />
              </div>
            </div>
            <div className='form-row pt-4'>
              <div className='col-6 m-auto '>
                <label htmlFor="">City</label>
                <Field type='text' name='city' placeholder='City' className='form-control' />
              </div>
              <div className='col-6 m-auto'>
                <label htmlFor="">Country</label>
                <Field type='text' name='country' placeholder='Country' className='form-control' />
              </div>
            </div>
            </Fragment> }
          </Form>
            <div className='text-center pt-5'>
              <button className='btn-dark btn my-4 text-center mr-4' onClick={e => handleSubmit(e)}>{isAlreadyMember ? 'Login' : 'Register'}</button>
              <button className='btn-primary btn my-4 text-center ml-4' onClick={() => setIsAlreadyMember(!isAlreadyMember)}>{isAlreadyMember ? 'Register instead' : 'Login instead'}</button>

            </div>
        </div>
      </div>
    </div>
  )
}

const ConnexionFormik = withFormik({
  mapPropsToValues ({ email, password, lastName, firstName, dateOfBirth, country, username, city, startRegister, startLogin }) {
    return {
      email: email || '',
      password: password || '',
      lastName: lastName || '',
      firstName: firstName || '',
      username: username || '',
      dateOfBirth: dateOfBirth || '',
      country: country || '',
      city: city || ''

    }
  },
  handleSubmit (values, { props }) {
    if (values.username) {
      props.startRegister(values)
    } else {
      console.log('login')
      const type = 'emailAndPassword'
      props.startLogin(values, type)
    }
    console.log('values : ', values)
  },
})(Connexion) 

const mapDispatchToProps = dispatch => ({
  startLogin: (values, type) => dispatch(startLogin(values, type)),
  startRegister: (values) => dispatch(startRegister(values)),
  startLogout: () => dispatch(startLogout())
})


export default connect(undefined, mapDispatchToProps)(ConnexionFormik)
