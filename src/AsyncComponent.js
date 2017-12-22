import { Component, createElement } from 'react';
import PropTypes from 'prop-types';

export default class AsyncComponent extends Component {
  state = {
    component: null,
  };

  async componentWillMount() {
    const component = await this.props.component;
    const name = this.props.componentName;
    this.setState(() => ({ component: name in component ? component[name] : component.default }));
  }

  render() {
    if (!this.state.component) return null;
    const { component, ...props } = this.props;
    return createElement(this.state.component, props);
  }
}

AsyncComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  componentName: PropTypes.string,
};
