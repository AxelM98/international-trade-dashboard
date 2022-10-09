import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import "./breakdownChart.css"

function BreakdownChart() {

    const data = {
        labels: [],
        datasets: [{
          label: 'My First Dataset',
          data: [35, 40, 40],
          backgroundColor: [
            'blue',
            "green",
            "red"
          ],
          hoverOffset: 0,
          borderWidth: 0,
          borderRadius: 5,
       
        }],
        
      };

      var options = {        
        cutout: 30,
        maintainAspectRatio: false
    };

    
    return (
        <div className='chartImported'>
            <div className="chartImported_chartStyle">
                <Doughnut data={data} style={{width:"100%",height:"100%"}} options={options} />
                <div className="chartImported_textContainer">50%</div>
            </div>
        </div>
      )
    }

export default BreakdownChart