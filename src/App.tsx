import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ServicesContent } from './components/Services';
import { TrainingContent } from './components/Training';
import { PlacementContent } from './components/Placement';
import Blog from './components/Blog';
import BlogDetail from './components/blog/BlogDetail';
import HomeBlogSection from './components/blog/HomeBlogSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePage from './components/services/ServicePage';
import TrainingPage from './components/training/TrainingPage';
import CourseDetail from './components/training/CourseDetail';
import About from './components/About';
import Placement from './components/Placement';

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useScrollToTop();
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <ServicesContent />
                  <TrainingContent />
                  <PlacementContent />
                  <HomeBlogSection />
                  <Testimonials />
                </main>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/training/:category" element={<TrainingPage />} />
            <Route path="/training/course/:courseId" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/placement" element={<Placement />} />
          </Routes>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;