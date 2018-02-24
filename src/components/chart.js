import React from 'react';
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';



function avg_temps(data, sum=0) {
    for(let i=0; i<data.length ; i++)  {
        sum += data[i];
    }  
    return Math.round(sum / data.length)
}

export default function a(props){

    return (
        <div>
        <Sparklines data={props.data} 
                    width={50} height={50}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type='avg'/>
        </Sparklines>  
        <div>{avg_temps(props.data)} {props.units}</div>
        </div>
    )
}