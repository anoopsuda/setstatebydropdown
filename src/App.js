import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';    
import {Card, ButtonToggle, CardBody, CardHeader } from "reactstrap"
import "./App.scss"
export class App extends Component {

state = {
  title:"Heading",
  cardtype:"default",
   

  data: [
    {
      name:"Ami",
      Age:"39",
      Location:"NPL",
      kids: [
        {name: "boy1"},
        {name: "boy2"},
      ]
      
    },
    {
      name:"Raje",
      Age:"40",
      Location:"TVM",
      kids: [
        {name: "boy1"},
        {name: "boy2"},
      ]
    },
    {
      name:"Fate",
      Age:"39",
      Location:"IRN",
      kids: [
        {name: "na"}
       
      ]
    }
  ],

  options: [
    {
      name: 'Select…',
      value: null,
    },
    {
      name: 'Success',
      value: 'success',
    },
    {
      name: 'Secondary',
      value: 'secondary',
    },
    {
      name: 'Danger',
      value: 'danger',
    },
  ],
  value: '?',




};

changeCardtype =()=>{
  this.setState({cardtype: "success"});
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.setState({ cardtype: event.target.value });
  };
 


  render() {

    const { options, value } = this.state;
    return (
       <div>
      <div className="container d-flex flex-row justify-content-between ">
        {this.state.data.map((mygfsdata) =>  
          <Card className=""  className={this.state.cardtype + " flex-fill mx-2"}>
            <CardHeader>
              {mygfsdata.name}
            </CardHeader>
            <CardBody>
              <p>{mygfsdata.Age}</p>
              <p>{mygfsdata.Location}</p>
              <ul>
                {mygfsdata.kids.map((products) =>
                <li>{products.name}</li>
                )}
                
              </ul>
            </CardBody>
          </Card>
         

        )}
      </div>
      <div className="container d-flex flex-row justify-content-between mt-3">
        <ButtonToggle color="primary">primary</ButtonToggle>{' '}
        <ButtonToggle color="secondary">secondary</ButtonToggle>{' '}
        <ButtonToggle color="success" onClick={this.changeCardtype}> success</ButtonToggle> 
        <ButtonToggle color="info">info</ButtonToggle>{' '}
        <ButtonToggle color="warning">warning</ButtonToggle>{' '}
        <ButtonToggle color="danger">danger</ButtonToggle>{' '}

        <p>
        <select onChange={this.handleChange} value={value}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        </p>
      </div>

      </div>
    )
  }
}

export default App
