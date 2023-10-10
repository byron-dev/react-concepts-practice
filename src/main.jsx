import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import HOCComponents from './hOCComponents';
import StyledComponents from './StyledComponents';
import HooksPractice from './HooksPractice';
import HomePage from './HomePage';
import PortalPractice from './PortalPractice';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/homePage',
    element: <HomePage />,
  },
  {
    path: '/hocPractice',
    element: <HOCComponents />,
  },
  {
    path: '/styledComponentsPractice',
    element: <StyledComponents />,
  },
  {
    path: '/hooksPractice',
    element: <HooksPractice />,
  },
  {
    path: '/portalPractice',
    element: <PortalPractice />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
