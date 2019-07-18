import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'
 import LeftCol from './LeftCol'
 import RightCol from './RightCol'
export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* LEFT COLUMN */}
          <div id="leftCol" className="col-3 p-0 ">
            <LeftCol />
             </div>
              {/* RIGHT COLUMN */}
             <div id="rightCol" className="col-9 p-0 ">
              <RightCol />
             </div>
          </div>
        </div>
      </div>
    )
  }
}
