import React, { Children } from "react";

export default function withDataFetching(WrappedComponent) {
  class WithDataFetching extends React.Component {
    constructor() {
      this.state = {
        data: [],
        error: "",
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        const data = require(`${this.props.dataSource}`);
        const dataJSON = data;
        if (dataJSON) {
          this.setState({
            data: dataJSON,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }

    render() {
      const { data, loading, error } = this.state;
      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  };
  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;
  return WithDataFetching;
}
