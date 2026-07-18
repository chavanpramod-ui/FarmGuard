import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle2, MessageCircle, Phone, Truck, ShieldCheck, CreditCard } from 'lucide-react';

const CartAndCheckoutModal = ({
  cart,
  updateCartQty,
  removeFromCart,
  clearCart,
  onClose,
  language
}) => {
  const [step, setStep] = useState('cart'); // 'cart', 'checkout', 'success'
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    villageTown: '',
    districtState: '',
    pinCode: '',
    paymentMethod: 'COD',
    notes: ''
  });
  const [orderResponse, setOrderResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phone || !formData.villageTown || !formData.districtState) {
      alert(
        language === 'en' ? "Please fill in all required delivery details." :
        language === 'hi' ? "कृपया सभी आवश्यक डिलीवरी जानकारी भरें।" :
        "कृपया डिलिव्हरीसाठी सर्व आवश्यक माहिती भरा."
      );
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...formData,
        items: cart.map(item => ({
          product: item._id,
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image
        })),
        totalAmount
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        setOrderResponse(data);
        clearCart();
        setStep('success');
      } else {
        alert(data.error || "Order submission failed. Please try again.");
      }
    } catch (err) {
      const itemsList = cart.map(i => `${i.quantity}x ${i.name} (₹${i.price})`).join('\n');
      const whatsappText = `Namaste FarmGuard! I want to confirm my order:\n\n*Name:* ${formData.customerName}\n*Phone:* ${formData.phone}\n*Village:* ${formData.villageTown}, ${formData.districtState}\n*Payment:* ${formData.paymentMethod}\n\n*Items Ordered:*\n${itemsList}\n\n*Total:* ₹${totalAmount.toLocaleString('en-IN')}`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(whatsappText)}`, '_blank');
      onClose();
    } finally {
      setLoading(false);
    }
  };

  const handleDirectWhatsAppOrder = () => {
    if (cart.length === 0) return;
    const itemsList = cart.map(i => `${i.quantity}x ${i.name} (₹${i.price})`).join('\n');
    const whatsappText = `Namaste FarmGuard! I want to order from your website:\n\n*Items in Cart:*\n${itemsList}\n\n*Total Amount:* ₹${totalAmount.toLocaleString('en-IN')}\n\nPlease guide me with delivery details.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(whatsappText)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content max-w-2xl w-full bg-white border border-gray-300 p-6 rounded-3xl relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <ShoppingBag className="text-emerald-600" size={22} />
            {step === 'cart' && (language === 'en' ? 'Your Shopping Cart' : (language === 'hi' ? 'आपकी गाड़ी' : 'तुमचे कार्ट'))}
            {step === 'checkout' && (language === 'en' ? 'Delivery Address & Details' : (language === 'hi' ? 'डिलीवरी पता व जानकारी' : 'डिलिव्हरी पत्ता व माहिती'))}
            {step === 'success' && (language === 'en' ? 'Order Confirmed!' : (language === 'hi' ? 'ऑर्डर दर्ज हो गया!' : 'ऑर्डर कन्फर्म झाली!'))}
          </h3>
          <button onClick={onClose} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        {/* STEP 1: CART VIEW */}
        {step === 'cart' && (
          <div className="py-4 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto flex items-center justify-center text-gray-400">
                  <ShoppingBag size={30} />
                </div>
                <p className="text-gray-700 font-bold">
                  {language === 'en' && 'Your shopping cart is empty.'}
                  {language === 'hi' && 'आपकी गाड़ी खाली है। कोई मशीन चुनें।'}
                  {language === 'mr' && 'तुमचे कार्ट रिकामे आहे. कृपया उत्पादने निवडा.'}
                </p>
                <button onClick={onClose} className="btn btn-primary px-6 py-2.5 text-sm font-bold cursor-pointer">
                  {language === 'en' && 'Browse Products'}
                  {language === 'hi' && 'सामान देखें'}
                  {language === 'mr' && 'उत्पादने पहा'}
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item._id} className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-200 gap-3">
                      <img
                        src={item.image || "/images/jhatka-10kv.jpg"}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover border border-gray-300"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-900 truncate">
                          {language === 'en' && item.name}
                          {language === 'hi' && (item.nameHindi || item.name)}
                          {language === 'mr' && (item.nameMarathi || item.nameHindi || item.name)}
                        </h4>
                        <p className="text-xs text-emerald-600 font-extrabold mt-0.5 font-mono">₹{item.price?.toLocaleString('en-IN')}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateCartQty(item._id, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-800 cursor-pointer"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center font-bold text-sm text-gray-900 font-mono">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQty(item._id, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-800 cursor-pointer"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="p-1.5 text-red-600 hover:text-red-700 ml-2 cursor-pointer"
                          title="Remove"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total & Checkout buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <div className="flex justify-between items-center text-base sm:text-lg font-black text-gray-900">
                    <span>
                      {language === 'en' && 'Total Amount:'}
                      {language === 'hi' && 'कुल राशि:'}
                      {language === 'mr' && 'एकूण रक्कम:'}
                    </span>
                    <span className="text-emerald-600 text-2xl font-mono">₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setStep('checkout')}
                      className="btn btn-primary py-3.5 text-base font-bold shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Truck size={18} className="fill-white" />
                      {language === 'en' && 'Proceed to Checkout'}
                      {language === 'hi' && 'खरीदें (चेकआउट)'}
                      {language === 'mr' && 'चेकआऊट (ऑर्डर करा)'}
                    </button>

                    <button
                      onClick={handleDirectWhatsAppOrder}
                      className="btn btn-whatsapp py-3.5 text-base font-bold shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      {language === 'en' && 'WhatsApp Order'}
                      {language === 'hi' && 'व्हाट्सएप से मंगाएं'}
                      {language === 'mr' && 'व्हॉट्सॲपवरून ऑर्डर करा'}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* STEP 2: CHECKOUT FORM */}
        {step === 'checkout' && (
          <form onSubmit={handleCheckoutSubmit} className="py-4 space-y-4 max-h-[75vh] overflow-y-auto pr-1">
            <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-300 text-xs text-emerald-800 flex items-center gap-2 font-semibold">
              <ShieldCheck size={18} className="flex-shrink-0 text-emerald-600" />
              <span>
                {language === 'en' && 'Fast dispatch directly to your village via courier or transport.'}
                {language === 'hi' && 'आपके गांव या नजदीकी शहर तक सुरक्षित और तेज डिलीवरी।'}
                {language === 'mr' && 'तुमच्या गावापर्यंत किंवा जवळच्या शहरापर्यंत सुरक्षित आणि जलद डिलिव्हरी.'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  {language === 'en' && 'Farmer / Customer Name *'}
                  {language === 'hi' && 'किसान / ग्राहक का नाम *'}
                  {language === 'mr' && 'शेतकरी / ग्राहकाचे नाव *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={e => setFormData({...formData, customerName: e.target.value})}
                  placeholder={language === 'en' ? "e.g. Mukesh Patel" : (language === 'hi' ? "जैसे मुकेश पटेल" : "उदा. तुकाराम पाटील")}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  {language === 'en' && 'Mobile / WhatsApp Number *'}
                  {language === 'hi' && 'मोबाइल / व्हाट्सएप नंबर *'}
                  {language === 'mr' && 'मोबाईल / व्हॉट्सॲप नंबर *'}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="9876543210"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  {language === 'en' && 'Village / Tehsil / Post Office *'}
                  {language === 'hi' && 'गांव / तहसील / पोस्ट ऑफिस *'}
                  {language === 'mr' && 'गाव / तालुका / पोस्ट ऑफिस *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.villageTown}
                  onChange={e => setFormData({...formData, villageTown: e.target.value})}
                  placeholder={language === 'en' ? "e.g. Village Pipariya, Tehsil Ashta" : (language === 'hi' ? "जैसे ग्राम पिपरिया, तहसील आष्टा" : "उदा. मु.पो. शिरपूर, ता. सिन्नर")}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  {language === 'en' && 'District & State *'}
                  {language === 'hi' && 'जिला और राज्य *'}
                  {language === 'mr' && 'जिल्हा आणि राज्य *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.districtState}
                  onChange={e => setFormData({...formData, districtState: e.target.value})}
                  placeholder={language === 'en' ? "e.g. Sehore, Madhya Pradesh" : (language === 'hi' ? "जैसे सीहोर, मध्य प्रदेश" : "उदा. नाशिक, महाराष्ट्र")}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  {language === 'en' && 'Pin Code (Optional)'}
                  {language === 'hi' && 'पिन कोड (यदि ज्ञात हो)'}
                  {language === 'mr' && 'पिन कोड (ऐच्छिक)'}
                </label>
                <input
                  type="text"
                  value={formData.pinCode}
                  onChange={e => setFormData({...formData, pinCode: e.target.value})}
                  placeholder="422103"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600 font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  {language === 'en' && 'Select Payment Mode'}
                  {language === 'hi' && 'भुगतान का तरीका चुनें'}
                  {language === 'mr' && 'पेमेंटचा पर्याय निवडा'}
                </label>
                <select
                  value={formData.paymentMethod}
                  onChange={e => setFormData({...formData, paymentMethod: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-emerald-600 font-semibold"
                >
                  <option value="COD">💰 Cash on Delivery (COD)</option>
                  <option value="UPI_ONLINE">⚡ Online UPI / PhonePe / GPay</option>
                  <option value="WHATSAPP_DIRECT">💬 WhatsApp Direct Booking</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">
                {language === 'en' && 'Special Delivery Notes (Optional)'}
                {language === 'hi' && 'विशेष निर्देश (यदि कोई हो)'}
                {language === 'mr' && 'डिलिव्हरीसाठी विशेष सूचना (ऐच्छिक)'}
              </label>
              <textarea
                rows="2"
                value={formData.notes}
                onChange={e => setFormData({...formData, notes: e.target.value})}
                placeholder={language === 'en' ? "e.g. Call before delivery..." : (language === 'hi' ? "डिलीवरी से पहले कॉल करें..." : "उदा. येण्यापूर्वी फोन करा...")}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
              ></textarea>
            </div>

            <div className="flex gap-3 pt-3">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 py-3.5 px-5 flex-1 font-bold cursor-pointer rounded-xl"
              >
                {language === 'en' && 'Back to Cart'}
                {language === 'hi' && 'पीछे जाएं'}
                {language === 'mr' && 'मागे जा'}
              </button>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary py-3.5 px-6 flex-[2] font-bold shadow-md cursor-pointer"
              >
                {loading ? 'Submitting...' : (
                  language === 'en' ? `Place Order (₹${totalAmount.toLocaleString('en-IN')})` :
                  language === 'hi' ? `ऑर्डर कन्फर्म करें (₹${totalAmount.toLocaleString('en-IN')})` :
                  `ऑर्डर नोंदवा (₹${totalAmount.toLocaleString('en-IN')})`
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: SUCCESS RECEIPT */}
        {step === 'success' && orderResponse && (
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-300">
              <CheckCircle2 size={36} className="animate-bounce" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-gray-900">
                {language === 'en' && 'Thank You! Order Confirmed'}
                {language === 'hi' && 'धन्यवाद! आपका ऑर्डर दर्ज हो चुका है'}
                {language === 'mr' && 'धन्यवाद! तुमची ऑर्डर यशस्वीरीत्या नोंदवली गेली आहे'}
              </h3>
              <p className="text-sm font-mono text-emerald-600 font-bold">
                {language === 'en' && `Order Number: ${orderResponse.orderId || 'CONFIRMED'}`}
                {language === 'hi' && `ऑर्डर नंबर: ${orderResponse.orderId || 'CONFIRMED'}`}
                {language === 'mr' && `ऑर्डर क्रमांक: ${orderResponse.orderId || 'CONFIRMED'}`}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-left text-xs text-gray-700 space-y-2 max-w-md mx-auto">
              <p className="font-bold text-gray-900 border-b border-gray-200 pb-2">
                {language === 'en' && 'Delivery Address Summary:'}
                {language === 'hi' && 'डिलीवरी विवरण:'}
                {language === 'mr' && 'डिलिव्हरी पत्त्याचा गोषवारा:'}
              </p>
              <div className="flex justify-between">
                <span>Customer Name:</span>
                <span className="font-semibold text-gray-900">{formData.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span>Mobile Number:</span>
                <span className="font-semibold text-gray-900 font-mono">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span>Village / District:</span>
                <span className="font-semibold text-gray-900">{formData.villageTown}, {formData.districtState}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Mode:</span>
                <span className="font-semibold text-amber-600">{formData.paymentMethod}</span>
              </div>
            </div>

            <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
              {language === 'en' && 'Our customer support team will call you shortly from +91 98765 43210 to confirm dispatch and share the tracking details.'}
              {language === 'hi' && 'हमारी सपोर्ट टीम जल्द ही +91 98765 43210 से आपको कॉल करके पार्सल डिस्पैच की जानकारी देगी।'}
              {language === 'mr' && 'आमची सपोर्ट टीम लवकरच +91 98765 43210 वरून तुम्हाला कॉल करून पार्सल पाठवल्याची आणि ट्रॅकिंगची माहिती देईल.'}
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={onClose}
                className="btn btn-primary px-6 py-2.5 text-sm font-bold cursor-pointer"
              >
                {language === 'en' && 'Continue Shopping'}
                {language === 'hi' && 'और सामान देखें'}
                {language === 'mr' && 'आणखी खरेदी करा'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartAndCheckoutModal;
