import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col sm:flex-row  mx-auto items-center">
            <div className="h-20 w-full sm:h-40 sm:w-40 sm:mx-2 bg-gray-300 text-green-700">
                <p className="pl-2 font-semibold text-lg tracking-wide">nanos</p>
                <p className="pl-2 font-semibold tracking-wide">challenge</p>  
            </div>
            <div className="flex flex-col content-between">
                <h1 className="block text-4xl font-bold tracking-wide ml-2 sm:ml-20 text-gray-700">404 Not Found</h1>
                <Link className="self-center text-blue-500 underline ml-2 sm:ml-10 mt-2 text-2xl" to="/">Home</Link>
            </div>
        </div>
    )
}
