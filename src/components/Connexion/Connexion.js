import React, { Fragment, useState } from 'react'
import { withFormik, Field, Form } from 'formik'
// import validator from 'validator'

const Connexion = ({ handleChange, values }) => {
  const [isAlreadyMember, setIsAlreadyMember] = useState(true)
  const [alertUser, setAlertUser] = useState('')
  // checkInput = input => {
  //   return (!validator.isEmpty(input, { ignore_whitespace: true }))
  // }

  return (
    <div className='container pt-5 mt-5'>
      <div className='row'>
        <div className="col-5 m-auto">
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
                <Field type='email' name='email' placeholder='Email' className='form-control' />
              </div>
              <div className='col-6 m-auto'>
                <Field type='password' name='password' placeholder='Password' className='form-control' />
              </div>
            </div>
            {!isAlreadyMember &&
            <Fragment> 
            <div className='form-row pt-4'>
              <div className='col-6 m-auto'>
                <Field type='text' name='firstName' placeholder='First name' className='form-control' />
              </div>
              <div className='col-6 m-auto'>
                <Field type='text' name='lastName' placeholder='Last name' className='form-control' />
              </div>
            </div>
            <div className='form-row pt-4'>
              <div className='col-6 m-auto '>
                <Field type='text' name='username' placeholder='Username' className='form-control' />
              </div>
              <div className='col-6 m-auto'>
                <Field type='date' name='dateOfBirth' placeholder='Date of birth' className='form-control' />
              </div>
            </div>
            <div className='form-row pt-4'>
              <div className='col-6 m-auto '>
                <Field type='text' name='city' placeholder='City' className='form-control' />
              </div>
              <div className='col-6 m-auto'>
                <Field type='text' name='country' placeholder='Country' className='form-control' />
              </div>
            </div>
            </Fragment> }
            <div className='text-center pt-5'>
              <button className='btn-dark btn my-4 text-center' onClick={() => setIsAlreadyMember(!isAlreadyMember)}>{isAlreadyMember ? 'Login' : 'Register'}</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}





      
  
















const ConnexionFormik = withFormik({
  mapPropsToValues ({ email, password, lastName, firstName, dateOfBirth, country }) {
    return {
      email: email || '',
      password: password || '',
      lastName: lastName || '',
      firstName: firstName || '',
      dateOfBirth: dateOfBirth || null,
      country: country || ''
    }
  },
  handleSubmit (values) {
    console.log('values : ', values)
  }
})(Connexion) 

export default ConnexionFormik
