import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <Fragment>
      <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <a className='navbar-brand text-white'>Navbar</a>
           {/* <div className=' navbar-nav ml-auto mr-5'>
            <p className=' mb-0 nav-link text-white' href='#'>Hello {userInfos.userName}<span className='sr-only'>(current)</span></p>
            <p className='mb-0 nav-link text-white' href='#'>Messages non lus : {unReadMessages}</p>
            {userNavigation ? <Link to={`/user/${userInfos.userName}`} className=' mb-0 nav-link text-white' href='#'>Mon profil</Link>
              : <Link to='/' className=' mb-0 nav-link text-white' >Home</Link>}
            <button className='btn btn-outline-success my-2 my-sm-0  mx-3' onClick={userStatus.logoutUser}>Logout</button>
            </div> */}
          <Link className='btn btn-outline-success my-2 my-sm-0 ml-auto mr-5' to='/login'>Login / Resgister</Link>}
      </nav>
    </Fragment>
  )
}



export default connect()(Navbar)