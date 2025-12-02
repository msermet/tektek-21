import Navigation from '../components/layout/Navigation';
import Home from '../pages/Home';
import Presentation from '../pages/Presentation';
import Collaborateurs from '../pages/Collaborateurs';
import Donner from '../pages/Donner';
import Contact from '../pages/Contact';

export const routes = [
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'presentation',
        element: <Presentation />
      },
      {
        path: 'collaborateurs',
        element: <Collaborateurs />
      },
      {
        path: 'donner',
        element: <Donner />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
];
