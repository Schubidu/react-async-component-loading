import React from 'react';
import AsyncComponent from './AsyncComponent';

const handler = {
  get: function(target, name) {
    let component;
    try {
      // try to resolve a Promise, will fail on ReactComponents
      const componentWithPromise = Promise.resolve(target[name]());
      component = props => <AsyncComponent {...props} component={componentWithPromise} componentName={name} />;
    } catch (ex) {
      // might be a kind of ReactComponent so
      component = target[name];
    }
    return component;
  },
};

export default object => new Proxy(object, handler);
