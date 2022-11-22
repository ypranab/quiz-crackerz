import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import Quizes from './components/Quizes/Quizes';
import Stats from './components/Stats/Stats';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'quiz',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Quiz></Quiz>
        },
        {
          path: 'quizes/:quizid',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`);
          },
          element: <Quizes></Quizes>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/stats',
          element: <Stats></Stats>
        }
      ]
    },
    {
      path: '*',
      element: <h2>Not found</h2>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
