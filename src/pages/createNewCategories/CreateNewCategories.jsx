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
    <div className="newcategory-wrapper">
      <div className="newcategory-page">
        <h2 className="newcategory-title mb-3">Create a new category</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
        </div>
        <button className="btn-style" onClick={handleCreateCategory}>
          Create
        </button>
      </div>

        <div className="newcategory-images mt-4">
          <img src="src/assets/skaters_town.gif" alt="Skaters" />
        </div>
    </div>
  );
};

export default CreateNewCategories;
