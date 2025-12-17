import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>

            {/* Dropdown: Products */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><a className="dropdown-item" href="#">T-Shirt</a></li>
                <li><a className="dropdown-item" href="#">Hoodie</a></li>
                <li><a className="dropdown-item" href="#">Jacket</a></li>
                <li><a className="dropdown-item" href="#">Shoes</a></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">Create New Category</a>
            </li>

            {/* Dropdown: New Category */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="newCategoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                New Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="newCategoriesDropdown">
              </ul>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;