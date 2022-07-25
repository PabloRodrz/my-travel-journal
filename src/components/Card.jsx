import React from "react";
import marker from '../images/Fill-219.png'
function Card(props) {
  return (
    <div className="card-container">
      <img className="card--img" src={props.item.imageUrl} alt="placeimg" />
      <div>
        <span className="card--location"> <img className="location--img" src={marker} alt="marker" /> {props.item.location} </span>
        <span className="card--mapsurl"> <a href={props.item.googleMapsUrl} target="blank">View on google maps</a> </span>
        <h1 className="card--title"> {props.item.title} </h1>
        <p className="card--dates">
          <b>  {props.item.startDate} - {props.item.endDate}</b>
        </p>
        <p className="card--description"> {props.item.description} </p>
      </div>
    </div>
  )
}

export default Card