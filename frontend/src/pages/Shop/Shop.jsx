import { useEffect, useState, useMemo } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Shop.css";
import { Helmet } from "react-helmet";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import Loader from "../../components/Loader/Loader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  const toggleFilterMenu = () => setFilterMenuOpen((prev) => !prev);
  const toggleSortMenu = () => setSortMenuOpen((prev) => !prev);

  const fetchProductsData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    //  filters
    if (filters.search) {
      const term = filters.search.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(term));
    }

    if (filters.ideal?.length) {
      filtered = filtered.filter((p) =>
        filters.ideal.some((v) =>
          p.category.toLowerCase().includes(v.toLowerCase())
        )
      );
    }

    if (filters.occasion?.length) {
      filtered = filtered.filter((p) =>
        filters.occasion.some((v) =>
          p.title.toLowerCase().includes(v.toLowerCase())
        )
      );
    }

    if (filters.fabric?.length) {
      filtered = filtered.filter((p) =>
        filters.fabric.some((v) =>
          p.title.toLowerCase().includes(v.toLowerCase())
        )
      );
    }

    if (filters.pattern?.length) {
      filtered = filtered.filter((p) =>
        filters.pattern.some((v) =>
          p.title.toLowerCase().includes(v.toLowerCase())
        )
      );
    }

    if (filters.sortBy === "Price: High to Low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === "Price: Low to High") {
      filtered.sort((a, b) => a.price - b.price);
    }

    return filtered;
  }, [products, filters]);

  return (
    <>
      <Helmet>
        <title>Shop | Appscrip</title>
        <meta
          name="description"
          content="Browse our exclusive collection of men's and women's fashion at NovaWear. Trendy styles, affordable prices, and fast delivery."
        />
        <meta
          name="keywords"
          content="shop, clothing, fashion, novawear, dresses, shirts, shoes"
        />
      </Helmet>
      <Header />
      <section className="section-container">
        <div className="section-header">
          <p className="section-title">DISCOVER OUR PRODUCTS</p>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <div className="filter-section">
          <div className="filters">
            <p className="products-count">{filteredProducts.length} ITEMS</p>
            <button onClick={toggleFilterMenu} className="filter-btn">
              {filterMenuOpen ? (
                <span className="filter-toggle">
                  <MdOutlineKeyboardArrowLeft size={15} />
                  <span>HIDE FILTERS</span>
                </span>
              ) : (
                <span className="filter-toggle">
                  <span>SHOW FILTERS</span>
                  <MdOutlineKeyboardArrowRight size={15} />
                </span>
              )}
            </button>
          </div>
          <div className="sort-menu">
            <button onClick={toggleSortMenu} className="sort-btn">
              {filters.sortBy ? filters.sortBy : "RECOMMENDED"}
              <MdKeyboardArrowDown size={15} />
            </button>

            {sortMenuOpen && (
              <ul className="sort-dropdown">
                <li
                  onClick={() => {
                    setFilters((prev) => ({
                      ...prev,
                      sortBy: "",
                    }));
                    setSortMenuOpen(false);
                  }}
                >
                  Recommended
                </li>
                <li
                  onClick={() => {
                    setFilters((prev) => ({
                      ...prev,
                      sortBy: "Price: High to Low",
                    }));
                    setSortMenuOpen(false);
                  }}
                >
                  Price: High to Low
                </li>
                <li
                  onClick={() => {
                    setFilters((prev) => ({
                      ...prev,
                      sortBy: "Price: Low to High",
                    }));
                    setSortMenuOpen(false);
                  }}
                >
                  Price: Low to High
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* Products Section */}
        {!loading ? (
          <section className="products-section">
            {filterMenuOpen && (
              <aside className="filter-container">
                <Sidebar setFilters={setFilters} />
              </aside>
            )}

            {filteredProducts.length > 0 ? (
              <ul className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} productInfo={product} />
                ))}
              </ul>
            ) : (
              <div className="no-results-wrapper">
                <img
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1746262581/product_not_found-removebg-preview_qnjito.png"
                  alt="not-found-img"
                  className="no-results-image"
                />
              </div>
            )}
          </section>
        ) : (
          <Loader />
        )}
      </section>

      <Footer />
    </>
  );
};

export default Shop;
