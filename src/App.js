import Login from './components/Login';
import Register from './components/Register';
import GetData from './components/GetData';
import{Routes,Route}from'react-router-dom';
import Edit from './components/Edit';
import Password from './components/Password';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login'element={<Login/>}/>   
        <Route path='/showdata'element={<GetData/>}/>
        <Route path='/edit'element={<Edit/>}/>
        <Route path='/password' element={<Password/>}/>
      </Routes>
    </div>
  );
}

export default App;
