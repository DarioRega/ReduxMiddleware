import React, { Fragment } from 'react'
// import Navbar from './Navbar'
import ContactUs from './ContactUs'
import NavBar from './NavBar'
import HeroSection from './HeroSection'


const Home = (props) => {
  return (
    <Fragment>
        <NavBar />
      <div className='container mt-5 pt-5'>
        <div className='row mt-5 pt-5'>
          <div className='col-12'>
            <HeroSection />
          </div>
        </div>
      </div>
      <div className='container mt-5 pt-5'>
        <div className='row'>
          <div className='col-12'>
          </div>
        </div>
      </div>
      <div className='container mt-5 pt-5'>
        <div className='row'>
          <div className='col-lg-7 col-md-7 col-10 mx-auto text-center'>
            <ContactUs />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home