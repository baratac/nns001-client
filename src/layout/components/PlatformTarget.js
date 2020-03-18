import React from 'react'

export default function PlatformTarget(props) {
    return (
        <div className='w-11/12 bg-indigo-100 text-gray-800 border-blue-800 rounded mx-auto p-1 shadow-lg'>
            <h4 className="text-2xl bg-indigo-300 font-semibold tracking-wide text-center">Target Audiance</h4>
            <div className="flex flex-col sm:flex-row items-center justify-around my-2">
                <div className ="self-start sm:w-1/4 bg-blue-100 border-gray-600 border-solid border rounded shadow">
                    <h4 className="bg-indigo-300 text-lg font-semibold tracking-wide text-center">People</h4>
                    <div className="flex flex-row justify-between">
                        <p className="w-1/2 text-lg font-semibold tracking-wide pl-2">Gender</p>
                        <p className="pr-4">{props.item.genders.join('/')}</p>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <p className="w-1/2 text-lg font-semibold tracking-wide pl-2 inline-block">Age Range</p>
                        <p className="pr-4 inline-block">{props.item.age_range.join('-')}</p>
                    </div>
                </div>
                <div className ="self-center sm:self-start sm:w-1/4 mt-2 sm:mt-0 bg-blue-100 border-gray-600 border-solid border rounded shadow">
                    <h4 className="text-lg bg-indigo-300 font-semibold tracking-wide text-center">Geographic</h4>
                    <p className="text-lg font-semibold tracking-wide pl-2">Languages</p>
                    <p className="pl-4">{props.item.languages.join(',')}</p>
                    <p className="text-lg font-semibold tracking-wide pl-2">Locations</p> 
                    {props.item.locations.map((val, idx) => (<p className="pl-4" key={idx}>{val}</p>))}
                </div>
                <div className ="self-end sm:self-start sm:w-1/4 mt-2 sm:mt-0 bg-blue-100 border-gray-600 border-solid border rounded shadow">
                    {props.item.interests.length > 0 ? 
                        (
                            <div>
                                <h4 className="text-lg bg-indigo-300 font-semibold tracking-wide text-center">Interests</h4>
                                {props.item.interests.map((val, idx) => (<p className="pl-4" key={idx}>{val}</p>))}
                            </div>
                        ) :
                        (
                            <div>
                                <h4 className="text-lg bg-indigo-300 font-semibold tracking-wide text-center">Keywords</h4>
                                {props.item.KeyWords.map((val, idx) => (<p className="pl-4" key={idx}>{val}</p>))}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
/*
{props.item.genders.map((val, idx) => (<p key={idx} className="pl-4 inline-block">{val + ' '}</p>))}
<p>Age Range {props.item.age_range.map((val, idx) => (<span key={idx}>{val + '-'}</span>))}</p>
{props.item.languages.map((val, idx) => (<p key={idx}>{val}</p>))}
*/