import React from 'react'
import placeone from "../../../assets/place1.png"
import placetwo from "../../../assets/place3.png"
import placethree from "../../../assets/place2.png"
import { PlaceOffers, PlaceOptions, PlacesBack } from './placesStyle'
import Reveal from 'react-reveal/Reveal';

const Places = () => {
    return (
        <div>
            <PlacesBack>
                <a href="/">Home / Camping place</a>
                <p>Camping places</p>
            </PlacesBack>
            <Reveal>
            <PlaceOptions>
                <PlaceOffers>
                    <img src={placeone} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
                <PlaceOffers>
                    <img src={placetwo} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
                <PlaceOffers>
                    <img src={placethree} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
                
            </PlaceOptions>
            </Reveal>
            <Reveal>
            <PlaceOptions>
                <PlaceOffers>
                    <img src={placeone} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
                <PlaceOffers>
                    <img src={placetwo} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
                <PlaceOffers>
                    <img src={placethree} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
            </PlaceOptions>
            </Reveal>
            <Reveal>
            <PlaceOptions>
                <PlaceOffers>
                    <img src={placeone} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
                <PlaceOffers>
                    <img src={placetwo} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
                <PlaceOffers>
                    <img src={placethree} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
            </PlaceOptions>
            </Reveal>
            <Reveal>
            <PlaceOptions>
                <PlaceOffers>
                    <img src={placeone} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
                <PlaceOffers>
                    <img src={placetwo} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
                <PlaceOffers>
                    <img src={placethree} alt="" />
                    <div>
                        <p>Camping place name</p>
                        <a href="/location">Location</a>
                    </div>
                </PlaceOffers>
            </PlaceOptions>
            </Reveal>
        </div>
    )
}

export default Places