import React, { Component } from 'react';
import './home.css'

class Home extends Component {
  render() {
    return (
        <section class ="Menu" id="MenuGame">
          <button class="buttonMenu">ADD WORD</button>
          <button class="buttonMenu">SEE WORDS</button>
		      <button class="buttonMenu">CHECK WORDS</button>
	      </section>
    );
  }
}

export default Home;