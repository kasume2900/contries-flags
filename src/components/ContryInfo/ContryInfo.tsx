
import {Link} from 'react-router-dom'
import { useGetNameContryByCode } from '../../services/hooks/usegetNameContryByCode'
import { IContry } from '../../types/types'
import Loading from '../Loading/Loading'
import s from  './ContryInfo.module.scss'


interface IContryInfoProps {
  info : IContry[] | undefined
}

export default function ContryInfo({info} : IContryInfoProps) {
  
  let code = ''
  if (info && info[0].borders) {
    code = info[0].borders.join()
  }

  const {data,isLoading} = useGetNameContryByCode(code)
  
  if(isLoading) return <Loading />
  

  return (
    <div className={s.wrap}>
      <div className={s.image}>
        <img src={info && info[0].flags.png} alt="flag" />
      </div>
      <div className={s.body}>
        <div className={s.name}>{info && info[0].name}</div>
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.item}>Native Name :<span>{info && info[0].nativeName}</span></div>
            <div className={s.item}>Population :<span>{info && info[0].population}</span></div>
            <div className={s.item}>Region :<span>{info && info[0].region}</span></div>
            <div className={s.item}>Sub Region :<span>{info && info[0].subregion}</span></div>
            <div className={s.item}>Capital :<span>{info && info[0].capital}</span></div>
          </div>
          <div className={s.col}>
            <div className={s.item}>Top Level Domain :{info && info[0].topLevelDomain?.map(el => <span key={el}>{el}</span>)}</div>
            <div className={s.item}>Currencies :{info && info[0].currencies?.map(el => <span key={el.name}>{el.name}</span>)}</div>
            <div className={s.item}>Languages :{info && info[0].languages?.map(el => <span key={el.name}>{el.name}</span>)}</div>
          </div>
        </div>
        <div className={s.borders}>
          <div className={s.borderTitle}>Border Contries :</div>
          {data?.map(el => <Link to={`/${el.name}`} className={s.borderItem} key={el.name}>{el.name}</Link>)}
        </div>
      </div>
    </div>
  )
}
