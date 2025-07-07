import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inbox from './components/Inbox';
import Mail from './components/Mail';
import Body from './components/Body';
import SendMail from './components/SendMail';
import Login from './components/Login';
import { useSelector } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />,
      },
      {
        path: '/mail/:id',
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  const { user } = useSelector(store => store.appSlice) // Replace with real auth logic later

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-hidden">
            <RouterProvider router={router} />
          </div>
          <div className='fixed bottom-5 right-5 w-[30%] z-50'>
            <SendMail />
          </div>
        </div>

      )}
    </div>
  );
}

export default App;



