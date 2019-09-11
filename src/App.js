import React, { Component } from 'react';
import PropTypes from "prop-types";
import { observable } from "mobx";

class Store {
  id = Math.random();
  @observable cache = { queue: ['传输数据Store'] };
  @observable finished = false;
}
// decorate(Store, {
//   cache: observable,
//   finished: observable
// })
let store = new Store();
class Foo extends Component {
  static propTypes = {
    cache: PropTypes.object //ObservablePropTypes.observableObject //PropTypes.object
  };

  render () {
    const cache = this.props.cache;
    return (
      <div>
        <h2>{cache.queue}</h2>
      </div>
    );
  }
}
function App () {
  return (
    <div className="App">
      <h1>react-app-mobx</h1>
      <Foo cache={store.cache}>
      </Foo>
    </div>
  );
}

export default App;
