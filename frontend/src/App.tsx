import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from '@components/Layout/Layout';
import LoadingSpinner from '@components/UI/LoadingSpinner';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

// Lazy load pages for better performance
const HomePage = lazy(() => import('@pages/Home/HomePage'));
const AboutPage = lazy(() => import('@pages/About/AboutPage'));
const ContactPage = lazy(() => import('@pages/Contact/ContactPage'));
const DashboardPage = lazy(() => import('@pages/Dashboard/DashboardPage'));
const LoginPage = lazy(() => import('@pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('@pages/Auth/RegisterPage'));
const NotFoundPage = lazy(() => import('@pages/NotFound/NotFoundPage'));

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={
            <Suspense fallback={<LoadingSpinner />}>
              <LoginPage />
            </Suspense>
          } />
          <Route path="/register" element={
            <Suspense fallback={<LoadingSpinner />}>
              <RegisterPage />
            </Suspense>
          } />
          
          {/* Routes with layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<LoadingSpinner />}>
                <AboutPage />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<LoadingSpinner />}>
                <ContactPage />
              </Suspense>
            } />
            <Route path="dashboard" element={
              <Suspense fallback={<LoadingSpinner />}>
                <DashboardPage />
              </Suspense>
            } />
          </Route>
          
          {/* 404 page */}
          <Route path="*" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFoundPage />
            </Suspense>
          } />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
