export type AddressType = {
    country: string, region: string, city: string, street: string, house: string, building: string
}

export default function makeAddress(address?: AddressType) {
    if (address)
        return `${address.city} ${address.region} ${address.street}`
    else return ''
}