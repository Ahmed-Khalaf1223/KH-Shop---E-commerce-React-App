import { useContext, useEffect, useState } from "react";
import "./Product.css";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/Products/ProductCard";
import ProductFilter from "../components/Products/ProductFilter";
import PaginationProducts from "../components/ui/ProductPagination/paginationProducts";
import Breadcrumbs from "../components/ui/Breadcrumbs/Breadcrumbs";
import ProductsSkeleton from "../components/ui/Skeleton/All product/ProductsSkeleton";
import filter_images from "../assets/image/filter.715a6a6e.svg";
function Product() {
  const { filteredProducts, loading, categories, selectedCategory } =
    useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [filteredProducts]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="products">
      <div className="container">
        {/* Header products */}
        <nav className="Header_products ">
          <Breadcrumbs productTitle={Product.title} />
        </nav>

        <div className="main-layout">
          {/* Sidebar Filters */}
          {/* Mobile phone filter button*/}
          <div className="mobile-header">
            <h2 className="mobile-title">
              {selectedCategory === "all"
                ? "All Products"
                : selectedCategory.replace("-", " ")}
            </h2>
          </div>

          <ProductFilter
            categories={categories}
            show={showFilter}
            onClose={() => setShowFilter(false)}
          />

          {/* Products Grid */}
          <section className="content">
            <div className="content-header">
              {/* Filter Icon */}
              <span
                className="icon-filter-mobile"
                onClick={() => setShowFilter(true)}
              >
                <img src={filter_images} alt="filter icon" />
              </span>
              <h2 className="content-title-desktop">
                {" "}
                {selectedCategory === "all"
                  ? "All Products"
                  : selectedCategory.replace("-", " ")}
              </h2>
              <div className="sort-info">
                {filteredProducts.length === 0 ? (
                  "No products found"
                ) : (
                  <>
                    Showing {indexOfFirstProduct + 1}-
                    {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                    {filteredProducts.length} Products
                  </>
                )}
              </div>
            </div>
            {/* ProductCard */}
            <div className="product-grid">
              {loading
                ? Array.from({ length: productsPerPage }).map((_, index) => (
                    <ProductsSkeleton key={index} />
                  ))
                : currentProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <PaginationProducts
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Product;
