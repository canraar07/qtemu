import React from 'react';
import './App.css';
import AnotherComponent from './AnotherComponent';
import HOCFetchData from './HOCFetchData'
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      numberMultiply: 0,
      mydata: []
    }
  }

  handlerDecrement = () => {
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
      numberMultiply: e.target.value
    })
  }

  hendlerKali = () => {
    this.setState({
      number: this.state.number * this.state.numberMultiply
    })
  }

  render() {
    console.log('HOC Props', this.props)
    const { number } = this.state;
    const { dataFetch } = this.props;
    return (
      <div className="App">
        <AnotherComponent
          handlerInrement={this.handlerInrement}
          handlerDecrement={this.handlerDecrement}
          number={number}
          handlerFatchUser={this.handlerFatchUser}
          mydata={dataFetch}
        />

      </div>
    );
  }
}

export default withRouter(HOCFetchData(App));
