import React from "react";
import AboutImages from "../images/about-img.jpg";
import "../styles/Blog.css";

function Blog() {
  return (
    <div className="blog-contents">
      <div className="blog-images">
        <img src={AboutImages} alt="" />
      </div>
      <div className="blog-title">
        <h2>
          A Traditional Southern Bakery with that touch of Southern Hospitality
        </h2>
      </div>
      <div className="blog-description">
        A unique blend of a traditional bakery with a sweet touch of Southern
        hospitality baked with love into every dessert. This bakery concept is
        3-generations in the making and family-owned and operated. It all
        started with Grandma Emma's made from scratch dessert delights.The
        results are an array of exquisitely decorated tasty pastries served with
        a touch of old-fashioned.
      </div>
      <div className="blog-signature">Metin Topcu</div>
    </div>
  );
}

export default Blog;
