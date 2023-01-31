import React from 'react'
import s from './Btn.module.scss'
import {TbArrowNarrowLeft} from 'react-icons/tb'
import {useNavigate} from 'react-router-dom'


export default function Btn() {

  const navigate = useNavigate()


  return (
    <div onClick={() => navigate(-1)} className={s.wrap}>
      <button className={s.btn}>Back</button>
      <TbArrowNarrowLeft className={s.icon} />
    </div>
  )
}
