import React, { Component } from 'react'
//import food from './images/food.jpg';
import moment from 'moment';
export default class Place extends Component {
    //data
    state ={
        place:this.props.place
    }
    //functions
    componentWillMount(){
        let place = this.state.place
        place.date = moment(place.date).format('D MMM YYYY - h:mma')
        this.setState({place})
        console.log('DATA>>>>',this.state.place);
        
    }
  render() {
    return (
      <div>
      <div className="card mt-3 mb-3" >
              <div className="card-body">
                <div className="wrapper">
                  <div className="row">
                    <div className="col-4 p-0">
                      <div className="imageWrapper "> 
                        {this.state.place.file ? <img src={this.state.place.file} alt="..." className="img-thumbnail2"></img> :'' }
                        </div>
                    </div>
                    <div className="col-8 d-flex flex-column"> <span><b>{this.state.place.name} </b></span>
                     <span><b><i className="far fa-address-book"></i> </b>{this.state.place.address} </span>
                      <div>
                        <span><b><i className="far fa-thumbs-up"></i> </b>{this.state.place.likes} </span>
                        <span><b> <i className="far fa-thumbs-down"></i> </b>{this.state.place.dislikes} </span>
                      </div>
                      <p className="m-0"><b><i className="far fa-sticky-note"></i> </b> {this.state.place.description} </p>
                      <p className="m-0"><b><i className="fas fa-at"></i> </b> {this.state.place.author.name} </p>
                      <p className="m-0"><b><i className="far fa-calendar-alt"></i> </b> {this.state.place.date} </p>
                      <span className="badge badge-dark"># {this.state.place.category.name} </span>


                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    )
  }
}
