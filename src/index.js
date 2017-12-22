import React from 'react';
import { render } from 'react-dom';
import * as Foo from './Foo';
import componentLoaderHelper from "./componentLoaderHelper";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const P = componentLoaderHelper(Foo);

const App = () => (
  <div style={styles}>
    <P.Hello name="from hello" />
    <P.Hello2 name="from hello2" />
    <P.Hello3 name="from hello3" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
