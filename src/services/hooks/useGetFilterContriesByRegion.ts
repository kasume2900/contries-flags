import { useQuery } from "react-query"
import { getFilterContriesByRegion } from "../api"
import { IContryBody } from "../../types/types"



export const useGetFilterContriesByRegion = (region : string,fn :  (data : IContryBody[]) => void) => {

  return useQuery<IContryBody[]>(['contries-region',region],
   () => getFilterContriesByRegion(region),
  {
    enabled : !!region,
    onSuccess (data) {
      fn(data)
    }
  
  }
  )

}