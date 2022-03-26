import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ChangeModeBtn from './componets/ChangeMode/ChangeModeBtn';
import Adminlayout from './componets/Layouts/AdminLayout';
import NoAuthlayout from './componets/Layouts/NoAuthLayout';
import Login from './componets/Login/Login';
import MainPage from './componets/MainPage/MainPage';
import MyPage from './componets/MyPage/MyPage';
import Protectroute from './componets/ProtecRoute/ProtectRoute';
import RightBar from './componets/RightSideBar/RightBar';
import Sidebar from './componets/SideBar/SideBar';
import { useLang } from './Providers/LangProvider';
import { useTheme } from './Providers/MainProvider';
import RightBar2 from './componets/RightBar2/RightBar2';
function App(){
  const [dark]= useTheme()
  const [lang, setLang] = useLang()
  const handleLangChange =(e) => {
    setLang(e.target.value)
  }
  return <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Adminlayout />} >        
            <Route path='' index  element={
              <Protectroute>           
                <Sidebar />
                 <MyPage />
                <RightBar />
              </Protectroute>
            }>             
          </Route>
        
            <Route path='home' element={
              <Protectroute>
                <Sidebar />
                 <MyPage />
                <RightBar />
              </Protectroute>
            }>             
            </Route>
            <Route path='userPage' element={
                <Protectroute>
                  <Sidebar />
                  <MainPage />
                  <RightBar2 />
                </Protectroute>
              }>
                
            </Route> 
          </Route> 

          <Route path='/auth' element={<NoAuthlayout/>}>
              {/* <div className='container'> */}
              <Route path='' element={<Navigate to='/auth/login' replace={true} />} />
              <Route  path='login' index element={<Login/>} />
              {/* </div> */}
          </Route>

        </Routes>
      </BrowserRouter>
    {/* <Sidebar /> */}
    {/* <MainPage /> */}
    {/* <MyPage />
    <RightBar /> */}
  </div>
}
export default App

  