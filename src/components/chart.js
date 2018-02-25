import React from 'react';
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

export default function(props){

    return (
        <div>
          <Sparklines data={props.data} 
                      width={100} height={20}>
              <SparklinesLine color="orange"/>
              <SparklinesReferenceLine type='avg'/>
          </Sparklines>  
        </div>
    )
}