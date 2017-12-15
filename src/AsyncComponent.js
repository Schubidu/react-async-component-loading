import { Component, createElement } from 'react';
import PropTypes from 'prop-types';

export default class AsyncComponent extends Component {
  state = {
    component: null,
  };

  componentWillMount() {
    this.props.component.then(c => this.setState(() => ({ component: c.default })));
  }

  render() {
    if (!this.state.component) return null;
    const { component, ...props } = this.props;
    return createElement(this.state.component, props);
  }
}

AsyncComponent.propTypes = {
  component: PropTypes.object.isRequired,
};
