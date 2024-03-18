import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/DadosPessoais.jsx';
import Educacao from './routes/Educacao.jsx';
import XProfissional from './routes/xProfissionais.jsx';
import Metas from './routes/MetasProfissionais.jsx';
import Habilidades from './routes/Habilidades.jsx';
import Download from './routes/Download.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/educacao",
        element: <Educacao/>
      },
      {
        path: "/xProfissionais",
        element: <XProfissional/>
      },
      {
        path: "/metasProfissionais",
        element: <Metas/>
      },
      {
        path: "/habilidades",
        element: <Habilidades/>
      },
      {
        path: "/download",
        element: <Download/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
