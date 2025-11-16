import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import MobileNav from '../components/MobileNav';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background-default pb-20 lg:pb-0">
      <Navigation />
      <main className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6 lg:py-8">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
};

export default MainLayout;

