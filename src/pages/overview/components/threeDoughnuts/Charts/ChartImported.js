import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import "./chartImported.css"

function ChartImported() {

    const data = {
        labels: [],
        datasets: [{
          label: 'My First Dataset',
          data: [50, 50],
          backgroundColor: [
            '#44e6de',
            "#161616",
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

export default ChartImported