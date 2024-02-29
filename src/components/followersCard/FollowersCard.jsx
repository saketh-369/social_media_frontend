import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'

function FollowersCard() {
  return (
    <div className='FollowersCard'>
      <h3>Who is Following you</h3>
      {Followers.map((Follower,id)=>{
        return(
            <div className="follower">
                <img src={Follower.img} alt="" className='followerImg'/>
                <div className="name">
                    <span>{Follower.name}</span>
                    <span>@{Follower.username}</span>
                </div>
                <button className='button fc-button'>
                    Follow
                </button>
            </div>
        )
      })}

    </div>
  )
}

export default FollowersCard
