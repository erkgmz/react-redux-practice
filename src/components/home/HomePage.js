import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Erik Gomez</h1>
        <p>Erik Gomez, Web Developer, Reactjs Wizard, Front-End Specialist</p>
        <Link to="about" className="btn btn-primary btn-lg">Let's Chat</Link>
      </div>
    );
  }
}

export default HomePage;
