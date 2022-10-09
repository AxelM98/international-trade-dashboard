import React, { useState } from 'react'
import BarChart from './chartOne'
import {UserData} from "./Data.js"
import "./barChart.css"


// Imported standard and plain bar chart from BarChart.js
// Imported demo data as UserData from Data.js
function BarChart02() {

    const [userData, setUserData] = useState({
        labels: ["Mon"],
        datasets: [{
          data: [80000],
          backgroundColor: [
            "#ffb1c1",
            "#9ad0f5",
          ],
          borderColor: ["#ff859f","#64b7ef"],
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
          tension: 0.5,
          barPercentage: 1
        }]  
      })

      const options = {
        plugins: {
            legend: {
              display: false
            }
          },
          maintainAspectRatio: false,
          
        scales: {
            
          x: {
            display: false,
            grid: {
              display: false,
            }
          },
          y: {
            display: false,
            grid: {
              display: false
            }
          },
        },
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
      }

      const style = {width:"100%", height: "10px"}

  return (
    <div className='barChart02'>
        <div className="barChart02_chartStyle">
          <BarChart chartData={userData} options={options} style={style} />
        </div>
    </div>
  )
}


export default BarChart02