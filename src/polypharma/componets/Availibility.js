import React, { Component } from 'react';
import { Button, Image, List, Transition,Tab } from 'semantic-ui-react'

const panes = [
    {
      menuItem: 'Lahore',
      render: () => <Tab.Pane attached={false}>Yes Available</Tab.Pane>,
    },
    {
      menuItem: 'Multan',
      render: () => <Tab.Pane attached={false}>Yes Available</Tab.Pane>,
    },
    {
      menuItem: 'Karachi',
      render: () => <Tab.Pane attached={false}>Yes Available</Tab.Pane>,
    },
    {
        menuItem: 'Sakhar',
        render: () => <Tab.Pane attached={false}>Yes Available</Tab.Pane>,
      },
      {
        menuItem: 'DI Khan',
        render: () => <Tab.Pane attached={false}>Yes Available</Tab.Pane>,
      },
      {
        menuItem: 'Bahawalpur',
        render: () => <Tab.Pane attached={false}>Yes Available</Tab.Pane>,
      },
  ]
  

class Availibity extends Component {
   

    render() { 
      
       
        return ( 
            
                <div style={{}}>
                   <div>
                       <img src="https://image.freepik.com/free-vector/businessman-woman-near-huge-clock-with-round-arrows-working-24-7-24-7-service-business-time-schedule-extended-working-hours-concept-illustration_335657-2071.jpg" 
                       style={{}}/>
                   </div>
                   <div style={{marginLeft:'700px',marginTop:'-350px'}}>
                       <div>
                       <h1 style={{fontWeight:'bold',color:'lightslategrey'}}>Availibility In Pakistan</h1>
                       </div>
                       <div style={{marginTop:'40px',padding:10,marginLeft:'-30px'}}>
                           <span style={{fontSize:'32px'}}>Our Product is available all across the pakistan</span>
                           <span style={{fontSize:'20px'}}> Markets are nimble and efficient, gathering the collective but disbursed intelligence of the economy's players and communicating up-to-the-minute realities of prices, product availability, etc. Government is typically cumbersome, plodding, and slow. - Author: Joel Miller</span>
                          
                        </div>
                   </div>
                   
                </div>
         );
    }
}
 
export default Availibity;