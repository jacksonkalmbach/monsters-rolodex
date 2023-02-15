import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Jackson'
    }
  }

  render() {
    return(
      <div className='App'>
        <div className='App-header'>
          <p>{this.state.name}</p>
          <button onClick={()=> console.log('clicked')}>Click Me</button>
        </div>
      </div>
    )
  }

}

export default App;
