import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';

import Info from './components/PlatformInfo';
import Creative from './components/PlatformCreative';
import Insights from './components/PlatformInsights';
import Target from './components/PlatformTarget';



function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function PlatformPage(props) {
//    const [campaignData, setCampaignData] = useState(null);
    const [platformData, setPlatformData] = useState(null);
    let query = useQuery();

    useEffect(() => {
        const theCampaign = props.theList.find( item => item.id === query.get('id'));
//        setCampaignData(theCampaign);
        const platform = query.get('platform');
        if (theCampaign !== undefined) {
            setPlatformData(theCampaign.platforms[platform]);
        }
    }, [props.theList, query])


    return (
        <div data-testid="platform-page" className="h-full w-full bg-gray-200">
            { platformData ?
            (
                <div className=" mt-2">                 
                    <Info name={query.get("platform")} item={platformData} />
                    <div className="flex flex-col sm:flex-row justify-around">
                        <Creative item={platformData.creatives} />
                        <Insights item={platformData.insights} />
                    </div>
                    <Target item={platformData.target_audiance} />
                </div>
            )
            : <div></div> }
            <div className="flex flex-row justify-center p-2">
                <Link className="" to="/">
                    <img className="block w-10 m-2" src="../assets/x-mark-64.png" alt="close sign"/>
                </Link>
            </div>
        </div>
    )
}
