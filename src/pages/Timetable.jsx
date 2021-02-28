import { Box, Grid } from 'grommet';
import React, { Component } from 'react'

import GridLayout from 'react-grid-layout';



class TimetablePage extends Component {
    state = {  }
    render() { 
          const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
          return (
            <div>
                  <GridLayout compactType={"vertical"} className="layout" cols={5} rowHeight={30} width={1500}>
                      
                      <div key="mo" data-grid={{x: 0, y: 0, w: 1, h: 1, static: true}}>Monday</div>
                      <div key="tu" data-grid={{x: 1, y: 0, w: 1, h: 1, static: true}}>Tuesday</div>
                      <div key="we" data-grid={{x: 2, y: 0, w: 1, h: 1, static: true}}>Wednesday</div>
                      <div key="th" data-grid={{x: 3, y: 0, w: 1, h: 1, static: true}}>Thursday</div>
                      <div key="f" data-grid={{x: 4, y: 0, w: 1, h: 1, static: true}}>Friday</div>
                      {/* <div key="a" data-grid={{x: 2, y: 2, w: 1, h: 1, static: true}}>Wednesday</div>
                      <div key="a" data-grid={{x: 3, y: 3, w: 1, h: 1, static: true}}>Thursday</div>
                      <div key="a" data-grid={{x: 4, y: 4, w: 1, h: 1, static: true}}>Friday</div> */}
                      <div className="green" key="b" data-grid={{x: 0, y: 0, w: 1, h: 2, minW: 1, maxW: 1}}>School</div>
                      <div className="green" key="c" data-grid={{x: 0, y: 0, w: 1, h: 2, minW: 1, maxW: 1}}>Games</div>
                    </GridLayout>
          </div>
          )
    }
}
 
export default TimetablePage;