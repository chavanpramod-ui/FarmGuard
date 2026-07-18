import React from 'react';
import { Zap, Phone, MessageCircle, Shield, Heart, MapPin, Mail } from 'lucide-react';

const Footer = ({ setCurrentView, language }) => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-200">
        
        {/* Col 1: Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
              <Zap size={22} className="fill-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-gray-900">
              Farm<span className="text-emerald-600">Guard</span>
            </span>
          </div>
          <p className="leading-relaxed text-gray-600 font-medium">
            {language === 'en' && 'India’s trusted direct-to-farmer agricultural technology portal. Empowering farmers with ISI-compliant non-lethal solar Jhatka fence systems, brush cutters, and smart solar pump controllers.'}
            {language === 'hi' && 'भारत का भरोसेमंद सीधे किसानों का कृषि तकनीकी पोर्टल। ISI मानक सुरक्षित सोलर झटका फेंसिंग मशीन, ब्रश कटर और स्मार्ट सोलर पंप कंट्रोलर के साथ किसानों की सेवा में।'}
            {language === 'mr' && 'भारतातील शेतकऱ्यांचे विश्वासार्ह थेट कृषी तंत्रज्ञान पोर्टल. ISI मानक अघातक सोलर झटका कुंपण मशीन, ब्रश कटर आणि स्मार्ट सोलर पंप कंट्रोलरद्वारे शेतकऱ्यांना सक्षम करत आहोत.'}
          </p>
          <div className="flex items-center gap-2 text-amber-600 font-bold pt-1">
            <Shield size={16} />
            <span>
              {language === 'en' && '100% Quality & Replacement Guarantee'}
              {language === 'hi' && '100% क्वालिटी व रिप्लेसमेंट गारंटी'}
              {language === 'mr' && '100% गुणवत्ता आणि रिप्लेसमेंट हमी'}
            </span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider">
            {language === 'en' && 'Quick Links'}
            {language === 'hi' && 'महत्वपूर्ण लिंक'}
            {language === 'mr' && 'महत्त्वाच्या लिंक्स'}
          </h4>
          <ul className="space-y-2.5 font-semibold text-gray-700">
            <li>
              <button onClick={() => setCurrentView('catalog')} className="hover:text-emerald-600 transition-colors inline-flex gap-2 cursor-pointer">
                ⚡ {language === 'en' ? 'All Jhatka Machines' : (language === 'hi' ? 'सभी झटका मशीनें' : 'सर्व झटका मशीन्स')}
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentView('calculator')} className="hover:text-amber-600 transition-colors inline-flex gap-2 cursor-pointer">
                🎯 {language === 'en' ? 'Smart Cost Calculator' : (language === 'hi' ? 'खर्च कैलकुलेटर' : 'कुंपण खर्च कॅल्क्युलेटर')}
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentView('education')} className="hover:text-blue-600 transition-colors inline-flex gap-2 cursor-pointer">
                🛡️ {language === 'en' ? 'Safety & Earthing Guide' : (language === 'hi' ? 'सुरक्षा व अर्थिंग गाइड' : 'सुरक्षितता आणि मार्गदर्शक')}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Customer Helpline & Contact */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider">
            {language === 'en' && 'Farmer Help Desk'}
            {language === 'hi' && 'किसान सहायता केंद्र'}
            {language === 'mr' && 'शेतकरी मदत व सेवा केंद्र'}
          </h4>
          <div className="space-y-2.5 font-medium">
            <p className="flex items-center gap-2 text-gray-900 font-bold font-mono">
              <Phone size={16} className="text-emerald-600" />
              <span>+91 98765 43210</span>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle size={16} className="text-emerald-600" />
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:underline text-emerald-600 font-bold">
                {language === 'en' && 'Chat on WhatsApp (24/7 Support)'}
                {language === 'hi' && 'व्हाट्सएप पर बात करें (24/7)'}
                {language === 'mr' && 'व्हॉट्सॲपवर बोला (24/7 सेवा)'}
              </a>
            </p>
            <p className="flex items-start gap-2 text-xs leading-relaxed text-gray-600">
              <MapPin size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                {language === 'en' && 'FarmGuard AgriTech Works, Krishi Upaj Mandi Road, Sehore, MP 466001'}
                {language === 'hi' && 'फार्मगार्ड एग्रीटेक वर्क्स, कृषि उपज मंडी रोड, सीहोर, मध्य प्रदेश 466001'}
                {language === 'mr' && 'फार्मगार्ड ॲग्रीटेक वर्क्स, कृषी उपज मंडी रोड, सीहोर, मध्य प्रदेश 466001'}
              </span>
            </p>
          </div>
        </div>

        {/* Col 4: Delivery & Warranty Notice */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider">
            {language === 'en' && 'Delivery & Service'}
            {language === 'hi' && 'डिलीवरी और वारंटी'}
            {language === 'mr' && 'डिलिव्हरी आणि सेवा'}
          </h4>
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-2">
            <p className="font-bold text-gray-900 text-xs flex items-center gap-1.5">
              📦 {language === 'en' && 'Pan India Delivery & COD Available'}
              {language === 'hi' && 'पूरे भारत में घरपोच डिलीवरी (COD)'}
              {language === 'mr' && 'संपूर्ण भारतात घरपोच डिलिव्हरी व COD'}
            </p>
            <p className="text-[11px] text-amber-600 font-extrabold">
              ⚡ {language === 'en' && 'Free shipping on orders above ₹5000'}
              {language === 'hi' && '₹5000 से ऊपर के ऑर्डर पर फ्री डिलीवरी'}
              {language === 'mr' && '₹5000 वरील ऑर्डरवर मोफत डिलिव्हरी'}
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
        <p>© {new Date().getFullYear()} FarmGuard AgriTech. All rights reserved.</p>
        <p className="flex items-center gap-1 text-gray-500">
          Built with <Heart size={13} className="text-red-500 fill-red-500 animate-pulse" /> for Indian Farmers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
