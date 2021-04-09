import logo from './logo.svg';
import {Provider} from 'react-redux'
import './App.css';

function App( {store}) {
  return (
    <Provider store={store}>
      <div className="App">
        <header>Header</header>
        <div> cool </div>
      </div>
    </Provider>
  );
}

export default App;
