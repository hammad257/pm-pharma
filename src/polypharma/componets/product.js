import React, { Component, useState } from 'react';
import data from "./productData";


const Product =()=> {
  
        return (
            <div style={{margin:'20px'}}> 
                              <div 
                              style={{marginLeft:'700px',borderWidth:1,padding:10,backgroundColor:'lightslategray',width:'215px',borderRadius:20}}>
                                  <h1 style={{fontWeight:'bold',color:'white'}}>Product List</h1>
                              </div>
                      <div>
                          {data.map((item)=>{
                              return(
                                     <div>
                                  <ul>
                                      
                                   <img className="shadow p-3 mb-5 bg-body" style={{height:'400px',borderRadius:'10px',width:'400px',borderTopRightRadius:'40px',borderBottomLeftRadius:'40px'}} src={item.image} alt={item.name}/>
                                   <div style={{marginLeft:'500px',marginBottom:'50px',marginTop:'-200px'}}>
                                   <table className="ui basic table">
                                       <thead class="">
                                       <tr className="">
                                       <th className="">Name</th>
                                   <th className="">Status</th>
                                   <th className="">Notes</th>
                                   </tr>
                                   </thead>
                                   <tbody className=""><tr class="">
                                       <td style={{fontWeight:'bold'}} className="">{item.name}</td>
                                   <td style={{fontWeight:'bold'}} className="">{item.text}</td>
                                   <td className="">{item.staus}</td></tr>
                                   <tr className="">
                                       <td style={{fontWeight:'bold'}} className="">{item.mesureName}</td>
                                   <td style={{fontWeight:'bold'}} className="">{item.measurement}</td>
                                   <td className="">{item.staus}</td>
                                   </tr>
                                  
                                   </tbody>
                                   </table>
                                     
                                   </div>
                                   <hr/>
                                   </ul>
                                   </div>
                              )
                                 })}
                      </div>
                     
                 
            </div>
         );
    }

 
export default Product;