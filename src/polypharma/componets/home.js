import React, { Component } from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
    TransitionablePortal
  } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import umair from "./umair.jpeg";
import POLYPHARMA from "./POLYPHARMA LOGO.png";
  

class Home extends Component {
    state = { open: false }

    handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
    handleClose = () => this.setState({ open: false })
    render() {
        const { open } = this.state
        return (
            <div className="container">
                <div>
                    <img  src="https://image.freepik.com/free-vector/pharmaceutical-production-composition-isometric-composition_1284-22848.jpg"
                        style={{ marginLeft: '550px', height: '500px', width: '600px', borderBottomLeftRadius: 70 }} />
                </div>
                <div style={{ marginTop: '-400px' }}>
                    <h1 style={{fontWeight:'bold',color:'lightslategray'}}>
                        POLYPHARMA DEDICATED 
                    </h1>
                    <h4 style={{fontWeight:'lighter',color:'lightslategray'}}>To Safe Environment System</h4>
                    <p>To manufacture quality pharmaceutical packing products for prescription applications</p>
                    <p>that are economically viable for our customers, while providing value to our clients, </p>
                    <p>all within a supportive and rewarding work environment for our employees</p>
                    <p style={{fontWeight:'bold'}}>Contributing with pride and passion, beyond expectations</p>
                </div>

                <div style={{ marginTop: 230, width: '1400px', marginLeft: '-115px' }}>
                    <div style={{ backgroundColor:'lightslategray' }} className="card">
                        <div className="card-body">
                            
                            <h5 style={{ justifyContent: 'center', textAlign: 'center',color:'white' }} className="card-title">Our Product</h5>
                            <div style={{marginLeft:'480px'}}>
                            <p className="card-text">Please click the below buton to check our products.</p>
                            </div>
                             <div style={{marginLeft:'380px',marginTop:'10px'}}>
                            <Link to="/product" class="ui button">Click Here for more Information</Link>
                            <Button
          content={open ? 'Close list' : 'check out our latest products list'}
          negative={open}
          positive={!open}
          onClick={this.handleClick}
        />
        </div>

        <TransitionablePortal onClose={this.handleClose} open={open}>
          <Segment
            style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
          >
            <Header>This is our Latest Products List</Header>
            <img src={POLYPHARMA} style={{width:'300px',height:'50px'}}/>
            <li>1: Injection</li>
            <li>2: Measuring Cup</li>
            <li>3: Multiple Caps</li>
            <li>4: Multiple Spoons</li>
            <li>5: Impule Cracker</li>
            <li>6: Drugs Bottles</li>
            <li>7: Pet Bottles</li>
            <li>8: Drip Hanger</li>
            <li>9: Pvc Impule trays</li>
         
          </Segment>
        </TransitionablePortal>

                        </div>
                    </div>
                </div>
                <div style={{marginBottom:40}}>
                    <img style={{borderRadius:50}} src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" />
                    <div style={{marginLeft:'700px',marginTop:'-400px'}}>
                        <h1 style={{fontWeight:'bold',color:'lightslategray'}}>THE POLY-PHARMA MISSION</h1>
                        <p>Poly Pharma, Inc. is a biopharmaceutical plastic production company</p>
                        <p>that manufacture drugs plastic bottles that help in the treatment of certain disease disorders</p>
                        <p>Poly Pharmaceuticals Corporation is a pharmaceutical company that specialises</p>
                        <p>in the developing safe and effective products for the treatment of cognitive disorders.</p>
                    </div>
                </div>
                <div style={{marginTop:'200px',marginLeft:'500px'}}>
                    <img style={{borderRadius:50}} src="https://image.freepik.com/free-photo/assortment-vaccination-elements-covid19_23-2148880531.jpg" />
                    <div style={{marginLeft:'-500px',marginTop:'-330px'}}>
                        <h1>THE CARE YOU DESERVE</h1>
                        <p>The Medicine Shoppe offers patients a wide variety of detailed,.</p>
                        <p> up-to-date information covering a vast spectrum of health conditions,</p>
                        <p> illnesses, treatments and drug references in the online Wellness Center.</p>
                        <p> The Wellness Library contains information on nutrition, fitness, weight </p>
                        <p>control and safety so the patient gets well and stays healthy</p>
                    </div>
                </div>
                
                 <div style={{justifyContent:'center',textAlign:'center',marginTop:200}}>
                     <h1>Availibility In Pakistan</h1>
                     <p>Your ability will not help if you do not give your availability</p>
                     <p>Easy accessibility gradually tapers engrossment</p>
                     <Link to="/Availibity" style={{cursor:'pointer',fontSize:'20px'}} className="badge rounded-pill bg-info text-dark">Where you can find our product in Pakistan</Link>
                     {/* <button className="btn btn-primary">Where you can find our product in Pakistan</button> */}
                 </div>
                 <hr style={{width:'1100px'}}/>
                 <div>
                 <nav class="navbar navbar-light bg-light">
  <div style={{}} className="container-fluid">
    <span className="navbar-brand mb-0 h1">Copyright 2021 All Right & reserved</span>
    <span className="navbar-brand mb-0 h1">PolyPharma,Company</span>
  </div>
</nav>
                 </div>
            </div>
        );
    }
}

export default Home;