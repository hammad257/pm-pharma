import React, { Component } from 'react';
import { Icon } from "semantic-ui-react";
import umair from "./umair.jpeg";

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{flex:1}}>
                <div style={{backgroundColor:'lightslategrey',padding:50}}>
                     <div>
                         <div style={{marginLeft:'500px'}}>
                             <h1 style={{fontSize:45,fontWeight:'bold',color:'white'}}>Get In Touch</h1>
                         </div>
                         <div style={{marginTop:30}}>
                             <div style={{marginLeft:'180px'}}>
                                 <Icon size='huge' name="mail"/>
                                 <div style={{marginLeft:'-80px',marginTop:'30px'}}>
                                     <h2 style={{color:'white'}}>Email for any inqury</h2>
                                     </div>
                                     <div style={{marginLeft:'-90px'}}>
                                   <h3> Umairali.lgs@gmail.com</h3>
                                   </div>
                                 </div>
                             <div style={{marginLeft:'550px',marginTop:'-150px'}}>
                                 <Icon style={{marginLeft:'100px'}} size='huge' name="phone"/>
                                 <div style={{marginTop:'10px',marginTop:'30px'}}>
                                 <div style={{marginTop:'30px'}}>
                                     <h2 style={{color:'white'}}>Contact For Orders</h2>
                                     </div>
                                     <div style={{marginLeft:'30px'}}>
                                 <h3>0320-2010112</h3>
                                 <h3>0304-7779735</h3>
                                 </div>
                                 </div>
                                 </div>
                             <div style={{marginLeft:'950px',marginTop:'-190px'}}>
                                 <Icon style={{marginLeft:'120px'}} size='huge' name="address book"/>
                                 <div style={{marginTop:'10px',marginTop:'30px'}}>
                                 <div style={{marginTop:'30px',marginLeft:'60px'}}>
                                     <h2 style={{color:'white'}}>Office Address</h2>
                                     </div>
                                     <div style={{marginLeft:'50px'}}>
                                  <h4>214- Qadri Chamber Meclord Road, Lahore-Pakistan</h4>
                                  </div>
                                  </div>
                                 </div>
                        </div>
                         
                     </div>
                </div>
                <div style={{margin:40}}>
                <div style={{}}>
                    <div style={{marginLeft:'100px'}}>
                    <h1 style={{fontWeight:'bold',color:'lightslategrey'}}>Message Us</h1>
                    </div>
                    <div className="ui sub header">
                    <span style={{fontSize:17,marginLeft:'130px'}}>We are Manfucurer of Plastic Bottles, Caps, Spoon, Measuring Cups </span>
                    <span style={{}}>& PVC Articles of Pharmaceutical Industry</span>
                    
                    </div>
                    </div>
                     <div style={{marginLeft:'1050px',marginTop:'-100px'}}>
                     <h2 className="ui header">
                    <img src={umair} className="ui circular image"/>
                      Umair Ali</h2>
                      <div style={{marginLeft:'70px',marginTop:'-30px'}}>
                      <p>CEO</p>
                      </div>
                      <div style={{marginLeft:'70px'}}>
                      <p>0320 2010112</p>
                      </div>
                     </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;