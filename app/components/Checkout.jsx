"use client";

import React, { useState } from "react";
import { products } from "../libs/product";
import Link from "next/link";

const Checkout = () => {
    const [quantity, setQuantity] = useState(1);
    const [paymentLink, setPaymentLink] = useState("");
    const [grossAmount, setGrossAmount] = useState(products.price * quantity);

    

    const decreaseQuantity = () => {
        setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
    };

    const increaseQuantity = () => {
        setQuantity((prevState) =>prevState + 1);
    };

    const checkout = async () => {
        const data = {
            id: products.id,
            productName: products.name,
            price: products.price,
            quantity: quantity,
        }

        const response = await fetch("/api/token", {
            method: "POST",
            body: JSON.stringify(data),
        })

        const requestData = await response.json();
        window.snap.pay(requestData.token);
        console.log(requestData);
    };

    const generatePayment = async () => {
        const secret = process.env.NEXT_PUBLIC_SECRET;
        const encodedSecret = Buffer.from(secret).toString("base64");
        const authString = `Basic ${encodedSecret}`;

        let data = {
            item_details: 
            [
                {
                    id: products.id,
                    name: products.name,
                    price: products.price,
                    quantity: quantity,
                },
            ],
            transaction_details: {
                order_id: products.id,
                gross_amount: products.price * quantity,
            }
        }

        useEffect(() => {
            setGrossAmount(products.price * quantity);
        }, [quantity]);


        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/payment-links`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": authString
            },
            body: JSON.stringify(data)
        })

        const paymentLink = await response.json();
        setPaymentLink(paymentLink.payment_url);
    }

    

    

    return (
        <>
            <div className="flex flex-col items-center mt-4">
                <div className="flex items-center justify-around w-full max-w-xs border border-gray-300 rounded-lg p-2">
                    <button 
                        className="text-3xl font-bold cursor-pointer transition-all"
                        onClick={decreaseQuantity} >
                        -
                    </button>
                    <input 
                        type="number" 
                        id="quantity"
                        value={quantity}
                        className="w-12 text-center border border-gray-300 rounded-xl p-2"
                        onChange={(e) => setSomeNumber(Number(e.target.value))}
                    />
                    <button 
                        className="text-3xl font-bold cursor-pointer transition-all"
                        onClick={increaseQuantity} >
                        +
                    </button>
                </div>
                <button 
                    className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 cursor-pointer"
                    onClick={checkout} >
                    Checkout
                </button>
            </div>
            <button 
                className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition-all duration-200 cursor-pointer"
                onClick={generatePayment} >
                    <Link href={paymentLink} target="_blank">Klik disini</Link>
            </button>

            <p className="mt-4 text-lg font-semibold">
    <strong>Gross Amount:</strong> Rp {grossAmount.toLocaleString()}
</p>

        </>
    );
};

export default Checkout;