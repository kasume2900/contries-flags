import { useQuery } from "react-query"
import { getContrySearchByName } from "../api"
import {IContryBody } from "../../types/types"


export const useGetContrySearchByName = (name: string,fn : (data : IContryBody[]) => void) => {
  return useQuery<IContryBody[]>(['contry', name],
    () => getContrySearchByName(name),
    {
      enabled: !!name,
      onSuccess (data) {
        fn(data)
      }
    }
  )
}