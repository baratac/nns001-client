import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeListItem(props) {
    return (
        <div className="flex flex-col sm:flex-row w-full text-gray-800 hover:bg-green-600 hover:text-gray-100 hover:font-semibold">
            <div className="flex flex-col sm:flex-row content-center w-full sm:w-1/5">
                <p className="sm:hidden block font-semibold pt-2 pb-1 bg-green-200">Title</p>
                <p className="p-2 self-center font-semibold">{props.item.name}</p>
            </div>
            <div className="flex flex-col sm:flex-row content-center  w-full sm:w-1/5">
                <p className="sm:hidden block font-semibold pt-2 pb-1 bg-green-200">Goal</p>
                <p className="p-2 self-center">{props.item.goal}</p>
            </div>
            <div className="flex flex-col sm:flex-row content-center justify-center w-full sm:w-1/5">
                <p className="sm:hidden block font-semibold pt-2 pb-1 bg-green-200">Total Budget</p>
                <p className="self-center">{props.item.total_budget}</p>
            </div>
            <div className="flex flex-col sm:flex-row content-center justify-center w-full sm:w-1/5">
                <p className="sm:hidden block font-semibold pt-2 pb-1 bg-green-200">Status</p>
                <p className="self-center">{props.item.status}</p>
            </div>
            <div className="flex flex-col ontent-center justify-center w-full sm:w-1/5 border-b border-green-700 sm:border-0">
                <p className="sm:hidden block font-semibold pt-2 pb-1 bg-green-200">Platforms</p>
                {Object.keys(props.item.platforms).map(
                    (platform, index) => (
                        <Link 
                            to={'/campaign?id=' + props.item.id + '&platform=' + platform} 
                            className="pb-1 self-center text-blue-700 underline hover:text-blue-200" key={index}>{platform}
                        </Link>
                    )
                )}
            </div>
        </div>

    )
}
