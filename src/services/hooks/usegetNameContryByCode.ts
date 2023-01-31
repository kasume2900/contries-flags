import { useQuery } from "react-query"
import { getNameContryByCode } from "../api"
import { IContryName } from "../../types/types"





export const useGetNameContryByCode = (code : string) => {
  return useQuery<IContryName[]>(['contry info',code],
  () => getNameContryByCode(code),
  {
    enabled : !!code
  }
)
}