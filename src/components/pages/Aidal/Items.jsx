import React from 'react'
import { CArID, Carname, Optionsdiv, Review } from './style'
import review from "../../../assets/review.png"


const Items = () => {
  return (
    <div>
        <Optionsdiv>
            <h1>Premium Review 35</h1>
            <div>
                <select name="" id="">
                    <option value="">Best</option>
                    <option value="">Primer</option>
                    <option value="">Standart</option>
                </select>
            </div>
        </Optionsdiv>
        <Review>
            <img src={review} alt="review" />
            <Carname>
                <h1>Car name</h1>
                <p>brand</p>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
            </Carname>
            <CArID>
                <div>
                    <h1>ID</h1>
                    <p>254</p>
                </div>
                <div>
                    <h1>Date:</h1>
                    <p>2022.22.02</p>
                </div>
                <div>
                    <h1>Viewed</h1>
                    <p>135</p>
                </div>
            </CArID>
        </Review>
    </div>
  )
}

export default Items