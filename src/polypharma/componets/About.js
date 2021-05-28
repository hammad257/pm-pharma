import React, { Component } from 'react';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Card,
    Accordion
  } from 'semantic-ui-react'
  import umair from "./umair.jpeg";

class About extends Component {
    state = { 
        open:false,
        activeIndex:0
     }

     handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }

    render() { 
        const { activeIndex } = this.state

        const data=`‘POLYPHARMA’

        Not simply one more online pharmacy … Our all around supplied available and inviting pharmacy and treatment rooms are based at 214- Qadri Chamber Meclord Road, Lahore-Pakistan.
        ‘POLYPHARMA’ have been putting second pharmacy administrations to our clients for more than 20 years. We know the pharmacy and wellbeing and magnificence
         industry back to front, continually guaranteeing we offer the most breakthrough items and medications. We bring our customers the best quality administration and
          give the nearby network and neighboring wards with a brilliant, understanding centered administration.

‘POLYPHARMA’ offers a one of a kind mix of pharmacy and magnificence facility in Manhattan with numerous superlative wellbeing and excellence medicines.

We utilize our insight into the pharmaceutical business to ensure that the majority of our magnificence items and medicines are results driven, with the goal that we can
 offer brands that are ideal for every person. ‘POLYPHARMA’ pharmacy is a warm and well disposed place, with experienced specialists giving proficient skincare medicines, 
 and magnificence exhortation in a quiet and loosening up condition.

Having some expertise in pharmacy administrations and wellbeing and excellence medicines in US, we likewise offer a stroll in movement center, just as offering an approved yellow 
fever facility. Our services incorporate administering remedies, new drug benefits, a gathering and conveyance work, glucose and cholesterol checks, a stroll in movement facility, 
and a huge number of wellbeing and excellence medicines and items.
Basically, plastics containers consist of organic materials whose molecules have high molar masses and are composed of a large number of repeating relatively small units referred to
as monomers. When these monomers undergo a process known as polymerization, a plastic or a sequentially joined long chain of polymer is formed. This process of polymerization may involve 
various chemicals which assist the process, such as accelerators, initiators, solvents and catalysts, and as a result, are present in small degree in the plastic formed. These, if found in 
the plastic after polymerization are generally referred to as process residues.

Plastics may also incorporate processing aids e.g., styrenes, acrylics, calcium carbonates, lubricants, silicone oil etc., which are usually added to assist a process and additives
 (e.g., plasticizers, colouring matter, fillers/extenders, light stabilizers, reinforcement etc.,) which modify the plastic chemically or physically in some way. Most plastics derive 
 their names from the type of polymer(s) used during manufacture. Virtually any desired property or characteristics can be achieved during plastic formation by proper manipulation of
  the properties of the polymer(s) and additives used.
`
       
        return ( 
            <div>
                <div style={{margin:'40px'}}>
                   <Card>
    <Image src={umair} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Umair Ali</Card.Header>
      <Card.Meta>
        <span className='date'>CEO</span>
      </Card.Meta>
      <Card.Description>
        Poly-Pharmaceuticals Company
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
  </Card>
  </div>

<div style={{marginLeft:'420px',marginTop:'-350px',padding:10}}>
  <div>
      <h1>About Us</h1>
  </div>
  <div style={{marginTop:'30px'}}>
      <span>
         {this.state.open ? data : `${data.substring(0,1977)}`}
         <button className="ui icon right labeled button" style={{cursor:'pointer',fontWeight:'bold',color:'red'}} onClick={()=>this.setState({open:!this.state.open})}>
             {this.state.open ? 'show less' : 'show more'}
             <i aria-hidden="true" class="right arrow icon"></i>
         </button>
      </span>
 </div>
  </div>
  <div style={{padding:10}}>
  <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          About Poly Pharma?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
          We are Manfucurer of Plastic Bottles, Caps, Spoon, Measuring Cups & PVC Articles of Pharmaceutical Industry
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What kinds of product we are produce!
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <li>1: Injection</li>
            <li>2: Measuring Cup</li>
            <li>3: Multiple Caps</li>
            <li>4: Multiple Spoons</li>
            <li>5: Measuring Containers</li>
            <li>6: Drugs Bottles</li>
            <li>7: Glass Bottles</li>
            <li>8: Drip Hanger</li>
            <li>9: Pvc Impule trays</li>
            <li>10: Impule Cracker</li>
          </Accordion.Content>

<Accordion.Title
  active={activeIndex === 2}
  index={2}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  What is the value of our product?
</Accordion.Title>
<Accordion.Content active={activeIndex === 2}>
  <p>
   Quality is never an accident; it is always the result of intelligent effort.
  </p>
  
</Accordion.Content>
</Accordion>
  </div>
  
            </div>
         );
    }
}
 
export default About;