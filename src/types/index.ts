import React from "react"

export type ZipCodeContextType = {
    ZipCode: string
    SetZipCode:(zipcode: string)=>void
    CityState: CityStateObjectType|null
    notFound: boolean
}

export type CityStateObjectType = {
    city: string
    state: string
}

export type ContextChildrenType = {
    children: React.ReactNode
}