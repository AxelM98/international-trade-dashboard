import React from 'react'
import "./styles/overview.css"
import ThreeDoughnuts from "./components/threeDoughnuts/ThreeDoughnuts";
import Frequency from './components/Frequency/frequency';
import Breakdown from "./components/breakdown/Breakdown"

function Overview() {
  return (
    <div className='overview'>
        <div className='overview_navbar'></div>
        <div className='overview_statistics'>
          <div className='overview_statistics_worldmap'></div>
          <div className='overview_statistics_section1'>
            <div className='overview_statistics_section1_export'>
              <ThreeDoughnuts />
            </div>
            <div className='overview_statistics_section1_import'>
              <Frequency />
            </div>
            <div className='overview_statistics_section1_location'>
              <Breakdown />
            </div>
          </div>
          <div className='overview_statistics_section2'>
            <div className='overview_statistics_section2_export'></div>
            <div className='overview_statistics_section2_import'></div>
          </div>
        </div>
    </div>
  )
}

export default Overview