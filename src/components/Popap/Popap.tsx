import React, { useState } from 'react'
import {useRef} from 'react'
import s from './Popap.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

interface IPopapProps {
  setRegion : (reg : string) => void
}

export default function Popap({setRegion} : IPopapProps) {
  const ref = useRef(null)

  const regions = ['Africa','Americas','Asia','Europe','Oceania']
  const [active, setActive] = useState(false)
  
  useOnClickOutside(ref, () => setActive(false))

  const handleClick = () => {
    setActive(!active)
  }

  const handleSetRegionClick = (reg : string) => {
    setRegion(reg)
    setActive(false)
  }



  return (
    <div className={s.popapWrap}>
      <div onClick={handleClick} className={s.top}>
        <h3 className={s.title}>Filter by Region</h3>
        {active ? <IoIosArrowUp className={s.icon} /> : <IoIosArrowDown className={s.icon} />}   
      </div>
      {
        active &&
        <div ref={ref} className={s.bottom}>
        {
          regions.map(reg => <div onClick={() => handleSetRegionClick(reg)} className={s.region} key={reg}>{reg}</div>)
        }
      </div>
      }
      
    </div>
  )
}
