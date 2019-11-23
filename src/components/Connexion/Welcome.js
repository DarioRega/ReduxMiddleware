import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Welcome = ({isAlreadyMember, username }) => {
  console.log('propsuserData : ', username)
  console.log('propsAuth : ', isAlreadyMember)
  return (
    <div className='col-lg-8 col-10 col-md-6 m-auto pt-5 mt-5'>
      {isAlreadyMember 
      ? <h2 className="display-3">Welcome back {username} !</h2>
      : <h2 className="display-3">Welcome in our community <span className='display-4 font-italic'>{username} !</span></h2>
      }

      <h5 className='pt-5'>Where do you want to go next ?</h5>
      <div className="row mt-5">
        <div className=" col-7 mr-auto text-left d-inline">
          <Link className='btn ml-3 px-4 btn-dark' to='/'>Home</Link>
          <Link className='btn ml-3 px-4 btn-dark' to={`/user/${username}`}>My Profile</Link>
        </div>
      </div>
  
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAlreadyMember: state.auth.isAlreadyMember,
    username: state.userData.username
  }
}

export default connect(mapStateToProps)(Welcome)