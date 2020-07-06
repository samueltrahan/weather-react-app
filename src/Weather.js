import React from 'react'

export default function Weather({weather, description, temperature}) {
    return (
        <div>
            <h1>Todays Weather</h1>
            {weather}
            <h3>Details </h3>
            {description}
            <h3>Temperature</h3>
            {temperature}
        </div>
    )
}
