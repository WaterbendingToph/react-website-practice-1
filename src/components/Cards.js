import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>CHECK OUT THESE EPIC DESTINATIONS</h1>
            <div className="cards__container">
                <ul className="cards__wrapper">
                    <CardItem src='images/waterfall.jpg' text="Expore the hidden waterfall deep inside the Amazon Jungle!" label="Adventure" path="/services"/>
                    <CardItem src='images/islands.jpg' text="Travel through the islands of Bali in a private cruise" label="Luxury" path="/services"/>
                </ul>
                <ul className="cards__wrapper">
                    <CardItem src='images/boats.jpg' text="Set sail in the Atlantic Ocean visiting Uncharted Waters" label="Mystery" path="/services"/>
                    <CardItem src='images/soccer.jpg' text="Experience Football on the top of the Himilayan Mountains" label="Adventure" path="/products"/>
                    <CardItem src='../images/desert.jpg' text="Ride through the Sahara Desert on a guided camel tour" label="Adrenaline" path="/sign-up"/>
                </ul>
            </div>
        </div>
    )
}

export default Cards;