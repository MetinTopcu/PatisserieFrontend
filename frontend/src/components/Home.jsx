import React from "react";
import niakaigames from "../images/niakaigames.png";
import slider1 from "../images/slider/slider1.jpg";
import { NavLink, Link } from "react-router-dom";
import "../styles/Home.css";

import SmartPhone from "../images/categories/categories1.png";
import SmartPhone1 from "../images/categories/categories2.png";
import SmartPhone2 from "../images/categories/categories3.png";
import SmartPhone3 from "../images/categories/categories4.png";
import SmartPhone4 from "../images/categories/categories5.png";
import SmartPhone5 from "../images/categories/categories6.png";

import Product from "../images/products/product1/1.png";
import Product1 from "../images/products/product1/2.png";
import Product2 from "../images/products/product2/1.png";
import Product3 from "../images/products/product2/2.png";
import Product4 from "../images/products/product3/1.png";
import Product5 from "../images/products/product3/2.png";
import Product6 from "../images/products/product4/1.png";
import Product7 from "../images/products/product4/2.png";

import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  return (
    <div>
      <section className="slider">
        <div className="slider-elements">
          <div className="slider-item">
            <div className="slider-image">
              <img src={slider1} className="img-fluid" alt="" />
            </div>
            <div className="container">
              <p className="slider-title">SUMMER 2022</p>
              <h2 className="slider-heading">Save up to 70%</h2>
              <Link to="/shop" className="btn btn-lg btn-primary">
                Explore Now
              </Link>
            </div>
          </div>
          <div className="slider-buttons">
            <button>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

          <div className="slider-dots">
            <button className="slider-dot">
              <span></span>
            </button>
            <button className="slider-dot">
              <span></span>
            </button>
            <button className="slider-dot">
              <span></span>
            </button>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <div className="section-title">
            <h2>All Categories</h2>
            <p>Summer Collection new Morden Design</p>
          </div>
          <div>
            <ul className="category-list">
              <li className="category-item">
                <Link to="/shop">
                  <img src={SmartPhone} alt="" className="category-image" />
                  <span className="category-title">Smartphone</span>
                </Link>
              </li>
              <li className="category-item">
                <Link to="/shop">
                  <img src={SmartPhone1} alt="" className="category-image" />
                  <span className="category-title">Watchces</span>
                </Link>
              </li>
              <li className="category-item">
                <Link to="/shop">
                  <img src={SmartPhone2} alt="" className="category-image" />
                  <span className="category-title">Smartphone</span>
                </Link>
              </li>
              <li className="category-item">
                <Link to="/shop">
                  <img src={SmartPhone3} alt="" className="category-image" />
                  <span className="category-title">Smartphone</span>
                </Link>
              </li>
              <li className="category-item">
                <Link to="/shop">
                  <img src={SmartPhone4} alt="" className="category-image" />
                  <span className="category-title">Smartphone</span>
                </Link>
              </li>
              <li className="category-item">
                <Link to="/shop">
                  <img src={SmartPhone5} alt="" className="category-image" />
                  <span className="category-title">Smartphone</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection new Morden Design</p>
          </div>
          <div className="product-wrapper">
            <ul className="product-list">
              <li className="product-item">
                <div className="product-image">
                  <Link to="/shop">
                    <img src={Product} alt="" className="img1" />
                    <img src={Product1} alt="" className="img2" />
                  </Link>
                </div>
                <div className="product-info">
                  <Link to="/shop" className="product-title">
                    Analogue Resin Strap
                  </Link>
                  <ul className="product-star">
                    <li>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <div className="product-prices">
                    <strong className="new-price">$108.00</strong>
                    <span className="old-price">$165.00</span>
                  </div>
                  <span className="product-discount">-17%</span>
                  <div className="product-links">
                    <button>
                      <i className="bi bi-basket-fill"></i>
                    </button>
                    <button>
                      <i className="bi bi-heart-fill"></i>
                    </button>
                    <Link to="/shop">
                      <i className="bi bi-eye-fill"></i>
                    </Link>
                    <Link to="/shop">
                      <i className="bi bi-share-fill"></i>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="product-item">
                <div className="product-image">
                  <Link to="/shop">
                    <img src={Product2} alt="" className="img1" />
                    <img src={Product3} alt="" className="img2" />
                  </Link>
                </div>
                <div className="product-info">
                  <Link to="/shop" className="product-title">
                    Analogue Resin Strap
                  </Link>
                  <ul className="product-star">
                    <li>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <div className="product-prices">
                    <strong className="new-price">$108.00</strong>
                    <span className="old-price">$165.00</span>
                  </div>
                  <span className="product-discount">-17%</span>
                  <div className="product-links">
                    <button>
                      <i className="bi bi-basket-fill"></i>
                    </button>
                    <button>
                      <i className="bi bi-heart-fill"></i>
                    </button>
                    <Link to="/shop">
                      <i className="bi bi-eye-fill"></i>
                    </Link>
                    <Link to="/shop">
                      <i className="bi bi-share-fill"></i>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="product-item">
                <div className="product-image">
                  <Link to="/shop">
                    <img src={Product4} alt="" className="img1" />
                    <img src={Product5} alt="" className="img2" />
                  </Link>
                </div>
                <div className="product-info">
                  <Link to="/shop" className="product-title">
                    Analogue Resin Strap
                  </Link>
                  <ul className="product-star">
                    <li>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <div className="product-prices">
                    <strong className="new-price">$108.00</strong>
                    <span className="old-price">$165.00</span>
                  </div>
                  <span className="product-discount">-17%</span>
                  <div className="product-links">
                    <button>
                      <i className="bi bi-basket-fill"></i>
                    </button>
                    <button>
                      <i className="bi bi-heart-fill"></i>
                    </button>
                    <Link to="/shop">
                      <i className="bi bi-eye-fill"></i>
                    </Link>
                    <Link to="/shop">
                      <i className="bi bi-share-fill"></i>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="product-item">
                <div className="product-image">
                  <Link to="/shop">
                    <img src={Product6} alt="" className="img1" />
                    <img src={Product7} alt="" className="img2" />
                  </Link>
                </div>
                <div className="product-info">
                  <Link to="/shop" className="product-title">
                    Analogue Resin Strap
                  </Link>
                  <ul className="product-star">
                    <li>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <div className="product-prices">
                    <strong className="new-price">$108.00</strong>
                    <span className="old-price">$165.00</span>
                  </div>
                  <span className="product-discount">-17%</span>
                  <div className="product-links">
                    <button>
                      <i className="bi bi-basket-fill"></i>
                    </button>
                    <button>
                      <i className="bi bi-heart-fill"></i>
                    </button>
                    <Link to="/shop">
                      <i className="bi bi-eye-fill"></i>
                    </Link>
                    <Link to="/shop">
                      <i className="bi bi-share-fill"></i>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="campaigns">
        <div className="container">
          <div className="campaigns-wrapper">
            <div className="campaign-item">
              <h3 className="campaign-title">This is TITLE</h3>
              <p className="campaign-desc">
                Fashion Month Capitaliyis Lorem ipsum dolor sit amet.
              </p>
              <Link to="/shop" className="btn btn-primary">
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="campaign-item">
              <h3 className="campaign-title">This is TITLE</h3>
              <p className="campaign-desc">
                Fashion Month Capitaliyis Lorem ipsum dolor sit amet.
              </p>
              <Link to="/shop" className="btn btn-primary">
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="campaigns-wrapper">
            <div className="campaign-item">
              <h3 className="campaign-title">This is TITLE</h3>
              <p className="campaign-desc">
                Fashion Month Capitaliyis Lorem ipsum dolor sit amet.
              </p>
              <Link to="/shop" className="btn btn-primary">
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="campaign-item">
              <h3 className="campaign-title">This is TITLE</h3>
              <p className="campaign-desc">
                Fashion Month Capitaliyis Lorem ipsum dolor sit amet.
              </p>
              <Link to="/shop" className="btn btn-primary">
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
