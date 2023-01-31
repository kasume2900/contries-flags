import {useState} from 'react'
import s from './HomePage.module.scss'
import Contry from '../../components/Contry/Contry'
import Loading from '../../components/Loading/Loading'
import Popap from '../../components/Popap/Popap'
import Search from '../../components/Search/Search'
import {IContryBody} from '../../types/types'
import { useGetAllContries } from '../../services/hooks/useGetAllContries'
import { useGetFilterContriesByRegion } from '../../services/hooks/useGetFilterContriesByRegion'
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent'



export default function HomePage() {

const [data,setData] = useState<IContryBody[]>([])
const [reg ,setReg] = useState('')
const {isLoading,isError,error,isFetching} = useGetAllContries(setData)
const {isLoading : isLoadingRegion,isError : isErrorRegion,error:errorRegion} = useGetFilterContriesByRegion(reg,setData)


const filterByRegion = (reg : string) => {
  setReg(reg)
}

if(isLoading || isFetching || isLoadingRegion) return <Loading />
if(isError) return <ErrorComponent /> 


  return (
    <>
      <div className={s.top}>
        <Search setData={setData} />
        <Popap setRegion={filterByRegion} />
      </div>
      <div className={s.contryWrap}>
        {
          data?.map((contry) => <Contry key={contry.name} contry={contry} /> )
        }
      </div>
    </>
  )
}
