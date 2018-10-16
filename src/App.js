import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter((item) => item.objectID !== id);
    this.setState({list: updatedList})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hackernews</h2>
        </header>
        {this.state.list.map(item => (
          <article key={item.objectID}>
            <h3>
              <a href={item.url}>{item.title}</a>
            </h3>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </article>
        ))}
      </div>
    );
  }
}

export default App;
