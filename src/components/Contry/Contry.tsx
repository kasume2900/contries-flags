import React from 'react'
import { IContryBody } from '../../types/types'
import {Link} from 'react-router-dom'
import s from './Contry.module.scss'

interface IContryProps {
  contry : IContryBody
}


export default function Contry({contry} :IContryProps) {
  return (
    <Link to={contry.name} className={s.contryWrap}>
      <div className={s.image}>
        <img src={contry.flags.png} alt='flag' />
      </div>
      <div className={s.body}>
        <div className={s.name}>{contry.name}</div>
        <div className={s.item}>Population : <span>{contry.population}</span></div>
        <div className={s.item}>Region : <span>{contry.region}</span></div>
        <div className={s.item}>Capital : <span>{contry.capital}</span></div>
      </div>
    </Link>
  )
}
