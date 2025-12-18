import { useState } from 'react';
import Navbar from '../shared/components/Navbar';
import Landing from '../pages/landing/Landing';
import Products from '../pages/products/Products';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleNavigate = (page, category = '') => {
    setCurrentPage(page);
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      {currentPage === 'home' && <Landing />}
      {currentPage === 'products' && <Products category={selectedCategory} />}
    </>
  );
}

export default App;