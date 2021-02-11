import React, { Component } from 'react';


class Work extends Component {

    constructor(props: any) {
      super(props);
      this.state = {
        width: window.innerWidth,
      };
    }
    render = () => {

        return(
            <h1>Work Page Component</h1>
        );
    }
}
export default Work;