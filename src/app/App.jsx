import { useState } from 'react';
import Navbar from '../shared/components/Navbar';
import Landing from '../pages/landing/Landing';
import Products from '../pages/products/Products';
import CreateNewCategories from '../pages/createNewCategories/CreateNewCategories';
import Contact from '../pages/contact/Contact';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategories, setNewCategories] = useState([]); // Detta är lista för new categories


  const handleNavigate = (page, category = '') => {
    setCurrentPage(page);
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} newCategories={newCategories} /> 
      {currentPage === 'home' && <Landing />}
      {currentPage === 'products' && <Products category={selectedCategory} />}
      {currentPage === 'create-category' && (
        <CreateNewCategories
          newCategories={newCategories}      
          setNewCategories={setNewCategories} 
        />
      )}
      {currentPage === 'contact' && <Contact />}
    </>
  );
}

export default App;