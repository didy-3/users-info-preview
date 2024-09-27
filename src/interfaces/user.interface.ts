import type { Address } from "./address.interface"
import type { Company } from "./company.interface"

export interface User{
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company 
}