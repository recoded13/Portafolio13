import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout';
import Cv from '../pages/Cv';
import Home from '../pages/Home'
import NewProject from '../pages/NewProject';
import Projects from '../pages/Projects';
import EditProject from '../pages/EditProject';



export const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Cv",
        element: <Cv />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Newproject",
        element: <NewProject />,
      },
      {
        path: "/editproject/:projectId",
        element: <EditProject />,
      },


    ]
  },

]);
