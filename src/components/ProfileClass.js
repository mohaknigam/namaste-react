import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("CDM");
  }

  componentDidUpdate() {
    console.log("CDidUpdate");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div className="profile-class">
        <h1>Welcome to Profile Class</h1>
        <h2>Name : {this.props.name}</h2>
        <h1>Functional Counter : {count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        >
          Press
        </button>
      </div>
    );
  }
}

export default ProfileClass;
