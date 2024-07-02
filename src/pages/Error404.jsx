import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error404 = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Something went wrong!</h1>
            <h2>{error.status} {error.statusText}</h2>
        </div>
    )
}