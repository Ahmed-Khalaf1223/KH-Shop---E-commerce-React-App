import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";
import { FaGreaterThan } from "react-icons/fa6";

function Breadcrumbs({ productTitle }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <nav className="breadcrumbs container">
      <div>
        <Link to="/">Home</Link>
      </div>

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <span key={to}>
            <span className="arrow_icon">
              <FaGreaterThan />
            </span>
            {last ? (
              <span className="name_product">{productTitle || value}</span>
            ) : (
              <Link className="name_link" to={to}>
                {value}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
