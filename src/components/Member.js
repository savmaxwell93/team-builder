import React from 'react';

function Member (props) {
    const { details } = props

    if (!details) {
      return <h3>Working fetching your member's details...</h3>
    }
  
    return (
      <div className='member container'>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
    )
}

export default Member;