import React from 'react'
import {useTheme} from '../../hooks/useTheme'
import Layout from '../../layout/Layout'
import s from './Header.module.scss'
import {BsMoonStarsFill} from 'react-icons/bs'
import {ImSun} from 'react-icons/im'
import {useNavigate} from 'react-router-dom'
import { useQueryClient } from 'react-query'


export default function Header() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {theme,setTheme} = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleClick = () => {
    navigate('/')
    queryClient.invalidateQueries('allContries')
  }


  return (
    <header className={s.header}>
      <Layout>
        <nav className={s.nav}>
          <h1 onClick={handleClick} className={s.title}>Where in the World?</h1>
          <div onClick={changeTheme} className={s.theme}>
            <div className={s.icon}>{theme === 'dark' ? <BsMoonStarsFill /> : <ImSun />}</div>
            <p className={s.text}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
          </div>
        </nav>
      </Layout>
    </header>
  )
}
