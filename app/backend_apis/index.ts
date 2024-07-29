import { unstable_noStore as noStore } from 'next/cache';
import { toast } from 'react-toastify';

export async function getTypicalCitiesInRussia() {
    noStore()
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/typical-cities?country=Russia`, {
        mode: 'no-cors',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export async function getTypicalCitiesInAbkhazia() {
    noStore()
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/typical-cities?country=Abkhazia`, {
        mode: 'no-cors',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export async function getRecommendedPlaces(destination: string) {
    const params = new URLSearchParams();
    if (destination) {
        params.set('search', destination);
    } else {
        params.delete('search');
    }
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/recommended-places?${params.toString()}`, {
        mode: 'no-cors',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export async function getExcursionCategories() {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/excursions/categories`, {
        mode: 'no-cors',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export type CredentialType = {
    name: string, mail: string, password: string, phoneNumber: string, position: string
}

export async function signup(credential: CredentialType) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/owners/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credential),
    })
    if (!res.ok) {
        const message = await res.text()
        return toast.error(message)
    } else {
        const message = await res.text()
        toast.success(message)
    }
}

export type LoginCredentialType = {
    mail: string
    password: string
}

export async function login(credential: LoginCredentialType) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/owners/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credential),
    })
    if (!res.ok) {
        localStorage.removeItem('hotel-owner-token')
        const { message } = await res.json()
        return toast.error(message)
    }
    const { message, token } = await res.json()
    localStorage.setItem('hotel-owner-token', token)
    return toast.success(message)
}

export async function getHotelTypesData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotelTypes`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getHotelTransportOptions() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotel_transport`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getHotelChildrenOptions() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/childrenFacilities`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getHotelStaffSays() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/staff`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getAccessibleEnvironments() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/accessibleEnvironments`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getSeaAndBeachAllOptions() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/seaAndBeach`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}