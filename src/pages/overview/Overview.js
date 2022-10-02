import React from 'react'
import "./styles/overview.css"

function Overview() {
  return (
    <div className='overview'>
        <div className='overview_navbar'></div>
        <div className='overview_statistics'>
          <div className='overview_statistics_worldmap'></div>
          <div className='overview_statistics_section1'>
            <div className='overview_statistics_section1_export'></div>
            <div className='overview_statistics_section1_import'></div>
            <div className='overview_statistics_section1_location'></div>
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