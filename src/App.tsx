import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import DesignersPage from './pages/DesignersPage';
import BrandsPage from './pages/BrandsPage';
import ModelDetailPage from './pages/ModelDetailPage';
import ProfilePage from './pages/ProfilePage';
import UploadPage from './pages/UploadPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/auth/PrivateRoute';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="designers" element={<DesignersPage />} />
        <Route path="brands" element={<BrandsPage />} />
        <Route path="model/:id" element={<ModelDetailPage />} />
        <Route path="profile/:id" element={<ProfilePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route 
          path="upload" 
          element={
            <PrivateRoute>
              <UploadPage />
            </PrivateRoute>
          } 
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;