'use client'

import { useEffect, useState } from "react"

export default function Clock() {
    // const [client, setClient] = useState(false)
    // useEffect(() => setClient(true), [])
    // if (!client) return;

    const [client, setClient] = useState(false)
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        setClient(true)

        // every second, update the time
        const interval = setInterval(() => setTime(new Date()), 1000)

        // cleanup
        return () => clearInterval(interval)
    }, [])

    if (!client) return 'Loading...';

    return time.toLocaleTimeString()
}
