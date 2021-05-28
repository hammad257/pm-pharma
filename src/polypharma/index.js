import React, { Component } from 'react';
import NavBar from "./componets/navBar";
import Home from "./componets/home";
import Product from "./componets/product";
import About from "./componets/About";
import Availibility from "./componets/Availibility";
import Contact from "./componets/contact";
import { BrowserRouter,Route,Switch } from "react-router-dom";

class PolyPharma extends Component {
    render() { 
        return ( 
            <div>
                 
                 <BrowserRouter>
                 <NavBar/>
                 <Switch>
                 <Route path="/" exact component={Home}/>
                <Route path="/product" component={Product}/>
                <Route path="/About" component={About}/>
                <Route path="/Availibity" component={Availibility}/>
                <Route path="/Contact" component={Contact}/>
                </Switch>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default PolyPharma;