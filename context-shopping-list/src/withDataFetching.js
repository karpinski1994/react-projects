import React from 'react';
const withDataFetching = props => WrappedComponent => {
  class WithDataFetching extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
        loading: false,
        error: '',
      };
    }
    
    componentDidMount() {
      const data = require('./data/data.json');
      try {
        if (data) {
          this.setState({
            data: data,
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
  }

  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;

  return WithDataFetching;
};

export default withDataFetching;
