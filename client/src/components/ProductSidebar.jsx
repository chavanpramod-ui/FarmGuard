import React from 'react';
import { Zap, Filter, RotateCcw } from 'lucide-react';

const ProductSidebar = ({ 
  categoryFilter, 
  setCategoryFilter, 
  searchQuery, 
  setSearchQuery,
  language 
}) => {
  const categories = [
    { id: 'all', label: 'All Items', labelHi: 'सभी सामान', labelMr: 'सर्व वस्तू आणि किट', icon: '⭐' },
    { id: 'jhatka_machine', label: 'Jhatka Machines', labelHi: 'झटका मशीनें', labelMr: 'झटका मशीन्स', icon: '⚡' },
    { id: 'agri_machinery', label: 'Farm Machinery', labelHi: 'खेती के यंत्र', labelMr: 'शेतीची यंत्रे', icon: '🚜' },
    { id: 'solar_accessories', label: 'Solar Packs', labelHi: 'सोलर पैक', labelMr: 'सोलर पॅक्स आणि बॅटरी', icon: '☀️' },
    { id: 'insulators_wires', label: 'Insulators & Wire', labelHi: 'इंसुलेटर व तार', labelMr: 'इन्सुलेटर आणि वायर', icon: '🔗' }
  ];

  const resetFilters = () => {
    setCategoryFilter('all');
    setSearchQuery('');
  };

  return (
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0">
      <div className="glass-panel p-6 sticky top-24 space-y-6 bg-white border border-gray-200 shadow-sm">
        
        {/* Sidebar Header */}
        <div className="space-y-2 pb-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Filter className="text-emerald-600" size={20} />
            <h3 className="text-lg font-black text-gray-900">
              {language === 'en' && 'Categories'}
              {language === 'hi' && 'उत्पाद श्रेणियाँ'}
              {language === 'mr' && 'उत्पादन श्रेण्या'}
            </h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            {language === 'en' && 'Filter products by category to find exactly what your farm needs.'}
            {language === 'hi' && 'अपनी जरूरत के अनुसार सही मशीन या किट चुनने के लिए श्रेणी चुनें।'}
            {language === 'mr' && 'आपल्या शेताच्या गरजेनुसार अचूक मशीन किंवा किट निवडण्यासाठी श्रेणी निवडा.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`w-full px-4 py-3 rounded-xl text-xs font-bold transition-all text-left flex items-center gap-3 cursor-pointer ${
                categoryFilter === cat.id
                  ? 'bg-emerald-600 text-white shadow-md font-black'
                  : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700'
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span className="truncate">
                {language === 'en' && cat.label}
                {language === 'hi' && cat.labelHi}
                {language === 'mr' && cat.labelMr}
              </span>
            </button>
          ))}
        </div>

        {/* Active Filter Badge */}
        {categoryFilter !== 'all' && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 font-semibold space-y-1">
            <p>
              {language === 'en' && `📌 Active Filter: ${categories.find(c => c.id === categoryFilter)?.label}`}
              {language === 'hi' && `📌 सक्रिय फ़िल्टर: ${categories.find(c => c.id === categoryFilter)?.labelHi}`}
              {language === 'mr' && `📌 निवडलेली श्रेणी: ${categories.find(c => c.id === categoryFilter)?.labelMr}`}
            </p>
          </div>
        )}

        {/* Reset Button */}
        {(categoryFilter !== 'all' || searchQuery) && (
          <button
            onClick={resetFilters}
            className="w-full px-4 py-2.5 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 font-bold text-xs hover:bg-gray-200 hover:text-gray-900 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw size={15} />
            {language === 'en' && 'Reset All Filters'}
            {language === 'hi' && 'फ़िल्टर रीसेट करें'}
            {language === 'mr' && 'सर्व फ़िल्टर रीसेट करा'}
          </button>
        )}

        {/* Info Card */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-2">
          <p className="text-xs font-black text-emerald-800 flex items-center gap-1.5 uppercase tracking-wider">
            <Zap size={14} className="fill-emerald-600 text-emerald-600" />
            {language === 'en' && 'ISI Certified Safety'}
            {language === 'hi' && 'ISI प्रमाणित सुरक्षा'}
            {language === 'mr' && 'ISI प्रमाणित सुरक्षितता'}
          </p>
          <p className="text-[11px] text-gray-700 leading-relaxed font-medium">
            {language === 'en' && 'All our products are rigorously lab-tested and certified for non-lethal shock and long-lasting durability.'}
            {language === 'hi' && 'हमारे सभी उत्पाद सुरक्षित झटके और लंबी मजबूती के लिए लैब टेस्टेड और प्रमाणित हैं।'}
            {language === 'mr' && 'आमची सर्व उत्पादने सुरक्षित झटक्यासाठी आणि दीर्घकाळ टिकण्यासाठी लॅब टेस्टेड आणि प्रमाणित आहेत.'}
          </p>
        </div>

      </div>
    </aside>
  );
};

export default ProductSidebar;
