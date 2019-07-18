##APP OR MAIN
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
      
##LEFTCOLUMN
 <div>
        <nav className="navbar navbar-light bg-light w-100 d-flex flex-column alig">
          <div className="imageWrapper ">
            <img src={profile} alt="..." className="img-thumbnail">
            </img>
          </div>
          <h4 className="small ">Michael Bronk</h4>
        </nav>
        <div className="wrap p-2">
          <div className="card-footer bg-transparent border-dark">
            <h5 className="lead small text-uppercase font-weight-bold">Categories</h5>
            <span className="badge badge-dark">#food</span> <span className="badge badge-dark">#travel</span> <span className="badge badge-dark">#wellness</span> <span className="badge badge-dark">#services</span>
            <span className="badge badge-dark">#sports</span>
          </div>
        </div>
      </div>

##RIGHTCOLUMN
  <div >
        <nav id='rightNav' className="navbar w-100 border-bottom ">
          <img id='logo' src={logo} alt="Toptuga logo"></img>
          <input className="form-control w-50" placeholder="Search" type="text" />
        </nav>
        <div id="dataDisplay" className="container-fluid mt-3">
          <div id="cardWrap" className=" p-3">
            <div className="card mt-3 mb-3" >
              <div className="card-body">
                <div className="wrapper">
                  <div className="row">
                    <div className="col-3 p-0">
                      <div className="imageWrapper "> <img src={food} alt="..." className="img-thumbnail"></img> </div>
                    </div>
                    <div className="col-9 d-flex flex-column"> <span><b>Thai-kitchen</b></span> <span><b><i className="far fa-address-book"></i> </b>Lamai Road 2345</span>
                      <div>
                        <span><b><i className="far fa-thumbs-up"></i> </b>13</span>
                        <span><b><i className="far fa-thumbs-down"></i> </b>1</span>
                      </div>
                      <p className="m-0"><b><i className="far fa-sticky-note"></i> </b> Incredible place to eat!!</p>
                      <p className="m-0"><b><i className="fas fa-at"></i> </b> Michael Bronk</p>
                      <p className="m-0"><b><i className="far fa-calendar-alt"></i> </b> July 18 2019</p>
                      <span className="badge badge-dark">#food</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    