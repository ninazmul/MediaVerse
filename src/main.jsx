import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router-dom";


import './index.css'
import Routes from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={Routes} />
    </AuthProvider>
  </React.StrictMode>
);
