import { useQuery } from "react-query"
import { getContryByName } from "../api"
import { IContry } from "../../types/types"


export const useGetContryByName = (name: string, handler: (nav: string) => void) => {
  return useQuery<IContry[]>(['contry', name],
    () => getContryByName(name),
    {
      onError() {
        handler('/notFound')
      }
    }
  )
}