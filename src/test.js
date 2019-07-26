import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Test extends Component {
    state={
        categories:[],
        value:'',
        category:''
    }
    componentDidMount(){
        axios.get('http://localhost:2200/api/categories').then((res)=>{
            console.log('RES_DATA',res.data[2])
            this.setState({
                categories:res.data,
                value: res.data[2].name
            })
            console.log(this.state)
        }).catch((err)=>{
            console.log('Error',err)
        })
        
    }
   
  
 handleOptionChange = (e)=>{
     console.log('e', e.target.value)
     this.setState({
         category:e.target.value
     }, () => {
        console.log('this.state.category', this.state.category)
     })
     
     
 }
     
  render() {
     
    return (
       
      <div>
      <div className="form-group w-50 m-auto">
    <label >Example multiple select</label>
    <select value={this.state.category} onChange={this.handleOptionChange}  className="form-control"  >
     {
         this.state.categories.map((e)=>{
            
             return <option  key={e._id} value={e._id}  >{e.name} </option>
         })
     }
    </select>
  </div>
        
      </div>
    )
  }
}
