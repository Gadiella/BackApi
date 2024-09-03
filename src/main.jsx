import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,RouterProvider,} from "react-router-dom";
  import Registration from './Pages/Registration/Registration.jsx';

import './index.css'
import OtpCode from './Pages/OtpCode/OtpCode.jsx';
import Dashbord from './Pages/Dashbord/Dashbord.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/otp-code/:email",
    element: <OtpCode />,
  },
  {
    path: "/dashbord",
    element: <Dashbord />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
