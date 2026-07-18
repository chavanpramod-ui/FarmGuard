import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import SmartFenceCalculator from './components/SmartFenceCalculator';
import CartAndCheckoutModal from './components/CartAndCheckoutModal';
import FarmerEducationSection from './components/FarmerEducationSection';
import Footer from './components/Footer';
import ProductSidebar from './components/ProductSidebar';
import fallbackProducts from './data/fallbackProducts';
import { Zap, Filter, Cpu, ShieldCheck, Sparkles, SlidersHorizontal, RefreshCw } from 'lucide-react';

function App() {
  const [products, setProducts] = useState(fallbackProducts);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [currentView, setCurrentView] = useState('catalog'); // 'catalog', 'calculator', 'education'
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('en'); // 'en', 'hi', or 'mr'
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize cart from localStorage if present
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('farmguard_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('farmguard_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Fetch products and categories on mount
  useEffect(() => {
    const fetchCatalog = async () => {
      setLoading(true);
      try {
        const resProducts = await fetch('/api/products');
        if (resProducts.ok) {
          const data = await resProducts.json();
          // Check if backend returned our updated shop inventory
          if (data && data.length > 0 && data.some(p => p._id === 'prod_jhatka_12kv_set')) {
            setProducts(data);
          } else {
            console.log("Backend API serving old seed data; using exact local shop catalog until server restart.");
            setProducts(fallbackProducts);
          }
        } else {
          setProducts(fallbackProducts);
        }
      } catch (err) {
        console.warn("API fetch fallback active:", err.message);
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const resCat = await fetch('/api/products/categories/summary');
        if (resCat.ok) {
          const catData = await resCat.json();
          setCategories(catData);
        }
      } catch (err) {}
    };

    fetchCatalog();
    fetchCategories();
  }, []);

  // Filter products based on selected category & search query (checking en, hi, mr)
  const filteredProducts = products.filter(p => {
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    const matchesSearch = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (p.nameHindi && p.nameHindi.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.nameMarathi && p.nameMarathi.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.tagline && p.tagline.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.taglineMarathi && p.taglineMarathi.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productToAdd) => {
    setCart(prevCart => {
      const existingIdx = prevCart.findIndex(item => item._id === productToAdd._id || item.product === productToAdd._id);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1, product: productToAdd._id }];
      }
    });
  };

  const updateCartQty = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart => prevCart.map(item => 
      (item._id === productId || item.product === productId) ? { ...item, quantity: newQty } : item
    ));
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item._id !== productId && item.product !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 selection:bg-emerald-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        cart={cart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        language={language}
        setLanguage={setLanguage}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Main Container */}
      <main className="flex-1">
        {currentView === 'catalog' && (
          <>
            {/* Show Hero Banner only when no search is active and category is 'all' */}
            {categoryFilter === 'all' && !searchQuery && (
              <HeroBanner setCurrentView={setCurrentView} language={language} />
            )}

            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Left Sidebar - Categories */}
                <ProductSidebar 
                  categoryFilter={categoryFilter}
                  setCategoryFilter={setCategoryFilter}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  language={language}
                />

                {/* Right Content - Products */}
                <div className="flex-1 space-y-6 w-full">
                  
                  {/* Section Heading */}
                  <div className="pb-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center gap-2.5 tracking-tight">
                        <Zap className="text-emerald-600 fill-emerald-600" size={26} />
                        {language === 'en' && 'Direct-to-Farmer Product Catalog'}
                        {language === 'hi' && 'किसान उत्पाद सूची (सीधे फैक्ट्री से)'}
                        {language === 'mr' && 'शेतकरी उत्पादने आणि यंत्रे (थेट फॅक्टरीमधून)'}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        {language === 'en' && 'ISI compliant solar fence controllers, batteries, high-voltage insulators, and agricultural machinery.'}
                        {language === 'hi' && 'ISI मानक सुरक्षित सोलर झटका मशीनें, बैटरी, इंसुलेटर और खेती की आधुनिक मशीनें।'}
                        {language === 'mr' && 'ISI मानक सुरक्षित सोलर झटका मशीन्स, बॅटरी, इन्सुलेटर आणि शेतीची आधुनिक यंत्रे.'}
                      </p>
                    </div>
                    <span className="badge badge-green self-start sm:self-auto font-black">
                      {filteredProducts.length} {language === 'en' ? 'Products' : (language === 'hi' ? 'उत्पाद' : 'उत्पादने')}
                    </span>
                  </div>

                  {/* Search Active Notification */}
                  {searchQuery && (
                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 flex items-center justify-between text-xs text-emerald-900 shadow-sm">
                      <span className="font-semibold">
                        {language === 'en' && `🔍 Showing results for keyword: "${searchQuery}"`}
                        {language === 'hi' && `🔍 खोज परिणाम: "${searchQuery}"`}
                        {language === 'mr' && `🔍 शोध परिणाम: "${searchQuery}"`}
                        {' '}({filteredProducts.length})
                      </span>
                      <button onClick={() => setSearchQuery('')} className="text-emerald-700 hover:underline font-bold px-2 py-1 bg-white border border-emerald-300 rounded">
                        {language === 'en' && 'Clear Search'}
                        {language === 'hi' && 'खोज हटाएं'}
                        {language === 'mr' && 'शोध काढा'}
                      </button>
                    </div>
                  )}

                  {/* Product Grid */}
                  {loading && products.length === 0 ? (
                    <div className="py-20 text-center space-y-3">
                      <RefreshCw className="animate-spin text-emerald-600 mx-auto" size={32} />
                      <p className="text-sm text-gray-600 font-medium">
                        {language === 'en' && 'Loading farm machinery and Jhatka catalog...'}
                        {language === 'hi' && 'मशीन सूची लोड हो रही है...'}
                        {language === 'mr' && 'मशीन आणि किट माहिती लोड होत आहे...'}
                      </p>
                    </div>
                  ) : filteredProducts.length === 0 ? (
                    <div className="py-16 text-center space-y-4 glass-panel p-8">
                      <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-gray-400">
                        <Filter size={28} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {language === 'en' && 'No Products Found'}
                        {language === 'hi' && 'कोई मशीन नहीं मिली'}
                        {language === 'mr' && 'कोणतेही मशीन सापडले नाही'}
                      </h3>
                      <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                        {language === 'en' && 'We could not find any items matching your filter or search keyword. Please try choosing "All Items" or clearing the search.'}
                        {language === 'hi' && 'आपकी खोज के अनुसार कोई सामान नहीं मिला। कृपया "सभी सामान" चुनें या खोज हटाएं।'}
                        {language === 'mr' && 'आपल्या शोध किंवा श्रेणीनुसार कोणतेही मशीन सापडले नाही. कृपया "सर्व वस्तू आणि किट" निवडा किंवा शोध काढा.'}
                      </p>
                      <button
                        onClick={() => { setCategoryFilter('all'); setSearchQuery(''); }}
                        className="btn btn-primary px-6 py-2.5 text-xs mx-auto"
                      >
                        {language === 'en' && 'Show All Products'}
                        {language === 'hi' && 'सभी सामान दिखाएं'}
                        {language === 'mr' && 'सर्व उत्पादने दाखवा'}
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredProducts.map((product) => (
                        <ProductCard
                          key={product._id}
                          product={product}
                          cart={cart}
                          addToCart={addToCart}
                          setSelectedProduct={setSelectedProduct}
                          language={language}
                        />
                      ))}
                    </div>
                  )}

                </div>

              </div>
            </div>
          </>
        )}

        {/* Smart Fence Calculator View */}
        {currentView === 'calculator' && (
          <SmartFenceCalculator
            addToCart={addToCart}
            allProducts={products}
            language={language}
          />
        )}

        {/* Farmer Education Guide View */}
        {currentView === 'education' && (
          <FarmerEducationSection language={language} />
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
          cart={cart}
          language={language}
        />
      )}

      {/* Cart & Checkout Slide-over Modal */}
      {isCartOpen && (
        <CartAndCheckoutModal
          cart={cart}
          updateCartQty={updateCartQty}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          onClose={() => setIsCartOpen(false)}
          language={language}
        />
      )}

      {/* Footer */}
      <Footer setCurrentView={setCurrentView} language={language} />
    </div>
  );
}

export default App;
