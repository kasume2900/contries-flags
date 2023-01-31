
import {useParams,useNavigate} from 'react-router-dom'
import Btn from '../../components/Btn/Btn'
import ContryInfo from '../../components/ContryInfo/ContryInfo'
import Loading from '../../components/Loading/Loading'
import { useGetContryByName } from '../../services/hooks/useGetContryByName'



export default function ContryInfoPage() {

  const navigate = useNavigate()
  
  const {name} = useParams()

  const {data,isLoading,isError} = useGetContryByName(name!,navigate)
  
  if(isLoading) return <Loading />
  
  
    
  return (
    <>
      <Btn />
      <ContryInfo info={data}  />
    </>
  )
}
