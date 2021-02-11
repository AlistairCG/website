import React, { Component } from 'react';


class Projects extends Component {

    constructor(props: any) {
      super(props);
      this.state = {
        width: window.innerWidth,
      };
    }
    render = () => {

        return(
            <h1>Projects Page Component</h1>
        );
    }
}
export default Projects;