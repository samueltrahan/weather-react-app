import React from 'react'

export default function Weather({name, weather, description, temperature}) {
    return (
    <>
        <div class="col s12 m7">
        <h2 class="header">{name}'s Weather</h2>
        <div class="card horizontal">
        <div class="card-image">
        </div>
        <div class="card-stacked">
        <div class="card-content">
        <h3>{weather}</h3>
        <h3>{description}</h3>
        <h4>Temp: <br/><br/>{temperature} &deg;F</h4>
        </div>
        <div class="card-action">
        </div>
      </div>
    </div>
  </div>
    </>
    )
}
