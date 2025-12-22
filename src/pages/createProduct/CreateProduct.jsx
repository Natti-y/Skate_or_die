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
        category: category,
      };

      setProducts([...products, newProduct]);

      // Reset form
      setProductName('');
      setPrice('');
      setImage(null);
      setImagePreview('');
    }
  };

  const categoryProducts = products.filter(
    (p) => p.category === category
  );

  return (
    <div className="create-product-wrapper">
      <div className="create-product-page">

        {/* FORM */}
        <div className="create-product-form">
          <h2 className="mb-3">Create new product for: {category}</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Product name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Skate Hoodie"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price (SEK)</label>
              <input
                type="number"
                className="form-control"
                placeholder="e.g. 599"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <button className="btn-style">
              Create product
            </button>
          </form>
        </div>

        {/* PRODUCTS */}
        {categoryProducts.length > 0 && (
          <div className="created-products">
            {categoryProducts.map((product, index) => (
              <div key={index} className="created-product-card">
                <img src={product.image} alt={product.name} />
                <h5>{product.name}</h5>
                <p>{product.price} SEK</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default CreateProduct;
