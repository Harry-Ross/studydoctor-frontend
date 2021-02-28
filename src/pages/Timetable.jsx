import { Box, Grid, Heading } from 'grommet';
import React, { Component } from 'react'

import GridLayout from 'react-grid-layout';



class TimetablePage extends Component {
    state = {  }
    render() { 
          const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
          const times = ["15:00", "16:00", "17:00", "18:00", "19:00"]
          return (
            <div>
                  <GridLayout compactType={"vertical"} className="layout" cols={6} rowHeight={30} width={1800}>
                      
                      <div className="dayofweek" key="mo" data-grid={{x: 1, y: 0, w: 1, h: 1, static: true}}>Monday</div>
                      <div className="dayofweek"  key="tu" data-grid={{x: 2, y: 0, w: 1, h: 1, static: true}}>Tuesday</div>
                      <div className="dayofweek"  key="we" data-grid={{x: 3, y: 0, w: 1, h: 1, static: true}}>Wednesday</div>
                      <div className="dayofweek"  key="th" data-grid={{x: 4, y: 0, w: 1, h: 1, static: true}}>Thursday</div>
                      <div className="dayofweek"  key="f" data-grid={{x: 5, y: 0, w: 1, h: 1, static: true}}>Friday</div>

                      <div className="timeofday" key="asd" data-grid={{x: 0, y: 1, w: 1, h: 2, static: true}}>15:00</div>
                      <div className="timeofday" key="asdd" data-grid={{x: 0, y: 3, w: 1, h: 2, static: true}}>16:00</div>
                      <div className="timeofday" key="asddd" data-grid={{x: 0, y: 5, w: 1, h: 2, static: true}}>17:00</div>
                      <div className="timeofday" key="asdddd" data-grid={{x: 0, y: 7, w: 1, h: 2, static: true}}>18:00</div>
                      <div className="timeofday" key="asddddd" data-grid={{x: 0, y: 9, w: 1, h: 2, static: true}}>19:00</div>


                      <div className="green" key="b" data-grid={{x: 1, y: 1, w: 1, h: 2, minW: 1, maxW: 1}}>School</div>
                      <div className="green" key="c" data-grid={{x: 1, y: 3, w: 1, h: 2, minW: 1, maxW: 1}}>Games</div>
                    </GridLayout>
          </div>
          )
    }
}
 
export default TimetablePage;