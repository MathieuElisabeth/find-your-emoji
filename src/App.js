import React, { Component } from 'react';
import './App.css';

import emojiList from './emojiList.json'
import InputSearch from './InputSearch/InputSearch'
import Message from './Message/Message';


class App extends Component {
  state = {
    search : '',
    successMessage: false
  }

  emojiNamesHandler = (event) => {
    this.setState({search: event.target.value})
  } 

  copyToClipBoard = async copy => {
    try {
      await navigator.clipboard.writeText(copy);
      this.setState({successMessage: true})
      setTimeout(() => {this.setState({successMessage: false})}, 3000)
    } catch (err) {

    }
  };

    render() {

    return (
      
        <div className="App">
          <h1>FIND YOUR EM😄JI</h1>
         <InputSearch
          changed={this.emojiNamesHandler}
          value={this.state.search}
          filter={this.matches}
         />
          <ul>
              {emojiList.filter(emoji =>  emoji.title.toLowerCase().includes(this.state.search.toLowerCase())).slice(0, 10).map(filteredEmoji => (
              <li onClick={() => this.copyToClipBoard(filteredEmoji.symbol)}>
                {filteredEmoji.symbol}
                {filteredEmoji.title}
              </li>
            ))}
          </ul>
          {this.state.successMessage ?
            <Message/>
            : null
          }
        </div>
    );

  }
}

export default App;
