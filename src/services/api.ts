
import { IContry, IContryBody, IContryName } from "../types/types"

import ky from 'ky'

const api = ky.create({
  prefixUrl : 'https://restcountries.com/v2'
})



export const getAllContries : () => Promise<IContryBody[]> = async () => await api.get('all',{
  searchParams : {
    fields: 'name,population,region,capital,flags'
  }
}).json()


export const getFilterContriesByRegion : (region : string) => Promise<IContryBody[]> = async (region : string) => await api.get(`region/${region}`,{
  searchParams : {
    fields: 'name,population,region,capital,flags'
  }
}).json()


export const getNameContryByCode : (code : string) => Promise<IContryName[]> = async (code : string) => await api.get(`alpha?${code}`,{
  searchParams : {
    fields: 'name',
    codes : code
  }
}).json()


export const getContryByName : (name : string) => Promise<IContry[]> = async (name : string) => await api.get(`name/${name}`).json()


export const getContrySearchByName : (name : string) => Promise<IContryBody[]> = async (name : string) => await api.get(`name/${name}`,{
  searchParams : {
    fields: 'name,population,region,capital,flags'
  }
}).json()


