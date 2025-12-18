import tshirt1 from '../../assets/productImages/tshirts/t-shirt1.png';
import tshirt2 from '../../assets/productImages/tshirts/t-shirt2.png';
import tshirt3 from '../../assets/productImages/tshirts/t-shirt3.png';
import hoodie1 from '../../assets/productImages/hoodies/hoodie1.png';
import hoodie2 from '../../assets/productImages/hoodies/hoodie2.png';
import hoodie3 from '../../assets/productImages/hoodies/hoodie3.png';
import jacket1 from '../../assets/productImages/jackets/jacket1.png';
import jacket2 from '../../assets/productImages/jackets/jacket2.png';
import jacket3 from '../../assets/productImages/jackets/jacket3.png';
import shoe1 from '../../assets/productImages/shoes/shoe1.png';
import shoe2 from '../../assets/productImages/shoes/shoe2.png';
import shoe3 from '../../assets/productImages/shoes/shoe3.png';


const Products = ({ category }) => {
  // Produktdata
  const allProducts = {
    'tshirt': [
      { id: 1, name: 'T-Shirt 1', price: 299, image: tshirt1 },
      { id: 2, name: 'T-Shirt 2', price: 349, image: tshirt2 },
      { id: 3, name: 'T-Shirt 3', price: 399, image: tshirt3 },
    ],
    'hoodie': [
      { id: 1, name: 'Hoodie 1', price: 599, image: hoodie1 },
      { id: 2, name: 'Hoodie 2', price: 699, image: hoodie2 },
      { id: 3, name: 'Hoodie 3', price: 799, image: hoodie3 },
    ],
    'jacket': [
      { id: 1, name: 'Jacket 1', price: 899, image: jacket1 },
      { id: 2, name: 'Jacket 2', price: 999, image: jacket2 },
      { id: 3, name: 'Jacket 3', price: 1099, image: jacket3 },
    ],
    'shoes': [
      { id: 1, name: 'Shoes 1', price: 799, image: shoe1 },
      { id: 2, name: 'Shoes 2', price: 899, image:  shoe2 },
      { id: 3, name: 'Shoes 3', price: 999, image: shoe3 },
    ],
  };

  const products = allProducts[category] || [];

  return (
    <div className="container mt-5">
      <h1 className="text-capitalize mb-4 text-white">{category}</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              {product.image && (
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.name}
                  style={{ height: '450px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price} kr</p>
                <button className="btn btn-primary">Köp</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;