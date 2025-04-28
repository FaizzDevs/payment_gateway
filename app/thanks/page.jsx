import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-700 text-white">
            <h3 className="text-center">Thank You</h3>
            <Link href="/">Back to home</Link>
        </div>
    );
};

export default Page;