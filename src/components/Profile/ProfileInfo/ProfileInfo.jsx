import React from 'react'
import s from './ProfileInfo.module.css'
import beach from '../../../images/beach.webp'

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.beach}>
        <img src={beach} alt='img'></img>
        {props.message}
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
