import React from 'react';
import { Link } from 'react-router-dom';

const listImage = {
    "img1.jpg": 'https://res.cloudinary.com/mut-arte/image/upload/v1584405414/nns-challenge/img1.jpg',
    "img2.jpg": 'https://res.cloudinary.com/mut-arte/image/upload/v1584405414/nns-challenge/img2.jpg',
    "img3.jpg": 'https://res.cloudinary.com/mut-arte/image/upload/v1584405414/nns-challenge/img3.jpg',
    "img4.jpg": 'https://res.cloudinary.com/mut-arte/image/upload/v1584405414/nns-challenge/img4.jpg' 
};

function getHeader(item) {
    const keyList = Object.keys(item).filter(key => (key.search(/header/) !== -1));
    
    return (keyList.map((val, index) =>  <h4 className="font-semibold leading-tight mb-1" key={index}>{ item[val] }</h4>));
}

export default function PlatformCreative(props) {
    return (
        <div className="flex flex-col w-10/12 sm:w-5/12 bg-indigo-100 overflow-hidden border-blue-800 rounded mx-auto sm:mx-2 my-4 p-1 shadow-lg">
            {getHeader(props.item)}
            <img src={listImage[props.item.image]} alt="v"/>
            <p className="font-medium leading-tight mt-2 text-sm">{props.item.description}</p>
            <Link className="text-right mr-4 text-blue-700 underline visited:text-purple-700" to="/">{props.item.url}</Link>
        </div>
    )
}
