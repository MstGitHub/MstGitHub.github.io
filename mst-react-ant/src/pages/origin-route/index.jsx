import React from 'react'

const About = () => {
  return (<div>About待开发...</div>);
};
const Inbox  = () => {
  return (<div>Inbox待开发...</div>);
};
const Home  = () => {
  return (<div>Home待开发...</div>);
};

export class OrigiRoute extends React.Component{

  state = {
    route: "",
  }

  getInitialState() {
    return {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default:      Child = Home;
    }

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
      </div>
    )
  }
}
