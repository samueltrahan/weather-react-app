import React from 'react'

export default function Weather({name, weather, description, temperature}) {
    return (
        <div>
            <h1>Today's Weather</h1>
            {name}<br/><br/>
            {weather}
            <h3>Details </h3>
            {description}
            <h3>Temperature</h3>
            {temperature} &deg;F
        </div>
    )
}
