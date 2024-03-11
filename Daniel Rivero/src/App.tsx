import { FunctionComponent } from 'react';
import Init from './pages/init'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Init/>
  },
]);

const App: FunctionComponent = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
