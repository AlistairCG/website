import React, { Component } from 'react';


class About extends Component {

    constructor(props: any) {
      super(props);
      this.state = {
        width: window.innerWidth,
      };
    }
    render = () => {

        return(
            <h1>About Page Component</h1>
        );
    }
}
export default About;