"use client";

import Image from "next/image";
import { products } from "./libs/product";
import Checkout from "./components/Checkout";
import { Toaster } from "sonner";
import { useEffect } from "react";
// import TotalSaldo from "./api/total-saldo";

export default function Home() {
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <main className="sm:px-6 px-4 flex items-center justify-center py-8">
        <div className="flex flex-row gap-x-4  items-center">
          <Image 
            src={products.image}
            alt="Baju"
            width={300}
            height={300}
            className="w-full object-cover max-w-xl rounded-lg shadow-md"
          />
          <div className="border w-full border-gray-300 flex flex-col rounded-lg p-4 mt-4">
            <h3 className="mt-4 text-lg font-medium text-gray-900">{products.name}</h3>
            <p className="mt-1.5 text-sm text-gray-700">Rp. {products.price}</p>
            <p className="text-sm text-gray-700 text-justify">{products.desc}</p>
            <Checkout />
            {/* <TotalSaldo /> */}
            <Toaster richColors position="bottom-right" />
          </div>
        </div>
      </main>
    </>
  );
}
