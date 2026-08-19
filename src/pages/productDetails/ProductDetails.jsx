import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { HiOutlinePlusSmall, HiOutlineMinusSmall } from "react-icons/hi2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Swiper Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, FreeMode } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import ProductDetailsSkeleton from "../../components/ui/Skeleton/product details/ProductDetailsSkeleton";
function ProductDetails() {
  const { id } = useParams();
  const { products, loading } = useContext(ProductContext);
  const [activeTab, setActiveTab] = useState("details");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(ProductContext);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const product = useMemo(() => {
    return products.find((p) => p.id === Number(id));
  }, [products, id]);

  if (loading) return <ProductDetailsSkeleton />;

  if (!product) return <p>Product not found</p>;

  const oldPrice = Math.round(
    product.price / (1 - product.discountPercentage / 100),
  );
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success("Product added to cart");
    setQuantity(1);
  };
  return (
    <div className="product-details container">
      <nav className="Header_products ">
        <Breadcrumbs productTitle={product.title} />
      </nav>
      <div className="details-grid">
        {/* Images */}
        <div className="images_details">
          <Swiper
            loop={true}
            navigation={true}
            centeredSlides={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Navigation, Thumbs]}
            className="main-image-slider"
          >
            {product.images?.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={product.title} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            navigation={true}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-slider"
          >
            {product.images?.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt="thumbnail" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Info */}
        <div className="info">
          <h1>{product.title}</h1>
          <div className="product-rating">
            <span className="stars">
              {"★".repeat(Math.round(product.rating))}
              {"☆".repeat(5 - Math.round(product.rating))}
            </span>
            <span className="rating-num">{product.rating}/5</span>
          </div>

          <div className="product-price">
            <span className="current-price">${product.price}</span>
            <span className="old-price">${oldPrice}</span>
            <span className="discount-badge">
              -{product.discountPercentage}%
            </span>
          </div>
          <p className="desc line_bottom">{product.description}</p>
          <p className="brand line_bottom">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="stock line_bottom">
            <strong>Stock:</strong> {product.stock}
          </p>
          {/* Add to Cart Button */}
          <div className="action-wrapper">
            <div className="quantity-selector">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                type="button"
              >
                <HiOutlineMinusSmall />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() =>
                  quantity < product.stock && setQuantity(quantity + 1)
                }
                type="button"
              >
                <HiOutlinePlusSmall />
              </button>
            </div>

            <button
              className="add-cart"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
      {/*Tabs Section */}
      <div className="product-extra-info">
        <div className="tabs-header">
          <button
            className={activeTab === "details" ? "active" : ""}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Rating & Reviews
          </button>
          <button
            className={activeTab === "faqs" ? "active" : ""}
            onClick={() => setActiveTab("faqs")}
          >
            FAQs
          </button>
        </div>

        <div className="tab-content">
          {/* Product details*/}
          {activeTab === "details" && (
            <div className="details-tab">
              <div className="specifications">
                <h2>Product Specifications</h2>
                <ul>
                  <li>
                    <strong>Brand:</strong> {product.brand}
                  </li>
                  <li>
                    <strong>Category:</strong> {product.category}
                  </li>
                  <li>
                    <strong>SKU:</strong> {product.sku}
                  </li>
                  <li>
                    <strong>Dimensions:</strong>
                    {product.dimensions?.width} x {product.dimensions?.height} x{" "}
                    {product.dimensions?.depth} cm
                  </li>
                  <li>
                    <strong>Weight:</strong> {product.weight} kg
                  </li>
                </ul>
              </div>
              <div className="specifications">
                <h2>Availability</h2>
                <ul>
                  <li>
                    <strong>Status:</strong> {product.availabilityStatus}
                  </li>
                  <li>
                    <strong>Stock:</strong> {product.stock} pieces
                  </li>
                  <li>
                    <strong>Minimum Order:</strong>{" "}
                    {product.minimumOrderQuantity}
                  </li>
                </ul>
              </div>
              <div className="specifications">
                <h2>Delivery & Returns</h2>
                <ul>
                  <li>
                    <strong>Shipping:</strong> {product.shippingInformation}
                  </li>
                  <li>
                    <strong>Warranty:</strong> {product.warrantyInformation}
                  </li>
                  <li>
                    <strong>Return Policy:</strong> {product.returnPolicy}
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Reviews and ratings */}
          {activeTab === "reviews" && (
            <div className="reviews-tab">
              <div className="reviews-header">
                <h3>
                  All Reviews <span>({product.reviews?.length || 0})</span>
                </h3>
                <button className="write-review">Write a Review</button>
              </div>
              <div className="reviews-grid">
                {product.reviews?.map((rev, index) => (
                  <div key={index} className="review-card">
                    <div className="stars">
                      {"★".repeat(rev.rating || 0)}
                      {"☆".repeat(5 - (rev.rating || 0))}
                    </div>
                    <h4>{rev.reviewerName} ✅</h4>
                    <p>"{rev.comment}"</p>
                    <span className="review-date">
                      Posted on {new Date(rev.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Frequently Asked Questions */}
          {activeTab === "faqs" && (
            <div className="faqs-tab">
              <div className="faq-item">
                <h4>What is the return policy?</h4>
                <p>{product.returnPolicy}</p>
              </div>
              <div className="faq-item">
                <h4>How long does shipping take?</h4>
                <p>{product.shippingInformation}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
