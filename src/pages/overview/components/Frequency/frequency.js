import React from 'react'
import "./frequency.css"
import icon_bookmark from "./icons/icon_bookmark.png"
import icon_arrowup from "./icons/icon_arrowup.png"
import icon_dotmenu from "./icons/icon_dotmenu.png"
import icon_heart from "./icons/icon_heart.png"
import BarChart02 from "./charts/barChart"


function Frequency() {
  return (
    <div className='frequency'>
        <div className="frequency_top">
            <div className="frequency_top_title">Frequency</div>
            <div className="frequency_top_icons">
              <img src={icon_heart} alt="" />
              <img src={icon_bookmark} alt="" />
              <img src={icon_dotmenu} alt="" />
            </div>
        </div>
        <div className="frequency_main">
            <BarChart02 />
        </div>
        <div className="frequency_bottom">
          <img src={icon_arrowup} alt="" />
          <p>6.2% more than yesterday</p>
        </div>
    </div>
  )
}

export default Frequency