import React from 'react'
import './Card.css'

interface Props {
  source: string;
  companyName: string;
  ticker: string;
  price: number;
}

const Card = (props: Props) => {
  return (
    <div className="card">
        <img src={props.source} alt={props.companyName} />
        <div className="details">
            <h2>{props.ticker}</h2>
            <p>${props.price.toFixed(2)}</p>
        </div>
        <p className="info"> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit soluta magni qui optio, non, beatae repellendus sed assumenda aut, fugiat ab facilis. Explicabo, minus! Consequatur corrupti magnam qui at explicabo.
            </p>
    </div>
  )
}

export default Card