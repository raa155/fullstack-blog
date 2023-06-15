
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from './pages/Settings/Settings'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from 'react-router-dom';





function App() {
  const user = false;

  const Layout = () => {
  return (
    <div className="app">
      <Topbar />
      <Outlet/>
    </div>
  )
}

const ProtectedRoute = ({children}) => {
  if(!user){
    return <Navigate to='/register'/>
  }
  return children;
}

const router = createBrowserRouter([
  {
    path: '/',
    element:<ProtectedRoute><Layout/></ProtectedRoute>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/write',
        element: <Write/>
      },
      {
        path: '/account',
        element: <Settings/>
      },
      {
        path: '/post/:postId',
        element: <Single/>
      },
    ]
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
