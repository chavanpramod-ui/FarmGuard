import React from 'react';
import { Zap, ShoppingBag, Search, Globe, ShieldCheck, PhoneCall, Cpu } from 'lucide-react';

const Navbar = ({
  currentView,
  setCurrentView,
  cart,
  searchQuery,
  setSearchQuery,
  language,
  setLanguage,
  setIsCartOpen
}) => {
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* Top Info Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 px-4 py-2 border-b border-emerald-700 text-xs text-emerald-100 flex justify-between items-center max-w-full">
        <div className="flex items-center gap-4 text-center w-full justify-center">
          <span className="font-semibold text-emerald-300">
            {language === 'en' && '✓ India\'s #1 ISI Standard Solar Jhatka Fence | 100% Quality Guaranteed'}
            {language === 'hi' && '✓ भारत की नंबर #1 ISI मानक सोलर झटका मशीन | 100% क्वालिटी की गारंटी'}
            {language === 'mr' && '✓ भारताची नंबर #1 ISI मानक सोलर झटका मशीन | 100% गुणवत्तेची हमी'}
          </span>
          <span className="hidden sm:inline font-semibold text-emerald-400">•</span>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="font-semibold text-amber-300 hover:underline flex items-center gap-1">
            📞 {language === 'en' ? 'Support: +91 98765 43210' : (language === 'hi' ? 'सपोर्ट: +91 98765 43210' : 'मदत सेवा: +91 98765 43210')}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Brand Logo */}
          <div 
            onClick={() => { setCurrentView('catalog'); setSearchQuery(''); }}
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-all">
              <Zap className="text-white fill-white" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-gray-900">
                  Farm<span className="text-emerald-600">Guard</span>
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  JHATKA
                </span>
              </div>
              <p className="text-[10px] text-gray-500 font-medium hidden sm:block">
                {language === 'en' && 'India\'s Smart Farm Protection'}
                {language === 'hi' && 'भारत की स्मार्ट खेत सुरक्षा'}
                {language === 'mr' && 'भारताचे स्मार्ट शेती संरक्षण'}
              </p>
            </div>
          </div>

          {/* Search Bar - Central */}
          <div className="flex-1 max-w-md relative mx-2 order-3 sm:order-2 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'en' ? "Search Jhatka machines, solar kits, brush cutters..." :
                  language === 'hi' ? "झटका मशीन, सोलर किट, ब्रश कटर खोजें..." :
                  "झटका मशीन, सोलर किट, ब्रश कटर शोधा..."
                }
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
          </div>

          {/* Action Buttons & Language Selector */}
          <div className="flex items-center gap-2.5 order-2 sm:order-3 flex-shrink-0">
            {/* 3-Way Language Toggle Buttons */}
            <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200 text-xs font-bold">
              {[
                { id: 'en', label: 'English' },
                { id: 'hi', label: 'हिंदी' },
                { id: 'mr', label: 'मराठी' }
              ].map(lang => (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id)}
                  className={`px-2.5 py-1.5 rounded-lg transition-all ${
                    language === lang.id
                      ? 'bg-emerald-600 text-white shadow-sm font-black'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-all active:scale-95 cursor-pointer"
            >
              <ShoppingBag size={18} className="fill-white" />
              <span className="hidden md:inline">
                {language === 'en' && 'Cart'}
                {language === 'hi' && 'गाड़ी'}
                {language === 'mr' && 'कार्ट'}
              </span>
              {totalCartItems > 0 && (
                <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full bg-red-500 text-white font-black text-xs border border-white/20 animate-pulse">
                  {totalCartItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation Links */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto text-xs sm:text-sm font-bold">
          <button
            onClick={() => { setCurrentView('catalog'); setSearchQuery(''); }}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              currentView === 'catalog' 
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm' 
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
            }`}
          >
            <Zap size={15} className="text-emerald-600" />
            {language === 'en' && 'Machines & Kits'}
            {language === 'hi' && 'मशीनें व किट'}
            {language === 'mr' && 'मशीन्स आणि किट'}
          </button>

          <button
            onClick={() => { setCurrentView('calculator'); }}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              currentView === 'calculator' 
                ? 'bg-amber-100 text-amber-800 border border-amber-300 shadow-sm' 
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
            }`}
          >
            <Cpu size={15} className="text-amber-600" />
            {language === 'en' && '🎯 Smart Cost Calculator'}
            {language === 'hi' && '🎯 स्मार्ट खर्च कैलकुलेटर'}
            {language === 'mr' && '🎯 स्मार्ट कुंपण खर्च कॅल्क्युलेटर'}
          </button>

          <button
            onClick={() => { setCurrentView('education'); }}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              currentView === 'education' 
                ? 'bg-blue-100 text-blue-800 border border-blue-300 shadow-sm' 
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
            }`}
          >
            <ShieldCheck size={15} className="text-blue-600" />
            {language === 'en' && 'Earthing & Safety Guide'}
            {language === 'hi' && 'सुरक्षा व अर्थिंग गाइड'}
            {language === 'mr' && 'सुरक्षा आणि अर्थिंग मार्गदर्शक'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
