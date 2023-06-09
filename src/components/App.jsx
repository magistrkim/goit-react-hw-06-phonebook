import Contacts from './modules/Contacts/Contacts';
import { Provider } from 'react-redux';
import store from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Contacts />
      </div>
    </Provider>
  );
};

export default App;
