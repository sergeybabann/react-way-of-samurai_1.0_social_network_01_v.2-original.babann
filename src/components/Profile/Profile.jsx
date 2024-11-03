import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import beach from '../../images/beach.webp'

const Profile = (props) => {
  return (
    <div>
      <div className={s.beach}>
        <img src={beach} alt='img'></img>
        {props.message}
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile
