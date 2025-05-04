import logo from './logo.svg';
import './App.css';
import ViewTasks from './lesson5/components/ViewTasks';
import ViewRecyclebin from './lesson5/components/ViewRecyclebin';
import { Provider } from 'react-redux';
import store from './lesson5/redux/store';
//import Meseg from './lesson6/coponants/Meseg';
import WithLogging from './lesson7/coponants/WithLogging';
import NiceComponent1 from './lesson7/coponants/NiceComponent1';
import NiceComponent2 from './lesson7/coponants/NiceComponent2';
import Login7 from './lesson7/coponants/Login7';
import Table from './lesson8/componants/Table';
function App() {
  const WithLoggingNiceComponent1=WithLogging(NiceComponent1);
  const WithLoggingNiceComponent2=WithLogging(NiceComponent2);
  return (
    <Provider store={store}>
    <div className="App">
    {/* <ViewTasks></ViewTasks>
    <ViewRecyclebin></ViewRecyclebin>  */}
    {/* <Meseg></Meseg>
    <WithLoggingNiceComponent1 name="tooki"></WithLoggingNiceComponent1>
    <WithLoggingNiceComponent2></WithLoggingNiceComponent2> */}
    <Login7 ></Login7>
    <Table></Table>
    </div>
    </Provider>

  );
}

export default App;
