import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ROUTES } from './constants/routes';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import PostsPage from './pages/Posts';
import AssetsPage from './pages/Assets';
import UploadsPage from './pages/Uploads';
import PaymentsPage from './pages/Payments';
import ProfilePage from './pages/Profile';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.POSTS} element={<PostsPage />} />
          <Route path={ROUTES.ASSETS} element={<AssetsPage />} />
          <Route path={ROUTES.UPLOADS} element={<UploadsPage />} />
          <Route path={ROUTES.PAYMENTS} element={<PaymentsPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
