import Contacts from './modules/Contacts/Contacts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Contacts />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
