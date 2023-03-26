/* eslint-disable */

import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51MopphGv05gFj0Vru18gOcZ6IIlW6MwCU7Wih87aY6JIGqhvjpXat1Ul0eFatNSrcfBV7kgfiCA2rTsVLMhQbFWw003dyH27NW"
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};
