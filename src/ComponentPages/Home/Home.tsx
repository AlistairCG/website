import React, { Component } from 'react';


class Home extends Component {

    constructor(props: any) {
      super(props);
      this.state = {
        width: window.innerWidth,
      };
    }
    render = () => {

        return( 
            <h1>Home Page Component</h1>
        );
    }
}
export default Home;