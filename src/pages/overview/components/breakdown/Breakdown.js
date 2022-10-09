import React from 'react'
import "./breakdown.css"
import BreakdownChart from './Charts/BreakdownChart'
import icon_bookmark from "./icons/icon_bookmark.png"
import icon_dotmenu from "./icons/icon_dotmenu.png"
import icon_heart from "./icons/icon_heart.png"



function BreakDown() {
  return (
    <div className='breakdown'>
        <div className="breakdown_top">
            <div className="breakdown_top_title">Overview</div>
            <div className="breakdown_top_icons">
              <img src={icon_heart} alt="" />
              <img src={icon_bookmark} alt="" />
              <img src={icon_dotmenu} alt="" />
            </div>
        </div>
        <div className="breakdown_main">
            <BreakdownChart />


        </div>
        <div className="breakdown_bottom">
        
        </div>
    </div>
  )
}

export default BreakDown