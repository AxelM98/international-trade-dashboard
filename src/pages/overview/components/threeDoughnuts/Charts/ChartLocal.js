import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import "./chartLocal.css"
import 'chart.js/auto';


function ChartLocal() {

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
          borderRadius: 0,
       
        }],
        
      };

      var options = {        
        cutout: 39,
        maintainAspectRatio: false
    };

    
    return (
        <div className='chartLocal'>
            <div className="chartLocal_chartStyle">
                <Doughnut data={data} style={{width:"80px",height:"80px"}} options={options} />
                <div className="chartLocal_textContainer">50%</div>
            </div>
        </div>
      )
    }

export default ChartLocal