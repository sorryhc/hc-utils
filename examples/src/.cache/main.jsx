import "@/global.css";

import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import router_config from './routes_config';

import RootRoutes from "@/layout";

const newRoutesConfig=[
  {
    path:"/",
    element: <RootRoutes />,
    children: router_config||[]
  }
]

const router = createHashRouter(newRoutesConfig)

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

