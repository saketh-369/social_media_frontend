import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'

function InfoCard() {

  const [modelOpened, setModelOpened] = useState(false)
  return (
    <div className='InfoCard'>
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModelOpened(true)}/>
            <ProfileModel modelOpened={modelOpened} setModelOpened={setModelOpened}/>
        </div>
      </div>
      <div className="info">
        <span>
            <b>Status </b>
        </span>
        <span>
            Single
        </span>
      </div>

      <div className="info">
        <span>
            <b>Lives in </b>
        </span>
        <span>
            Kochi
        </span>
      </div>

      <div className="info">
        <span>
            <b>Class </b>
        </span>
        <span>
            S7 CS A
        </span>
      </div>

      <button className='button logout-button'>
        Logout
      </button>
    </div>
  )
}

export default InfoCard
