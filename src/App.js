import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Create from './components/Create';
import Navbar from './components/Navbar';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/task/update/:taskid' element={<Edit/>}></Route>
        <Route path='/task/delete/:taskid' element={<Delete/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
