import React from 'react';
import { Sparklines,SparklinesLine,SparklinesBars ,SparklinesReferenceLine } from 'react-sparklines';

export default function(props){

    return (
          <Sparklines data={props.data} 
                      width={100} height={20 
                      }>
             
              <SparklinesLine style={{ strokeWidth: 0.5, stroke: "#336acc", fill: "#fee" }}/>
              <SparklinesReferenceLine type='avg' />
          </Sparklines>  
           )
}