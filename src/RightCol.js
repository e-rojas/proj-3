import React, { Component } from 'react'
import './Main.css'
import logo from './images/logo.png';
import Place from './Place'
import axios from 'axios'
export default class RightCol extends Component {
  //data
  state = {
    places:[]
  }
  //Functions
  componentWillMount(){
    axios.get('http://localhost:2200/api/places').then((res)=>{
      console.log(res)
      this.setState({
        places:res.data
      })
    }).catch((err)=>{
      console.log('Error Axios Get ',err)
    })
  }
  render() {
    return (

      <div >
        <nav id='rightNav' className="navbar w-100 border-bottom ">
          <img id='logo' src={logo} alt="Toptuga logo"></img>
          <input className="form-control w-50" placeholder="Search" type="text" />
        </nav>
        <div id="dataDisplay" className="container-fluid mt-3">
          <div id="cardWrap" className=" p-3">
           {/* PLACE */}
           {
              this.state.places.map((p)=>{
                return  <Place place={p} key={p._id} />
              })
           }
         

          </div>

        </div>
      </div>


    )
  }
}
