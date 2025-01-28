import logo from './logo.svg';
import './App.css';
import ViewTasks from './lesson5/components/ViewTasks';
import { Provider } from 'react-redux';
import store from './lesson5/redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <p>hello to your tasks list!!!</p>
   
    <ViewTasks></ViewTasks>

    </div>
    </Provider>
  );
}

export default App;
