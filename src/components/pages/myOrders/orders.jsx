import React from 'react'
import { Linediv, Order, OrderLeft, OrderList, OrderRight, Writings, } from './style'
import order from "../../../assets/order.png"
const Orders = () => {
  return (
    <Order>
        <h1>My Orders</h1>
        <Linediv/>
        <OrderList>
            <OrderLeft>
                <img src={order} alt="order" />
            </OrderLeft>
            <OrderRight>
                <Writings>
                <div>
                  <h1>Name of the car</h1>
                    <p>Name of the car</p>
                  </div>
                  <div>
                    <h2>250$</h2>
                  </div>
                </Writings>
                <Writings>
                <div >
                        <h3>Location:</h3>
                        <p>Korea, Seoul</p>
                    </div>
                    <div>
                        <h3>Payment</h3>
                        <p>Credit card</p>
                    </div>
                </Writings>
            </OrderRight>
        </OrderList>
    </Order>
  )
}

export default Orders;