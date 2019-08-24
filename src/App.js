import React from 'react';
import './App.css';
import { Button } from 'antd';
import MaskedInput from 'react-text-mask';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      number: 0,
      numberMultiply : 0
    }
  }

  handlerDecrement = () =>{
    this.setState({
      number: this.state.number - 1
    })
  }

  handlerInrement = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  haldleChange = (e) => {
    this.setState({
      numberMultiply : e.target.value
    })
  }

  hendlerKali = () => {
    this.setState({
      number: this.state.number * this.state.numberMultiply
    })
  }

  render(){
  const { number } = this.state;
  return (
    <div className="App">
       <Button style = {{marginRight : 10}}onClick={this.handlerInrement} className="coba" type="primary">
         Tambah
       </Button>
       <Button onClick={this.handlerDecrement} className="coba" type="primary">
         Kurang
       </Button>
       <br/>
      <MaskedInput
        mask={[ /[1-9]/, /\d/, /\d/,/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
        guide={false}
        style = {{width : 100, marginRight : 5}}
        onChange={this.haldleChange}/>
       <Button style = {{marginTop : 5}}onClick={this.hendlerKali} className="coba" type="primary">
         Kali
       </Button>
       <br/>
       {number}
    </div>
  );
}
}

export default App;
