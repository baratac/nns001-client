import React from 'react';
import Moment from 'react-moment';


function getIcon(name) {
    const assetsPath = "../../assets/";
    const iconTable = {
        facebook: "facebook-3-64.png",
        instagram: "instagram-64.png",
        google: "google-plus-3-64.png",
        youtube: "youtube-64.png",
        twitter: "twitter-64.png",
        other: "square-rouded-64-png"
    }
    
    if (iconTable[name] === undefined) {
        return assetsPath + iconTable.other;
    } else {
        return assetsPath + iconTable[name];
    }
}


export default function PlatformInfo(props) {
    return (
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:content-center overflow-hidden h-auto sm:h-20  bg-indigo-100 text-gray-800 border-blue-800 border-2 rounded p-2">
            <div className="self-start flex flex-row sm:w-3/12 p-2 sm:p-0">
                <div className="w-4/12">
                    <img className="block w-16 bg-gray-100 border-blue-600" src={getIcon(props.name)} alt="Platform Icon"/>
                </div>
                <div className="flex flex-col content-start sm:content-center bg-gray-200 w-8/12 px-2">
                    <p className="block p-1 text-lg">{props.name}</p>
                    <p className="block text-gray-600 text-sm">{props.item.status}</p>
                </div>
            </div>
            <div className="self-center flex flex-col sm:flex-row sm:w-9/12 text-sm py-2">
                <div className="flex flex-col content-end w-full sm:w-8/12">
                    <div className="flex flex-row">
                        <p className="block pr-2">Starts: </p>
                        <Moment>{props.item.start_date}</Moment>
                    </div>
                    <div className="flex flex-row pt-2">
                        <p className="block pr-2">Ends: </p><Moment>{props.item.end_date}</Moment>
                    </div>
                </div>
                <div className="self-end w-full sm:w-4/12 mt-4 sm:mt-0">
                    <div className="flex flex-row sm:justify-center">
                        <p>Total Budget</p>
                        <p className="px-2">{props.item.total_budget}</p>
                    </div>
                    <div className="flex flex-row sm:justify-center pt-2">
                        <p>Remaining</p>
                        <p className="px-2">{props.item.remaining_budget}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
