import { useState } from 'react';
import Navbar from '../shared/components/Navbar';
import PromoBanner from '../shared/components/PromoBanner';
import Landing from '../pages/landing/Landing';
import Products from '../pages/products/Products';
import CreateNewCategories from '../pages/createNewCategories/CreateNewCategories';
import Contact from '../pages/contact/Contact';
import CreateProduct from '../pages/createProduct/CreateProduct';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategories, setNewCategories] = useState([]); // Detta är lista för new categories
  const [products, setProducts] = useState([]); // För att lagra skapade produkter


  const handleNavigate = (page, category = '') => {
    setCurrentPage(page);
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} newCategories={newCategories} /> 
      <PromoBanner /> 
      {currentPage === 'home' && <Landing />}
      {currentPage === 'products' && <Products category={selectedCategory} />}
      {currentPage === 'create-category' && (
        <CreateNewCategories
          newCategories={newCategories}      
          setNewCategories={setNewCategories} 
        />
      )}

      {currentPage === 'contact' && <Contact />}
      {currentPage === 'create-product' && (
        <CreateProduct
          category={selectedCategory}
          products={products}
          setProducts={setProducts}
        />
      )}
    </>
  );
}

export default App;