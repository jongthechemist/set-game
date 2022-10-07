import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Board from './pages/Board';
import Deck from './pages/Deck';
import Host from './pages/Host';
import Game from './pages/Game';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Board/>
      },
      {
        path: "/deck",
        element: <Deck/>
      },
      {
        path: "/host",
        element: <Host/>,
        children: [
          {
            path: ":hostId",
            element: <Game/>
          }
        ]
      },
      {
        path: "/game/:hostId",
        element: <Game/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
