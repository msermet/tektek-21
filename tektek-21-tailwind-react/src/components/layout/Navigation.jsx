import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Navigation() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 antialiased min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
