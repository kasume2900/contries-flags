
import { useQuery } from "react-query"
import { getAllContries } from "../api"
import { IContryBody } from "../../types/types"





export const useGetAllContries = (fn: (data: IContryBody[]) => void) => {

  return useQuery<IContryBody[]>(['allContries'],getAllContries,
    {
      retry: false,
      onSuccess(data) {
        fn(data)
      },    
    })

}