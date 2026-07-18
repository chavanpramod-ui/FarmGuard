import React from 'react';
import { X, Zap, Shield, CheckCircle2, ShoppingCart, MessageCircle, Star, Package, Check, AlertTriangle, Cpu } from 'lucide-react';

const ProductDetailModal = ({
  product,
  onClose,
  addToCart,
  cart,
  language
}) => {
  if (!product) return null;

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
    features,
    featuresHindi,
    featuresMarathi,
    packageContents,
    recommendedFor,
    inStock = true
  } = product;

  const cartItem = cart.find(item => item.product === _id || item.productId === _id);
  const qtyInCart = cartItem ? cartItem.quantity : 0;

  const discountPercent = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleWhatsAppOrder = () => {
    const title = language === 'en' ? name : (language === 'hi' ? (nameHindi || name) : (nameMarathi || name));
    const msg = `Namaste FarmGuard! I want to order and consult regarding:\n\n*Product:* ${title}\n*Price:* ₹${price?.toLocaleString('en-IN')}\n\nPlease share payment modes and dispatch timeline to my village.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content max-w-4xl w-full bg-white border border-gray-300 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all z-20 shadow-sm cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Image & Target Animals */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 aspect-square flex items-center justify-center">
              <img
                src={image || "/images/jhatka-10kv.jpg"}
                alt={name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.src = "/images/jhatka-10kv.jpg";
                }}
              />
              {discountPercent > 0 && (
                <span className="absolute top-3 left-3 badge badge-gold bg-white/95 backdrop-blur-md font-black">
                  -{discountPercent}% {language === 'en' ? 'OFF' : 'छूट'}
                </span>
              )}
            </div>

            {/* Recommended For Animals Badge Box */}
            {recommendedFor && recommendedFor.length > 0 && (
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-2.5">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle size={15} className="text-amber-600" />
                  {language === 'en' && 'Protects Crops From:'}
                  {language === 'hi' && 'इन जानवरों से सुरक्षा:'}
                  {language === 'mr' && 'खालील प्राण्यांपासून संरक्षण:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {recommendedFor.map((animal, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-amber-100 border border-amber-300 text-xs font-bold text-amber-900">
                      🛡️ {animal}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Complete Specs, Features & Price */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-green font-extrabold">
                  {category === 'jhatka_machine' ? '⚡ Jhatka System' : '🚜 Farm Equipment'}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  <Star size={15} className="fill-amber-500" />
                  <span>{rating}</span>
                  <span className="text-gray-400 font-normal">({reviewsCount})</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                {language === 'en' && name}
                {language === 'hi' && (nameHindi || name)}
                {language === 'mr' && (nameMarathi || name)}
              </h2>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed font-medium">
                {language === 'en' && tagline}
                {language === 'hi' && (taglineHindi || tagline)}
                {language === 'mr' && (taglineMarathi || tagline)}
              </p>
            </div>

            {/* Price Banner & CTAs */}
            <div className="bg-gradient-to-br from-emerald-50 via-gray-50 to-emerald-100/50 p-5 rounded-2xl border border-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="text-xs text-gray-600 font-bold uppercase">
                  {language === 'en' && 'Factory Direct Price:'}
                  {language === 'hi' && 'सीधी कीमत:'}
                  {language === 'mr' && 'थेट फॅक्टरी किंमत:'}
                </span>
                <div className="flex items-baseline gap-2.5 mt-1">
                  <span className="text-3xl font-black text-emerald-600 tracking-tight">
                    ₹{price?.toLocaleString('en-IN')}
                  </span>
                  {originalPrice && (
                    <span className="text-base font-semibold text-gray-400 line-through">
                      ₹{originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                {specifications?.warranty && (
                  <p className="text-xs text-amber-700 font-bold flex items-center gap-1.5 mt-1.5">
                    <Shield size={14} /> {specifications.warranty}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => addToCart(product)}
                  disabled={!inStock}
                  className="btn btn-primary py-3.5 px-6 text-sm font-bold shadow-md cursor-pointer"
                >
                  <ShoppingCart size={18} className="fill-white" />
                  {qtyInCart > 0 
                    ? (language === 'en' ? `In Cart (${qtyInCart}) +` : (language === 'hi' ? `गाड़ी में (${qtyInCart}) +` : `कार्टमध्ये (${qtyInCart}) +`))
                    : (language === 'en' ? 'Add to Cart' : (language === 'hi' ? 'कार्ट में जोड़ें' : 'कार्टमध्ये जोडा'))}
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="btn btn-whatsapp py-3.5 px-6 text-sm font-bold shadow-md cursor-pointer"
                >
                  <MessageCircle size={18} />
                  {language === 'en' && 'WhatsApp Order'}
                  {language === 'hi' && 'व्हाट्सएप से मंगाएं'}
                  {language === 'mr' && 'व्हॉट्सॲपवरून मागवा'}
                </button>
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            {specifications && (
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                  <Cpu size={16} className="text-emerald-600" />
                  {language === 'en' && 'Technical Specifications'}
                  {language === 'hi' && 'तकनीकी विवरण'}
                  {language === 'mr' && 'तांत्रिक माहिती व तपशील'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs">
                  {Object.entries(specifications).map(([key, val]) => (
                    <div key={key} className="flex flex-col justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                      <span className="text-gray-500 capitalize font-medium">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-gray-900 font-bold mt-1">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            {((features && features.length > 0) || (featuresHindi && featuresHindi.length > 0) || (featuresMarathi && featuresMarathi.length > 0)) && (
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                  <Zap size={16} className="text-amber-600" />
                  {language === 'en' && 'Key Features & Benefits'}
                  {language === 'hi' && 'मुख्य विशेषताएं'}
                  {language === 'mr' && 'मुख्य वैशिष्ट्ये आणि फायदे'}
                </h4>
                <div className="space-y-2 text-xs text-gray-700">
                  {(
                    language === 'en' ? features : 
                    language === 'hi' ? (featuresHindi || features) : 
                    (featuresMarathi || features)
                  )?.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Package Box Contents */}
            {packageContents && packageContents.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                  <Package size={16} className="text-blue-600" />
                  {language === 'en' && 'Inside the Box (Package Contents)'}
                  {language === 'hi' && 'बॉक्स में क्या मिलेगा:'}
                  {language === 'mr' && 'बॉक्समध्ये काय मिळेल:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  {packageContents.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-gray-50 px-3 py-2.5 rounded-xl border border-gray-200 font-semibold">
                      <Check className="text-emerald-600" size={15} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
