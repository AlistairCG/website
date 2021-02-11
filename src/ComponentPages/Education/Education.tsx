import React, { Component } from 'react';


class Education extends Component {

    constructor(props: any) {
      super(props);
      this.state = {
        width: window.innerWidth,
      };
    }
    render = () => {

        return(
            <h1>Education Page Component</h1>
        );
    }
}
export default Education;