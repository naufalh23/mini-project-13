const base_url = process.env.BASE_URL_API || "http://localhost:8000/api"

export const getEvents = async (search: string = "") => {
    const res = await fetch(`${base_url}/events?search=${search}`, { cache: 'no-cache' })
    const result = await res.json()

    return { result, events: result.events, ok: res.ok }
}

export const getEventSlug = async (slug: string) => {
    const res = await fetch(`${base_url}/events/${slug}`, { next: {  revalidate: 3600 } })
    const result = await res.json()

    return { result, events: result.events, ok: res.ok }
}