import routes from './routes'
import { useRoutes } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/SideBar';
import './App.css'

function App() {


  let router = useRoutes(routes)


  return (
    <>
      <TopBar />
      <div className="containerApp">
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
