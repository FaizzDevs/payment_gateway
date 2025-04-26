"use client";

import React, { useState } from "react";

const Checkout = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="flex flex-col items-center mt-4">
                <div className="flex items-center justify-between w-full max-w-xs border border-gray-300 rounded-lg p-2">
                    <button className="text-3xl font-bold cursor-pointer transition-all">
                        -
                    </button>
                </div>
            </div>
        </>
    )
}

export default Checkout;