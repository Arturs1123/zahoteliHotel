import { toast } from 'react-toastify';
import { ApplyDataType } from '../register/page';
import { redirect } from 'next/navigation';

export type LoginCredentialType = {
    mail: string
    password: string
}
export type CredentialType = {
    name: string, mail: string, password: string, phoneNumber: string, position: string
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

export async function signup(credential: CredentialType) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/owners/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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

export async function login(credential: LoginCredentialType) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/owners/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
    window.location.href = "/"
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

export async function getConferenceFacilities() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/conferenceFacilities`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getAmentities() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/roomAmenities`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getBeautyAndHealth() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/beautyAndHealth`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getSports() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/entertainmentAndSports`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getBars() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotelBar`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getNutritions() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotelNutrition`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getServices() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotelService`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getInfrastructures() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotelInfrastructure`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function uploadHotelThumb(thumbFile: File) {
    const formData = new FormData()
    formData.append('thumb', thumbFile)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotel/thumbnail`, {
        method: 'POST',
        body: formData,
    })
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getRoomEquipments() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/roomEquipments`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getRoomEntertainments() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/roomEntertainments`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getRoomBathroom() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/roomBathroom`)
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function applyHotelProperty(data: ApplyDataType) {
    const token = localStorage.getItem('hotel-owner-token') ? localStorage.getItem('hotel-owner-token') : null

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotel`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    toast.success('ok')
    return res.json()
}

export async function getMyHotelData() {
    const token = localStorage.getItem('hotel-owner-token') ? localStorage.getItem('hotel-owner-token') : null

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotel/my-hotel-data`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getMyHotelStatus() {
    const token = localStorage.getItem('hotel-owner-token') ? localStorage.getItem('hotel-owner-token') : null

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotel/my-hotel-status`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function removeMyHotel() {
    const token = localStorage.getItem('hotel-owner-token') ? localStorage.getItem('hotel-owner-token') : null

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/hotel/remove-my-hotel`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    if (!res.ok) {
        const { error } = await res.json()
        return toast.error(error)
    }
    return res.json()
}

export async function getBookingsUptoMyHotel() {
    const token = localStorage.getItem('hotel-owner-token') ? localStorage.getItem('hotel-owner-token') : null

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/booking/myhotel`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) {
        if (res.status == 401) {
            localStorage.setItem('hotel-owner-token', "")
            redirect('/')
        }
        const { error } = await res.json();
        return toast.error(error)
    }
    return res.json()
}