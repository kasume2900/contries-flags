import React, { useState } from 'react'
import s from './Search.module.scss'
import {BiSearchAlt} from 'react-icons/bi'
import useDebounce from '../../hooks/useDebounced'
import { useGetContrySearchByName } from '../../services/hooks/useGetContrySearchByName'
import { IContryBody } from '../../types/types'



interface ISearchProps {
  setData : (data : IContryBody[]) => void
}


export default function Search({setData} :ISearchProps ) {
  
  const [value,setValue] = useState('')
  const debounced = useDebounce(value)
  const {isError} = useGetContrySearchByName(debounced,setData)

  
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={s.inputWrap}>
      <input 
        onChange={handleChange}
        value={value}
        placeholder='Search for a contry...'
        className={s.input}
        type="text" />
      <BiSearchAlt className={s.icon} />
      {
        isError && <span className={s.errName}>Wrong Contry Name..</span>
      }
     
    </div>
  )
}
