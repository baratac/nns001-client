import React from 'react'

function kpiList(item) {

    return Object.keys(item).map( (key, index) => (
        <div className="flex flex-row justify-between hover:bg-red-200 hover:font-medium" key={index}>
            <p className="capitalize w-1/2 pl-4">{key.replace(/_/g,' ')}</p> 
            <p className="pr-4">{item[key]}</p>
        </div>
    ));
}

export default function PlatformInsights(props) {
    return (
        <div className='self-center w-10/12 sm:w-5/12 bg-indigo-100 text-gray-800 border-blue-800 rounded mx-auto sm:mx-2 my-2 sm:my-4 p-1 shadow-lg'>
            <h4 className="text-2xl bg-teal-300 font-semibold tracking-wide text-center">Insights</h4>
            {kpiList(props.item)}
        </div>
    )
}
