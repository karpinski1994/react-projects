import React, { Component } from "react";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/octocat");
    const profileJSON = await profile.json();
    console.log("profileJSON: ", profileJSON);
    if (profileJSON) {
      this.setState({
        data: profileJSON,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;
    if (loading) return <div>Loading...</div>;
    return (
      <div>
        <ul>
          <li>avatar_url: {data.avatar_url}</li>
          <li>name: {data.name}</li>
          <li>email: {data.email}</li>
          <li>repos_url: {data.repos_url}</li>
          <li>bio: {data.bio}</li>
        </ul>
      </div>
    );
  }
}
