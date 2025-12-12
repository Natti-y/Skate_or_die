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
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New</a>
            </li>

            {/* Dropdown: Clothes */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="clothesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Clothes
              </a>
              <ul className="dropdown-menu" aria-labelledby="clothesDropdown">
                <li><a className="dropdown-item" href="#">T-Shirt</a></li>
                <li><a className="dropdown-item" href="#">Hoodie</a></li>
                <li><a className="dropdown-item" href="#">Jacket</a></li>
              </ul>
            </li>

            {/* Dropdown: Shoes */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="shoesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shoes
              </a>
              <ul className="dropdown-menu" aria-labelledby="shoesDropdown">
                <li><a className="dropdown-item" href="#">Skate Shoes</a></li>
                <li><a className="dropdown-item" href="#">Sneakers</a></li>
                <li><a className="dropdown-item" href="#">Boots</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;