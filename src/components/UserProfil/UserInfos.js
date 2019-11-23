import React from 'react'
import { withFormik, Field, Form } from 'formik'
import { connect } from 'react-redux'

import { startChangeUserCreds } from '../../actions/userData'

const UserInfos = ({ handleChange, values, handleSubmit, user, userId }) => {
  return (
    <div className='col-6 m-auto'>
      <Form>
        <div className='py-4'>
          <h1 className='h1 text-center'>Personnals Informations</h1>
        </div>
        <div className='form-row'>
          <div className='col-6 m-auto '>
            <label htmlFor=''>Email</label>
            <Field type='email' name='email' className='form-control' />
          </div>
          <div className='col-6 m-auto'>
            <label htmlFor=''>Password</label>
            <Field type='password' name='password' className='form-control' />
          </div>
        </div>
        <div className='form-row pt-4'>
          <div className='col-6 m-auto'>
            <label htmlFor=''>First name</label>
            <Field type='text' name='firstName' className='form-control' />
          </div>
          <div className='col-6 m-auto'>
            <label htmlFor=''>Last name</label>
            <Field type='text' name='lastName' className='form-control' />
          </div>
        </div>
        <div className='form-row pt-4'>
          <div className='col-6 m-auto '>
            <label htmlFor=''>Username</label>
            <Field type='text' name='username' className='form-control' />
          </div>
          <div className='col-6 m-auto'>
            <label htmlFor=''>Date of birth</label>
            <Field type='date' name='dateOfBirth' className='form-control' />
          </div>
        </div>
        <div className='form-row pt-4'>
          <div className='col-6 m-auto '>
            <label htmlFor=''>City</label>
            <Field type='text' name='city' className='form-control' />
          </div>
          <div className='col-6 m-auto'>
            <label htmlFor=''>Country</label>
            <Field type='text' name='country' className='form-control' />
          </div>
        </div>
        <button type='submit' className='btn btn-dark text-center'>Save my changes</button>
      </Form>
    </div>
  )
} 

const UserInfosFormik = withFormik({
  mapPropsToValues ({ user }) {
    return {
      email: user.email || '',
      password: user.password || '',
      lastName: user.lastName || '',
      firstName: user.firstName || '',
      username: user.username || '',
      dateOfBirth: user.dateOfBirth || '',
      country: user.country || '',
      city: user.city || ''
    }
  },
  handleSubmit (values, { props }) {
    // if (values.email !== props.email || values.password !== props.password) {
      // need to edit user creds
      console.log('props.userId', props.userId)
      props.startChangeUserCreds(values, props.userId)
    // } else {
      // no need to edit creds users
      // props.startLogin(values, type)
    // }
    console.log('values form userinfos: ', values)
  }
})(UserInfos)


const mapStateToProps = state => {
  return {
    user: state.userData,
    userId: state.auth.uid
  }
}
const mapDispatchToProps = dispatch => ({
  startChangeUserCreds: (values, userId) => dispatch(startChangeUserCreds(values, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfosFormik)
