import React, { useState } from 'react';

const CreateNewCategories = ({ newCategories, setNewCategories }) => { // Lägger till props
const [newCategoryName, setNewCategoryName] = useState('');

  const handleCreateCategory = () => {
    if (newCategoryName.trim() === '') return;
    setNewCategories([...newCategories, newCategoryName]); // lägger till i dropdown listan
    alert(`Category "${newCategoryName}" created!`);
    setNewCategoryName('');
  };

  return (
    <div className="bg-dark p-4 rounded shadow" style={{ maxWidth: '500px', margin: '0 auto' }}>
      {/* Bakgrund runt hela sektionen */}
      <h2 className="text-warning mb-3">Create a new category</h2> {/* Gul text för den poppar mer */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control bg-black text-warning border-warning" // Gul text svart bakgrund och gul kant
          placeholder="Category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
      </div>
      <button className="btn btn-warning w-100" onClick={handleCreateCategory}>
        Create
      </button>
    </div>
  );
};

export default CreateNewCategories;
