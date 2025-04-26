import Image from "next/image";
import { products } from "./libs/product";
import Checkout from "./components/Checkout";

export default function Home() {
  return (
    <>
      <main className="max-w-xl mx-auto sm:px-6 px-4 py-8">
        <div className="flex flex-col items-center">
          <Image 
            src={products.image}
            alt="Baju"
            width={200}
            height={200}
            className="w-full object-cover rounded-lg shadow-md"
          />
          <div className="border border-gray-300 rounded-lg p-4 mt-4">
            <h3 className="mt-4 text-lg font-medium text-gray-900">{products.name}</h3>
            <p className="mt-1.5 text-sm text-gray-700">Rp. {products.price}</p>
            <p className="text-sm text-gray-700 text-justify">{products.desc}</p>
            <Checkout />
          </div>
        </div>
      </main>
    </>
  );
}
