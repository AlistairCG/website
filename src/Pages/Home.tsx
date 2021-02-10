import React, { Component } from 'react';


class Home extends React.Component {

    constructor(props: any) {
      super(props);
      this.state = {
        width: window.innerWidth,
      };
    }
    render = () => {

        return(
            <h1>Hello World</h1>
        );
    }
}
export default Home;