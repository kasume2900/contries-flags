import React from 'react'
import s from './Loading.module.scss'

export default function Loading() {
  return (
    <div className={s.wrap}>
      <div className={s.loading}>
        <div className="flex items-center justify-center ">
          <div className="w-40 h-40 border-t-4 border-b-4 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
