import React from 'react';
import { Zap, Shield, CheckCircle, ShoppingCart, MessageCircle, Eye, Star, BatteryCharging, Maximize2, AlertCircle, XCircle, Truck } from 'lucide-react';

const ProductCard = ({
  product,
  cart,
  addToCart,
  setSelectedProduct,
  language
}) => {
  const {
    _id,
    name,
    nameHindi,
    nameMarathi,
    category,
    tagline,
    taglineHindi,
    taglineMarathi,
    price,
    originalPrice,
    specifications,
    image,
    rating,
    reviewsCount,
    isFeatured,
    inStock = true
  } = product;

  // Check how many of this item are currently in cart
  const cartItem = cart.find(item => item.product === _id || item.productId === _id);
  const qtyInCart = cartItem ? cartItem.quantity : 0;

  const discountPercent = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleWhatsAppOrder = () => {
    const title = language === 'en' ? name : (language === 'hi' ? (nameHindi || name) : (nameMarathi || name));
    const msg = `Namaste FarmGuard! I want to order immediately via WhatsApp:\n\n*Product:* ${title}\n*Price:* ₹${price?.toLocaleString('en-IN')}\n*Category:* ${category}\n\nPlease share COD / online payment details and dispatch estimate.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="glass-panel overflow-hidden flex flex-col justify-between group relative border border-gray-200 hover:border-emerald-400 transition-all duration-300 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1">
      
      {/* Top Badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-center pointer-events-none">
        {isFeatured && (
          <span className="badge badge-green shadow-sm bg-white/95 backdrop-blur-md">
            <Zap size={11} className="fill-emerald-600 text-emerald-600" />
            {language === 'en' && 'Top Seller'}
            {language === 'hi' && 'टॉप सेलर'}
            {language === 'mr' && 'बेस्टसेलर मशीन'}
          </span>
        )}
        {discountPercent > 0 && (
          <span className="badge badge-gold shadow-sm bg-white/95 backdrop-blur-md ml-auto">
            -{discountPercent}% {language === 'en' ? 'OFF' : 'छूट'}
          </span>
        )}
      </div>

      {/* Product Image Box */}
      <div 
        onClick={() => setSelectedProduct(product)}
        className="relative h-48 bg-gray-100 overflow-hidden cursor-pointer flex items-center justify-center border-b border-gray-200"
      >
        <img
          src={image || "/images/jhatka-10kv.jpg"}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "/images/jhatka-10kv.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60"></div>
        
        {/* Quick View Button overlay */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-gray-300 text-xs font-bold text-gray-900 shadow-md">
            <Eye size={13} className="text-emerald-600" />
            {language === 'en' && 'Quick View'}
            {language === 'hi' && 'विवरण देखें'}
            {language === 'mr' && 'माहिती पहा'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Rating & Category */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span className="uppercase font-extrabold tracking-wider text-emerald-600">
              {category === 'jhatka_machine' ? '⚡ Jhatka Machine' :
               category === 'agri_machinery' ? '🚜 Farm Machinery' :
               category === 'solar_accessories' ? '☀️ Solar Kit' : '🔗 Accessories'}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star size={13} className="fill-amber-500" />
              <span>{rating}</span>
              <span className="text-gray-400 font-normal">({reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => setSelectedProduct(product)}
            className="text-base font-extrabold text-gray-900 leading-snug hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2"
          >
            {language === 'en' && name}
            {language === 'hi' && (nameHindi || name)}
            {language === 'mr' && (nameMarathi || name)}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-gray-600 mt-1.5 line-clamp-2 leading-relaxed font-medium">
            {language === 'en' && tagline}
            {language === 'hi' && (taglineHindi || tagline)}
            {language === 'mr' && (taglineMarathi || tagline)}
          </p>

          {/* Quick Technical Specs Highlights */}
          {specifications && (
            <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-gray-200 text-[11px] text-gray-700 font-medium">
              {specifications.coverageArea && (
                <div className="flex items-center gap-1.5 bg-gray-50 p-2 rounded-xl border border-gray-200">
                  <Maximize2 size={12} className="text-amber-600 flex-shrink-0" />
                  <span className="truncate">{specifications.coverageArea}</span>
                </div>
              )}
              {specifications.voltageOutput && (
                <div className="flex items-center gap-1.5 bg-gray-50 p-2 rounded-xl border border-gray-200">
                  <Zap size={12} className="text-emerald-600 flex-shrink-0" />
                  <span className="truncate">{specifications.voltageOutput}</span>
                </div>
              )}
              {specifications.batteryBackup && (
                <div className="col-span-2 flex items-center gap-1.5 bg-gray-50 p-2 rounded-xl border border-gray-200">
                  <BatteryCharging size={12} className="text-blue-600 flex-shrink-0" />
                  <span className="truncate">{specifications.batteryBackup}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Price & Action Section */}
        <div className="pt-3 border-t border-gray-200 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-gray-500 uppercase font-bold block">
                {language === 'en' && 'Direct Factory Price'}
                {language === 'hi' && 'सीधी कीमत:'}
                {language === 'mr' && 'थेट फॅक्टरी किंमत:'}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black text-emerald-600">
                  ₹{price?.toLocaleString('en-IN')}
                </span>
                {originalPrice && (
                  <span className="text-xs font-semibold text-gray-400 line-through">
                    ₹{originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>
            {specifications?.warranty && (
              <span className="badge badge-gold text-[10px]">
                <Shield size={12} /> {language === 'en' ? 'Warranty' : (language === 'hi' ? 'वारंटी' : 'वॉरंटी')}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center justify-between text-xs font-bold pt-1">
            {inStock ? (
              <span className="text-emerald-700 flex items-center gap-1">
                <CheckCircle size={13} className="text-emerald-600" />
                {language === 'en' && 'In Stock'}
                {language === 'hi' && 'स्टॉक में उपलब्ध'}
                {language === 'mr' && 'स्टॉकमध्ये उपलब्ध'}
              </span>
            ) : (
              <span className="text-red-600 flex items-center gap-1">
                <XCircle size={13} />
                {language === 'en' && 'Out of Stock'}
                {language === 'hi' && 'स्टॉक ख़त्म'}
                {language === 'mr' && 'स्टॉक संपला'}
              </span>
            )}
            <span className="text-gray-500 flex items-center gap-1 text-[11px]">
              <Truck size={13} className="text-emerald-600" />
              {language === 'en' && 'Dispatch: 24 hrs'}
              {language === 'hi' && 'डिस्पैच: 24 घंटे'}
              {language === 'mr' && 'डिस्पॅच: 24 तासांत'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-1">
            <button
              onClick={() => addToCart(product)}
              disabled={!inStock}
              className="btn btn-primary flex-1 py-2.5 px-3 text-xs font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <ShoppingCart size={15} className="fill-white" />
              {qtyInCart > 0 
                ? (language === 'en' ? `In Cart (${qtyInCart})` : (language === 'hi' ? `गाड़ी में (${qtyInCart})` : `कार्टमध्ये (${qtyInCart})`))
                : (language === 'en' ? 'Add to Cart' : (language === 'hi' ? 'कार्ट में जोड़ें' : 'कार्टमध्ये जोडा'))}
            </button>

            <button
              onClick={handleWhatsAppOrder}
              className="btn btn-whatsapp flex-1 py-2.5 px-3 text-xs font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
              title={language === 'en' ? 'Order on WhatsApp' : 'व्हाट्सएप पर आर्डर करें'}
            >
              <MessageCircle size={15} />
              {language === 'en' && 'WhatsApp'}
              {language === 'hi' && 'व्हाट्सएप'}
              {language === 'mr' && 'व्हॉट्सॲप'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
