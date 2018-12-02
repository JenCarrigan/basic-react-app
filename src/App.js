import React, { Component } from 'react';
import superagent from 'superagent';

import Page from './components/page.js';
import content from './content.json';
import './styles/design.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schema: content,
    }
  }

  async componentDidMount () {
    let response = await superagent.get('https://radiant-forest-79453.herokuapp.com/content');
    this.setState({schema: response.body });
  }

  render() {
    return (
      <React.Fragment>
          <nav className="nav"></nav>
          <left className="left"></left>
          <div className="main">
            <Page content={this.state.schema} />
          </div>
          <right className="right"></right>
          <footer className="footer"></footer>
      </React.Fragment>
    );
  }
}



export default App;
