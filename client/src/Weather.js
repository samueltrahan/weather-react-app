import React from 'react'

export default function Weather({name, img, weather, description, temperature, feelsLike}) {
    return (
    <>
        <div class="col s12 m7">
        <h2 class="header">{name}'s Weather</h2>
        <div class="card horizontal">
        <div class="card-image">
        <img src={`/images/${img}.png`} alt="" />
        </div>
        <div class="card-stacked">
        <div class="card-content">
        <h3>{weather}</h3>
        <h3>{description}</h3>
        <h4>Temp: <br/><br/>{temperature} &deg;F</h4>
        <h4>Feels Like: <br/><br/>{feelsLike} &deg;F</h4>
        </div>
        <div class="card-action">
        </div>
      </div>
    </div>
  </div>
    </>
    )
}
