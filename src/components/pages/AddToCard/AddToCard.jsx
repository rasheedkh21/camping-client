import React, { useState } from "react";
import { ButtonDiv, CarView, CardContainer, Linediv } from "./AddToCardStyle";
import "./card.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import { Carousel } from "react-responsive-carousel";

const AddToCard = () => {
  const [accountDetails, setAccountDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [cardDetails, setCardDetails] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
    billingZipCode: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nameOnCard: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
    billingZipCode: "",
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // You can perform your action here, like submitting the data to a server.
      alert("Order placed successfully!");
    }
  };

  // Form validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validation rules for account details form
    if (!accountDetails.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!accountDetails.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(accountDetails.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(accountDetails.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
      isValid = false;
    }

    // Validation rules for card details form
    if (!cardDetails.nameOnCard.trim()) {
      newErrors.nameOnCard = "Name on card is required";
      isValid = false;
    }

    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardDetails.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
      isValid = false;
    }

    const monthRegex = /^(0[1-9]|1[0-2])$/;
    if (!monthRegex.test(cardDetails.expirationMonth)) {
      newErrors.expirationMonth = "Invalid expiration month";
      isValid = false;
    }

    const yearRegex = /^(20)\d{2}$/;
    if (!yearRegex.test(cardDetails.expirationYear)) {
      newErrors.expirationYear = "Invalid expiration year";
      isValid = false;
    }

    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cardDetails.cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
      isValid = false;
    }

    const zipCodeRegex = /^\d{5}$/;
    if (!zipCodeRegex.test(cardDetails.billingZipCode)) {
      newErrors.billingZipCode = "Invalid billing zip code";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Input change handler for both forms
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input field belongs to the account details or card details form
    if (name in accountDetails) {
      setAccountDetails({
        ...accountDetails,
        [name]: value,
      });
    } else if (name in cardDetails) {
      setCardDetails({
        ...cardDetails,
        [name]: value,
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Card</h1>
      <Linediv />
      <CardContainer>
        <CarView>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
            <div>
              <img
                src="https://happiercamper.com/cdn/shop/files/Autocamp_Trio_1400x.jpg?v=1614291514"
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                src="https://happiercamper.com/cdn/shop/files/HCT_1600x1000_A_1400x.jpg?v=1614285440"
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                src="https://happiercamper.com/cdn/shop/files/HCT_1600x1000_B_1400x.jpg?v=1614285440"
                alt="Slide 3"
              />
            </div>
            {/* Add more slides as needed */}
          </Carousel>
          <ButtonDiv>Purchase price 52541$</ButtonDiv>
        </CarView>
        <div className="registerform">
          <h2 className="carname">Car name</h2>
          <h3 className="sum">550$</h3>
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            viverra amet, tortor tristique odio scelerisque aenean sodales. Nunc
            risus dolor amet porttitor tellus
          </p>{" "}
          <br /> <br /> <br /> <br /> <br />
          <button type="submit">Continue to payment</button> <br /> <br />
          <h1>Enter Account Details</h1>
          <form onSubmit={handleSubmit}>
            {/* Account details form */}
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={accountDetails.firstName}
              onChange={handleInputChange}
              required
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
            <br />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={accountDetails.lastName}
              onChange={handleInputChange}
              required
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
            <br />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={accountDetails.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <br />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={accountDetails.phoneNumber}
              onChange={handleInputChange}
              required
            />
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
            <br />
          </form>
          <h1>Card Details</h1>
          <form onSubmit={handleSubmit}>
            {/* Card details form */}
            <label htmlFor="nameOnCard">Name on Card:</label>
            <input
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              value={cardDetails.nameOnCard}
              onChange={handleInputChange}
              required
            />
            {errors.nameOnCard && (
              <span className="error">{errors.nameOnCard}</span>
            )}
            <br />

            <label htmlFor="cardNumber">Card Number (16 digits):</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
            {errors.cardNumber && (
              <span className="error">{errors.cardNumber}</span>
            )}
            <br />

            <label htmlFor="expirationMonth">Card Expiration Month (MM):</label>
            <input
              type="text"
              id="expirationMonth"
              name="expirationMonth"
              value={cardDetails.expirationMonth}
              onChange={handleInputChange}
              required
            />
            {errors.expirationMonth && (
              <span className="error">{errors.expirationMonth}</span>
            )}
            <br />

            <label htmlFor="expirationYear">Card Expiration Year (YYYY):</label>
            <input
              type="text"
              id="expirationYear"
              name="expirationYear"
              value={cardDetails.expirationYear}
              onChange={handleInputChange}
              required
            />
            {errors.expirationYear && (
              <span className="error">{errors.expirationYear}</span>
            )}
            <br />

            <label htmlFor="cvv">CVV (3 digits):</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleInputChange}
              required
            />
            {errors.cvv && <span className="error">{errors.cvv}</span>}
            <br />

            <label htmlFor="billingZipCode">Billing Zip Code:</label>
            <input
              type="text"
              id="billingZipCode"
              name="billingZipCode"
              value={cardDetails.billingZipCode}
              onChange={handleInputChange}
              required
            />
            {errors.billingZipCode && (
              <span className="error">{errors.billingZipCode}</span>
            )}
            <br />

            <button type="submit">Place Order</button>
          </form>
        </div>
      </CardContainer>
    </div>
  );
};

export default AddToCard;
