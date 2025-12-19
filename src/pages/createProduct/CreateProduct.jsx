import { useState } from 'react';
import '../../css/index.css';

function CreateProduct({ category, products, setProducts }) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (productName && price && imagePreview) {
      const newProduct = {
        name: productName,
        price: price,
        image: imagePreview,
        category: category
      };
      
      setProducts([...products, newProduct]);
      
      // Rensa formuläret
      setProductName('');
      setPrice('');
      setImage(null);
      setImagePreview('');
    }
  };

  // Filtrera produkter för denna kategori
  const categoryProducts = products.filter(p => p.category === category);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-white">Skapa produkt för: {category}</h2>
      
      {/* Visa skapade produkter ovanför form */}
      {categoryProducts.length > 0 && (
        <div className="mb-5">
          <h4 className="text-white">Skapade produkter:</h4>
          <div className="row">
            {categoryProducts.map((product, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img 
                    src={product.image} 
                    className="card-img-top create-product-card-img" 
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price} kr</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form för att skapa ny produkt */}
      <div className="bg-dark p-4 rounded shadow create-product-form">
        <h4 className="text-warning mb-4">Lägg till ny produkt</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label text-warning">Produktnamn</label>
            <input
              type="text"
              className="form-control bg-black text-warning border-warning"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label text-warning">Pris (kr)</label>
            <input
              type="number"
              className="form-control bg-black text-warning border-warning"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label text-warning">Bild</label>
            <input
              type="file"
              className="form-control bg-black text-warning border-warning"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {imagePreview && (
              <div className="mt-2">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="create-product-preview"
                />
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Skapa produkt
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
