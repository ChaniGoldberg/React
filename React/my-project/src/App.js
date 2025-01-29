import logo from './logo.svg';
import './App.css';
import ViewTasks from './lesson5/components/ViewTasks';
import ViewRecyclebin from './lesson5/components/ViewRecyclebin';
import { Provider } from 'react-redux';
import store from './lesson5/redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <ViewTasks></ViewTasks>
    <ViewRecyclebin></ViewRecyclebin> 
    </div>
    </Provider>
  );
}

export default App;
