import React from 'react'
import { connect } from 'react-redux'

import UserInfos from './UserInfos'

const UserProfil = (props) => {
  return (
    <div className='container-fluid py-5'>
      <div className='row'>
        <div className='col-10 m-auto'>
          <UserInfos />
        </div>
      </div>
      <div className='row py-5'>
        <div className='col-5 ml-auto'>
          <div className='col-8 m-auto'>
            <h3 className='my-5 text-center'>Message recus</h3>
          </div>
          <div className='col-8 border px-0 p-1 rounded m-auto' style={{ height: '320px', maxHeight: '320px', overflow: 'auto' }}>
            {/* {allMessagesReceived} */}
          </div>
        </div>
        <div className='col-5 ml-auto'>
          <div className='col-8 m-auto'>
            <h3 className='my-5 text-center'>Message envoyés</h3>
          </div>
          <div className='col-8 border px-0 p-1 m-auto   rounded' style={{ height: '320px', maxHeight: '320px', overflow: 'auto' }}>
            {/* {allMessagesSent} */}
          </div>
        </div>
      </div>

      <div className='row pt-3 pb-5 my-5'>
        {/* <ContactUser /> */}
      </div>
    </div>
  )
}

// export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
export default UserProfil
