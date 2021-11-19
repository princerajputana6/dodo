
import React, { Component } from 'react'
import Header from "./Header";
import "./Style.css";
class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowSearch: false,
            isShowHeading: true, 
        }
    }
    ShowSearchForm = () => {
        this.setState({
            isShowSearch: true,
            isShowHeading: false,

        })
    }
    HideSearchForm = () => {
        this.setState({
            isShowSearch: false,
            isShowHeading: true,
        })
    }
    render(){
        return (
            <div>
                <Header />
                <div className="mainBody">
                    <div className="leftBody">
                        <div className="upperSection">
                            <div className="upperText"><img src="https://app.dodoex.io/static/media/yellowDuck.49ff0a41.svg" alt="" /><img src="https://app.dodoex.io/static/media/yellowDuck.49ff0a41.svg" alt="" />&nbsp;&nbsp; WETH <span> &nbsp;/ USDC</span></div>
                            <div className="lowerText">
                                <div className="lowerLeft">
                                    4,214.6633 &nbsp; USDC
                                </div>
                                <div className="lowerRight">
                                    <div className="shadow option">Year</div>
                                    <div className="shadow option">Month</div>
                                    <div className="shadow option">Day</div>
                                </div>
                            </div>
                        </div>
                        <div className="lowerSection">
    <img src="https://www.skrill.com/fileadmin/user_upload/iStock-877278574.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="rightBody">
                    {this.state.isShowHeading ? (
                              <div className="rightWrapper shadow">
                              <div className="header">
                                  <div className="item"><img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" height="35px" width="35px" alt="" /></div>
                                  <div className="item"><img src="https://www.freepnglogos.com/uploads/share-png/share-icon-png-image-purepng-transparent-png-37.png" height="35px" width="35px" alt="" /></div>
                                  <div className="item"><img src="https://www.pngrepo.com/png/246308/512/settings-gear.png" height="35px" width="35px" alt="" /></div>
                              </div>
                              <div className="body">
                                  <form>
                                      <div class="form-group">
                                          <label for="exampleInputEmail1">Pay</label>
                                          <div className="boxes">
                                              <div className="textPanel" onClick={this.ShowSearchForm}><img src="https://app.dodoex.io/static/media/yellowDuck.49ff0a41.svg" alt="" />
                                              WETH
                                              </div>
                                          <input type="number" class="form-control"  />
                                          </div>
      
                                      </div>
                                      <div className="arrow"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Font_Awesome_5_solid_arrow-circle-down.svg/1200px-Font_Awesome_5_solid_arrow-circle-down.svg.png" alt="" height="30px" width="30px" /></div>
                                    
                                      <div class="form-group">
                                          <label for="exampleInputPassword1">Recieved (Estimated)</label>
                                          <div className="boxes">
                                              <div className="textPanel" onClick={this.ShowSearchForm}><img src="https://app.dodoex.io/static/media/yellowDuck.49ff0a41.svg" alt="" />
                                              WETH
                                              </div>
                                          <input type="number" class="form-control" />
                                          </div>
                                      </div>
                                      <div className="arrow">Loding ...</div>
                                      <button type="submit" class="btn">Connnect Wallet</button>
                                  </form>
                              </div>
                          </div>
                            ) : (
                                <div className="rightWrapper shadow">
                            <div className="header Pay">
                                <div className="item" onClick={this.HideSearchForm}><img src="https://assets.stickpng.com/images/585e47accb11b227491c338a.png" height="35px" width="35px" alt="" /></div>
                            </div>
                            <div className="body">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Pay</label>
                                        <div className="boxes">
    
                                        <input type="number" placeholder="Enter the Token Symbol or Address" class="form-control"  />
                                        </div>
    
                                    </div>
                                    <br/>
                                    <hr/>
                                    <div className="arrow"><img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png" alt="" height="30px" width="30px" /></div>
                                  
                                    
                                    <div className="arrow">All Lists are Indexed here ...</div>
                                    
                                </form>
                            </div>
                        </div>
                            )}
                      
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Home
