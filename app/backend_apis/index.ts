import { unstable_noStore as noStore } from 'next/cache';

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