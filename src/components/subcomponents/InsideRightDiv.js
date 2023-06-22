import React from 'react'
import IRLinks from './IRLinks';
import IRProfile from './IRProfile';

export default function InsideRightDiv({loggedIn}) {

    return (
    <>
        {
            loggedIn === true ? <IRProfile/> : <IRLinks/>
        }
    </>
  )
}
