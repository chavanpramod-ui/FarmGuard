import React from 'react';
import { Zap, ShieldCheck, Cpu, ArrowRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';

const HeroBanner = ({ setCurrentView, language }) => {
  return (
    <div className="relative overflow-hidden py-12 lg:py-20 border-b border-gray-200 bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/30">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-300/20 rounded-full blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-amber-300/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Voltage Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <Sparkles size={14} className="text-emerald-600" />
                {language === 'en' && 'Live Pulse: 10,000V - 15,000V ISI Compliant Protection'}
                {language === 'hi' && 'लाइव पल्स: 10,000V - 15,000V सुरक्षित एवं असरदार झटका'}
                {language === 'mr' && 'लाईव्ह पल्स: 10,000V - 15,000V सुरक्षित आणि परिणामकारक झटका'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-gray-900">
              {language === 'en' && (
                <>
                  Protect Your Crops <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-700 to-amber-600">24/7</span> with India's Smartest <span className="text-emerald-600">Solar Jhatka Machines</span>
                </>
              )}
              {language === 'hi' && (
                <>
                  भारत की सबसे आधुनिक <span className="text-emerald-600">सोलर झटका मशीन</span> से अपनी फसलों की <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">24/7 संपूर्ण सुरक्षा</span> करें
                </>
              )}
              {language === 'mr' && (
                <>
                  भारतातील सर्वात आधुनिक <span className="text-emerald-600">सोलर झटका मशीनने</span> आपल्या पिकांचे <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">24/7 संपूर्ण संरक्षण</span> करा
                </>
              )}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-gray-600 font-normal max-w-2xl leading-relaxed">
              {language === 'en' && (
                "Say goodbye to crop destruction by wild boars, blue bulls (nilgai), monkeys, and elephants. Our ISI-standard non-lethal pulsed electric fence controllers deliver a powerful deterrent shock without killing animals or harming human life. Powered 100% by solar energy with up to 5 days battery backup!"
              )}
              {language === 'hi' && (
                "जंगली सूअर, नीलगाय, बंदर और हाथियों द्वारा फसल बर्बादी से हमेशा के लिए मुक्ति पाएं। हमारी ISI मानक झटका मशीनें बिना किसी जानवर की जान लिए या नुकसान पहुंचाए जबरदस्त झटका देकर उन्हें खेत से दूर रखती हैं। 100% सोलर ऊर्जा से चलने वाली और 5 दिन के बैटरी बैकअप के साथ!"
              )}
              {language === 'mr' && (
                "जंगली डुक्कर, नीलगाय, माकड आणि हत्तींकडून होणाऱ्या पिकांच्या नुकसानीपासून नेहमीसाठी सुटका मिळवा. आमची ISI मानक झटका मशीन कोणत्याही प्राण्याला जीवघेणी इजा न करता जोरदार झटक्याद्वारे त्यांना शेतापासून दूर ठेवते. 100% सोलर ऊर्जेवर चालणारी आणि 5 दिवसांच्या बॅटरी बॅकअपसह!"
              )}
            </p>

            {/* Key Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-bold text-gray-800">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={18} />
                <span>
                  {language === 'en' && '100% Non-Lethal & Humane Deterrent'}
                  {language === 'hi' && '100% सुरक्षित और गैर-घातक पल्स'}
                  {language === 'mr' && '100% सुरक्षित आणि अघातक पल्स'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={18} />
                <span>
                  {language === 'en' && 'Works 365 Days on Solar + Grid Power'}
                  {language === 'hi' && 'सोलर + बिजली दोनों से 365 दिन चले'}
                  {language === 'mr' && 'सोलर + वीज दोन्हीवर 365 दिवस चालते'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <CheckCircle2 className="text-amber-600 flex-shrink-0" size={18} />
                <span>
                  {language === 'en' && 'Covers 5 Acres to 60+ Acres Easily'}
                  {language === 'hi' && '5 एकड़ से 60+ एकड़ तक सुरक्षा'}
                  {language === 'mr' && '5 एकर ते 60+ एकर क्षेत्रासाठी संरक्षण'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={18} />
                <span>
                  {language === 'en' && '2 Years Complete Service Warranty'}
                  {language === 'hi' && '2 साल की संपूर्ण सर्विस वारंटी'}
                  {language === 'mr' && '2 वर्षांची संपूर्ण सर्विस आणि रिप्लेसमेंट वॉरंटी'}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setCurrentView('catalog')}
                className="btn btn-primary px-6 py-3.5 text-sm sm:text-base shadow-md"
              >
                <Zap size={20} className="fill-white" />
                {language === 'en' && 'Explore All Jhatka Machines'}
                {language === 'hi' && 'सभी झटका मशीनें देखें'}
                {language === 'mr' && 'सर्व झटका मशीन्स पहा'}
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => setCurrentView('calculator')}
                className="btn btn-gold px-6 py-3.5 text-sm sm:text-base shadow-md"
              >
                <Cpu size={20} />
                {language === 'en' && 'Smart Fence Calculator (Quote)'}
                {language === 'hi' && 'खेत का खर्च कैलकुलेटर'}
                {language === 'mr' && 'शेतीचे कुंपण खर्च कॅल्क्युलेटर'}
              </button>

              <a
                href="https://wa.me/919876543210?text=Hello%20FarmGuard,%20I%20want%20information%20about%20your%20Solar%20Jhatka%20Machines"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp px-5 py-3.5 text-sm sm:text-base"
              >
                <MessageCircle size={20} />
                {language === 'en' && 'WhatsApp Order / Inquiry'}
                {language === 'hi' && 'व्हाट्सएप से मंगाएं'}
                {language === 'mr' && 'व्हॉट्सॲपवरून ऑर्डर करा'}
              </a>
            </div>
          </div>

          {/* Right Live Interactive Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Pulsing Outer Glow Circle */}
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-emerald-500/10 rounded-3xl blur-3xl animate-pulse"></div>

              {/* Glass Showcase Card */}
              <div className="relative glass-panel overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
                
                {/* Header Status Bar */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-emerald-700 tracking-wide uppercase">✓ System Active & Protected</span>
                  </div>
                  <span className="badge badge-green font-mono">
                    🔋 12.4 kV Output
                  </span>
                </div>

                {/* Main Product Image */}
                <div className="relative overflow-hidden group bg-gray-100 aspect-[4/3] flex items-center justify-center">
                  <img
                    src="/images/jhatka-10kv.jpg"
                    alt="FarmGuard 10kV Pro Solar Hybrid Jhatka Machine"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>

                {/* Product Info Section */}
                <div className="p-6 space-y-4 bg-white">
                  {/* Product Name & Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Complete 18 KV Solar Fencing Set</h3>
                      <p className="text-xs text-emerald-600 font-semibold mt-0.5">Machine + 30AH Battery + 40W Panel + Wire + Insulators</p>
                    </div>
                    <span className="badge badge-green text-[10px]">
                      <ShieldCheck size={12} /> Complete Kit
                    </span>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Battery & Panel</p>
                      <p className="font-extrabold text-emerald-600 text-xs sm:text-sm mt-1">30AH + 40W</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Zero Maintenance</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Wire & Insulators</p>
                      <p className="font-extrabold text-amber-600 text-xs sm:text-sm mt-1">10 Kg + 100 Pcs</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Ready to Install</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Machine Power</p>
                      <p className="font-extrabold text-emerald-600 text-xs sm:text-sm mt-1">18,000 V</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">High Shock Pulse</p>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-end justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">
                        {language === 'en' && 'Complete All-in-One Set Price'}
                        {language === 'hi' && 'संपूर्ण ऑल-इन-वन सेट की कीमत'}
                        {language === 'mr' && 'संपूर्ण ऑल-इन-वन सेटची किंमत'}
                      </p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-black text-emerald-600">₹12,700</span>
                        <span className="text-sm text-gray-400 line-through font-bold">₹16,800</span>
                      </div>
                    </div>
                    <span className="badge badge-gold font-black">
                      📉 ALL SET OFFER
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setCurrentView('calculator')}
                    className="w-full btn btn-gold py-3 font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Cpu size={16} />
                    {language === 'en' && 'View Full Specs & Quote'}
                    {language === 'hi' && 'पूरे विवरण और कीमत देखें'}
                    {language === 'mr' && 'संपूर्ण माहिती आणि कोटेशन पहा'}
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
