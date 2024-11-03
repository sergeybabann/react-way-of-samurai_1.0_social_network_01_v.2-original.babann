import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>Dimych</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog}>Viktor</div>
        <div className={s.dialog}>Valera</div>
      </div>

      <div className={s.messages}>
        <div class={s.dialog}>Hi</div>
        <div class={s.dialog}>How is your it-kamasutra?</div>
        <div class={s.dialog}>Yo</div>
      </div>
    </div>
  )
}

export default Dialogs
