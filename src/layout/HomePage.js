import React from 'react'
import CampaignData from './components/HomeListItem'
export default function Home(props) {

    return (
        <div data-testid="home-page" className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="relative self-start h-20 w-full sm:h-40 sm:w-40 sm:mx-2 bg-green-300">
                    <p className="pl-2 font-semibold text-lg tracking-wide">nanos</p>
                    <p className="pl-2 font-semibold tracking-wide">challenge</p>
                    <p className="block sm:hidden absolute bottom-0 right-0 mr-2 mb-2  pl-2 text-gray-700 font-semibold text-sm tracking-wide">by Carlos Barata</p>  
                </div>
                <div className="hidden sm:block relative self-end h-20 w-full sm:h-40 sm:w-40 sm:mx-2 bg-green-300">
                    <p className="absolute bottom-0 right-0 mr-2 mb-2  pl-2 text-gray-700 font-semibold text-sm tracking-wide">by Carlos Barata</p>  
                </div>
            </div>
            <div className="w-full sm:w-10/12 mx-auto">
                <p className="sm:text-center text-2xl text-gray-800 ">Campaign List</p>
                <div className="bg-green-100 border border-green-500 rounded ">
                    <div className="hidden sm:flex flex-row justify-around font-semibold pt-2 pb-1 bg-green-200">
                        <p>Title</p>
                        <p>Goal</p>
                        <p>Total Budget</p>
                        <p>Status</p>
                        <p>Platforms</p>
                    </div>
                    {props.theList.map((item) => (<CampaignData key={item._id} item={item}/>))}
                </div>
                <div className="h-10">

                </div>
            </div>
        </div>
    )
}
