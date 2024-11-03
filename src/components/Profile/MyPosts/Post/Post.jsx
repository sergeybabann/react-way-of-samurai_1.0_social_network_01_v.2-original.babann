import React from 'react'
import s from './Post.module.css'
import avatar from '../../../../images/avatar.webp'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={avatar} alt='img'></img>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
