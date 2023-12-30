import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/Navbar.css";
import niakaigames from "../../images/niakaigames.png";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div>
      <div className="header">
        <div className="global-notification">
          <div className="container">
            <p>
              Cakes are cheapest at Nia Kai Games!
              <Link to="/shop">Shop</Link>
            </p>
          </div>
        </div>
        <div className="header-row">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-mobile">
                <i className="bi bi-list"></i>
              </div>
              <div className="header-left">
                <Link to="/">
                  <img className="logo" src={niakaigames} />
                </Link>
              </div>
              <div className="header-center">
                <nav className="navigation">
                  <ul className="menu-list">
                    <li className="menu-list-item">
                      <NavLink className="menu-link" to="/">
                        Home
                        <i className="bi bi-chevron-down"></i>
                      </NavLink>
                      <div className="menu-dropdown-wrapper">
                        <ul className="menu-dropdown-content">
                          <li>
                            <Link to="/shop">Home Clean</Link>
                          </li>
                          <li>
                            <Link to="/shop">Home Collection</Link>
                          </li>
                          <li>
                            <Link to="/shop">Home Minimal</Link>
                          </li>
                          <li>
                            <Link to="/shop">Home Modern</Link>
                          </li>
                          <li>
                            <Link to="/shop">Home Parallax</Link>
                          </li>
                          <li>
                            <Link to="/shop">Home Strong</Link>
                          </li>
                          <li>
                            <Link to="/shop">Home Style</Link>
                          </li>
                          <li>
                            <Link to="/shop">Home Unique</Link>
                          </li>
                          <li>
                            <Link to="/shop">Home RTL</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-item megamenu-wrapper">
                      <NavLink className="menu-link" to="/shop">
                        Shop
                        <i className="bi bi-chevron-down"></i>
                      </NavLink>
                      <div className="menu-dropdown-wrapper">
                        <div className="menu-dropdown-megamenu">
                          <div className="megamenu-links">
                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">
                                Shop Style
                              </h3>
                              <ul className="megamenu-menu-list">
                                <li>
                                  <Link to="/shop">Shop Clean</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Collection</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Minimal</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Modern</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Parallax</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Strong</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Style</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Unique</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop RTL</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">
                                Filter Layout
                              </h3>
                              <ul className="megamenu-menu-list">
                                <li>
                                  <Link to="/shop">Shop Clean</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Collection</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Minimal</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Modern</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Parallax</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Strong</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Style</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Unique</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop RTL</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">
                                Shop Loader
                              </h3>
                              <ul className="megamenu-menu-list">
                                <li>
                                  <Link to="/shop">Shop Clean</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Collection</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Minimal</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Modern</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Parallax</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Strong</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Style</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop Unique</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop RTL</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="megamenu-single">
                            <Link to="/shop">
                              <img src={niakaigames} alt="" />
                            </Link>
                            <h3 className="megamenu-single-title">
                              JOIN THE LAYERING GANG
                            </h3>
                            <h4 className="megamenu-single-subtitle">
                              NİAKAİ GAMES SHOW YAPAR HERYERDE
                            </h4>
                            <Link
                              to="/shop"
                              className="megamenu-single-button btn btn-sm"
                            >
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-list-item">
                      <NavLink className="menu-link" to="/blog">
                        Blog
                      </NavLink>
                    </li>
                    <li className="menu-list-item">
                      <NavLink className="menu-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <i className="bi-x-circle"></i>
              </div>
              <div className="header-right">
                <div className="header-right-links">
                  <NavLink className="header-account" to="/account">
                    <i className="bi bi-person"></i>
                  </NavLink>
                  <button className="toggle-button">
                    <i className="bi bi-search"></i>
                  </button>
                  <NavLink>
                    <i className="bi bi-heart"></i>
                  </NavLink>
                  <div className="header-cart">
                    <NavLink className="header-cart-link">
                      <i className="bi bi-bag"></i>
                      <span className="header-cart-count">0</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-search">
        <div className="modal-wrapper">
          <h3 className="modal-title">Search for products</h3>
          <p className="modal-text">
            Start typing to see products you are looking for
          </p>
          <form className="search-form">
            <input type="text" placeholder="search a product" />
            <button>
              <i className="bi bi-search"></i>
            </button>
          </form>
          <div className="search-results">
            <div className="search-heading">
              <h3>RESULTS FROM PRODUCT</h3>
            </div>
          </div>
          <div className="results">
            <Link to="/" className="result-item">
              <img src={niakaigames} alt="" className="search-thumb" />
              <div className="search-info">
                <h4>Analogue Resin Strap</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">$108.00</span>
              </div>
            </Link>
            <Link to="/" className="result-item">
              <img src={niakaigames} alt="" className="search-thumb" />
              <div className="search-info">
                <h4>Analogue Resin Strap</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">$108.00</span>
              </div>
            </Link>
          </div>
          <i className="bi bi-x-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
