import React from "react";
import { createContext, useState, useEffect, useMemo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();
function ProductProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage on mount
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        if (existing.quantity + quantity > product.stock) {
          return prev;
        }

        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      if (quantity > product.stock) {
        return prev;
      }

      return [...prev, { ...product, quantity }];
    });
  };

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity >= item.stock) {
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };

  // ✅ Decrease quantity and remove if it reaches 0
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const fetchProducts = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        fetch("https://dummyjson.com/products?limit=0"),
        fetch("https://dummyjson.com/products/category-list"),
      ]);
      const productsData = await productsRes.json();
      const categoriesData = await categoriesRes.json();

      setProducts(productsData.products);
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    let result =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    if (searchQuery.trim() !== "") {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return result;
  }, [products, selectedCategory, searchQuery]);

  // Sort products
  const newArrivalsProducts = useMemo(() => {
    return [...products].reverse().slice(0, 4);
  }, [products]);

  const topSellingProducts = useMemo(() => {
    return [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  }, [products]);

  const value = useMemo(() => {
    return {
      products,
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      categories,
      filteredProducts,
      selectedCategory,
      setSelectedCategory,
      loading,
      newArrivalsProducts,
      topSellingProducts,
      setSearchQuery,
      searchQuery,
    };
  }, [
    products,
    cartItems,
    categories,
    selectedCategory,
    loading,
    newArrivalsProducts,
    topSellingProducts,
    filteredProducts,
    searchQuery,
  ]);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
