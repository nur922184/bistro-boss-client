import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

//TODO: add published able key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please  pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;