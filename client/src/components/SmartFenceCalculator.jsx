import React, { useState } from 'react';
import { Cpu, Zap, ShieldAlert, CheckCircle2, ShoppingCart, MessageCircle, ArrowRight, Sparkles, HelpCircle, PhoneCall } from 'lucide-react';

const SmartFenceCalculator = ({ addToCart, allProducts, language }) => {
  const [unit, setUnit] = useState('acres'); // 'acres', 'bigha', 'hectares'
  const [areaValue, setAreaValue] = useState(10);
  const [animalThreat, setAnimalThreat] = useState('boar_nilgai'); // 'boar_nilgai', 'elephant', 'monkeys', 'cattle'
  const [powerSource, setPowerSource] = useState('solar'); // 'solar', 'grid', 'hybrid'
  const [strands, setStrands] = useState(3);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultForm, setConsultForm] = useState({ name: '', phone: '', village: '', notes: '' });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Calculate perimeter based on area (assuming square field for accurate estimate)
  const getPerimeterMeters = () => {
    let areaInAcres = Number(areaValue) || 1;
    if (unit === 'bigha') areaInAcres = areaInAcres * 0.619;
    if (unit === 'hectares') areaInAcres = areaInAcres * 2.471;
    
    const sqMeters = areaInAcres * 4046.86;
    const side = Math.sqrt(sqMeters);
    return Math.round(4 * side);
  };

  const perimeterMeters = getPerimeterMeters();
  const perimeterFeet = Math.round(perimeterMeters * 3.28084);

  // Determine required strands based on animal
  let effectiveStrands = strands;
  if (animalThreat === 'elephant') effectiveStrands = Math.max(strands, 4);
  if (animalThreat === 'monkeys') effectiveStrands = Math.max(strands, 5);

  // Calculate Total Wire Length needed
  const totalWireMeters = Math.round(perimeterMeters * effectiveStrands * 1.1);
  const totalWireRolls = Math.ceil(totalWireMeters / 1000);

  // Calculate Insulators needed
  const totalPosts = Math.ceil(perimeterMeters / 6);
  const ringInsulators = totalPosts * effectiveStrands;
  const cornerStrainers = 4 * effectiveStrands;

  // Select recommended Jhatka Machine based on area & threat
  const getRecommendedMachine = () => {
    let areaInAcres = Number(areaValue) || 1;
    if (unit === 'bigha') areaInAcres = areaInAcres * 0.619;
    if (unit === 'hectares') areaInAcres = areaInAcres * 2.471;

    if (animalThreat === 'elephant' || areaInAcres > 25 || animalThreat === 'boar_nilgai' || powerSource === 'hybrid') {
      if (powerSource !== 'grid') {
        return allProducts.find(p => p._id === 'prod_jhatka_18kv_set') || {
          _id: 'prod_jhatka_18kv_set',
          name: language === 'en' ? 'Complete 18 KV Solar Fencing Set' : (language === 'hi' ? '18 KV सोलर फेंसिंग संपूर्ण सेट' : '18 KV सोलर कुंपण संपूर्ण सेट'),
          price: 12700,
          originalPrice: 16800,
          specs: 'Machine + 30AH Battery + 40W Panel + Wire + Insulators',
          image: '/images/jhatka-18kv-set.jpg'
        };
      } else {
        return allProducts.find(p => p._id === 'prod_jhatka_02') || {
          _id: 'prod_jhatka_02',
          name: 'FG-18KV FarmGuard Heavy Duty Standalone Jhatka Machine (18 KV Unit)',
          nameHindi: 'FG-18KV फार्मगार्ड हैवी ड्यूटी स्टैंडअलोन झटका मशीन (18 KV यूनिट)',
          nameMarathi: 'FG-18KV फार्मगार्ड हेवी ड्युटी स्टैंडअलोन झटका मशीन (18 KV युनिट)',
          price: 5500,
          image: '/images/jhatka-10kv.jpg'
        };
      }
    } else {
      if (powerSource !== 'grid') {
        return allProducts.find(p => p._id === 'prod_jhatka_12kv_set') || {
          _id: 'prod_jhatka_12kv_set',
          name: 'Complete 12 KV Solar Fencing All-in-One Kit (12 KV Set)',
          nameHindi: 'कम्प्लीट 12 KV सोलर फेंसिंग ऑल-इन-वन किट (12 KV सेट)',
          nameMarathi: 'कम्प्लीट 12 KV सोलर कुंपण ऑल-इन-वन किट (12 KV संपूर्ण सेट)',
          price: 11800,
          image: '/images/jhatka-10kv.jpg'
        };
      } else {
        return allProducts.find(p => p._id === 'prod_jhatka_01') || {
          _id: 'prod_jhatka_01',
          name: 'FG-12KV FarmGuard Standalone Jhatka Machine (12 KV Unit)',
          nameHindi: 'FG-12KV फार्मगार्ड स्टैंडअलोन झटका मशीन (12 KV यूनिट)',
          nameMarathi: 'FG-12KV फार्मगार्ड स्टैंडअलोन झटका मशीन (12 KV युनिट)',
          price: 4600,
          image: '/images/jhatka-5kv.jpg'
        };
      }
    }
  };

  const recommendedMachine = getRecommendedMachine();

  const solarKit = allProducts.find(p => p._id === 'prod_solar_01') || {
    _id: 'prod_solar_01',
    name: 'Complete Solar Power Pack (40W Panel + 30 AH Dry Battery Combo)',
    nameHindi: 'कम्प्लीट सोलर पावर पैक (40W पैनल + 30 AH ड्राई बैटरी कॉम्बो)',
    nameMarathi: 'कम्प्लीट सोलर पॉवर पॅक (40W पॅनेल + 30 AH ड्राय बॅटरी कॉम्बो)',
    price: 5150
  };

  const insulatorPack = allProducts.find(p => p._id === 'prod_insulators_01') || {
    _id: 'prod_insulators_01',
    name: 'FG-INS100 Super-Tough Nylon Insulators (100 Pieces Pack)',
    nameHindi: 'FG-INS100 सुपर-टफ नायलॉन इंसुलेटर (100 पीस का पैकेट)',
    nameMarathi: 'FG-INS100 सुपर-टफ नायलॉन इन्सुलेटर (100 पीसचे पॅकेट)',
    price: 400
  };

  const insulatorPacksNeeded = Math.max(1, Math.ceil((ringInsulators + cornerStrainers) / 100));

  let estimatedQuote = recommendedMachine.price;
  let wireEstimatedCost = 0;

  if (recommendedMachine._id && recommendedMachine._id.includes('_set')) {
    // Complete Set already includes 1 Solar Pack (₹5150), 1 roll 10kg wire (₹1650), and 1 pack 100 insulators (₹400)
    const extraInsulatorPacks = Math.max(0, insulatorPacksNeeded - 1);
    const extraWireRolls = Math.max(0, totalWireRolls - 1);
    estimatedQuote += (extraInsulatorPacks * 400);
    wireEstimatedCost = extraWireRolls * 1650;
  } else {
    estimatedQuote += (insulatorPacksNeeded * 400);
    if (powerSource !== 'grid') {
      estimatedQuote += solarKit.price;
    }
    wireEstimatedCost = totalWireRolls * 1650;
  }
  const grandTotalEstimate = estimatedQuote + wireEstimatedCost;

  const handleAddBundleToCart = () => {
    addToCart(recommendedMachine);
    if (powerSource !== 'grid') {
      addToCart(solarKit);
    }
    for (let i = 0; i < insulatorPacksNeeded; i++) {
      addToCart(insulatorPack);
    }
    alert(
      language === 'en' ? `🎉 Success! Recommended Jhatka Machine + Solar Kit + ${insulatorPacksNeeded} Insulator Packs have been added to your cart!` :
      language === 'hi' ? `🎉 बधाई! अनुशंसित झटका मशीन + सोलर किट + ${insulatorPacksNeeded} इंसुलेटर पैक आपकी गाड़ी में जोड़ दिए गए हैं!` :
      `🎉 अभिनंदन! शिफारस केलेली झटका मशीन + सोलर किट + ${insulatorPacksNeeded} इन्सुलेटर पॅक्स तुमच्या कार्टमध्ये जोडले गेले आहेत!`
    );
  };

  const handleConsultSubmit = async (e) => {
    e.preventDefault();
    if (!consultForm.name || !consultForm.phone) {
      alert("Please enter Name and Phone Number");
      return;
    }

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          farmerName: consultForm.name,
          phone: consultForm.phone,
          villageDistrict: consultForm.village,
          farmAcres: areaValue,
          animalThreats: [animalThreat],
          powerSource: powerSource,
          message: `Requested complete quote calculation for ${areaValue} ${unit}. Estimated cost: ₹${grandTotalEstimate}. Notes: ${consultForm.notes}`
        })
      });
      setSubmitSuccess(true);
      setTimeout(() => {
        setIsConsultationModalOpen(false);
        setSubmitSuccess(false);
        setConsultForm({ name: '', phone: '', village: '', notes: '' });
      }, 3000);
    } catch (err) {
      alert("Could not submit request. Please contact us via WhatsApp directly.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Cpu size={15} /> 
          {language === 'en' && 'Smart Farm Fencing Cost Estimator'}
          {language === 'hi' && 'स्मार्ट फार्म फेंसिंग खर्च अनुमान कैलकुलेटर'}
          {language === 'mr' && 'स्मार्ट शेती कुंपण खर्च कॅल्क्युलेटर'}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
          {language === 'en' && <>Calculate Exact <span className="text-emerald-600">Jhatka Kit & Wire</span> Needed For Your Farm</>}
          {language === 'hi' && <>अपने खेत के लिए <span className="text-emerald-600">सटीक झटका मशीन और तार</span> का खर्च जानें</>}
          {language === 'mr' && <>आपल्या शेतासाठी <span className="text-emerald-600">अचूक झटका मशीन आणि कुंपण खर्चाचा अंदाज</span> जाणून घ्या</>}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-medium">
          {language === 'en' && 'Enter your farm acreage, target animal threats, and power source below. Our intelligent engine instantly calculates perimeter distance, wire requirement, and recommends the right voltage kit without any guesswork!'}
          {language === 'hi' && 'नीचे अपने खेत का क्षेत्रफल, जानवरों का खतरा और बिजली की उपलब्धता चुनें। हमारा सिस्टम तुरंत कुल परिमाप, तार की लंबाई और सही मशीन का सटीक एस्टीमेट निकाल कर देगा!'}
          {language === 'mr' && 'खाली आपल्या शेताचे क्षेत्रफळ, प्राण्यांचा धोका आणि विजेची उपलब्धता निवडा. आमचे स्मार्ट कॅल्क्युलेटर त्वरित कुंपणाची लांबी, आवश्यक वायर आणि योग्य झटका मशीनची माहिती व अचूक खर्च सांगते!'}
        </p>
      </div>

      {/* Main Grid: Calculator Inputs + Live Output Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Input Control Panel */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-8 space-y-6 bg-white border border-gray-200 shadow-sm">
          <h3 className="text-lg font-extrabold text-gray-900 flex items-center gap-2 border-b border-gray-200 pb-3">
            <Sparkles className="text-emerald-600" size={18} />
            {language === 'en' && 'Step 1: Enter Your Farm Parameters'}
            {language === 'hi' && 'स्टेप 1: अपने खेत की जानकारी भरें'}
            {language === 'mr' && 'स्टेप 1: आपल्या शेताची माहिती निवडा'}
          </h3>

          {/* Area Input & Unit Selector */}
          <div className="space-y-2.5">
            <label className="text-sm font-bold flex justify-between items-center text-gray-800">
              <span>
                {language === 'en' && 'Farm Area Size:'}
                {language === 'hi' && 'खेत का क्षेत्रफल:'}
                {language === 'mr' && 'शेताचे क्षेत्रफळ:'}
              </span>
              <span className="text-emerald-600 font-black text-lg">
                {areaValue} {unit.toUpperCase()}
              </span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'acres', labelEn: 'Acres', labelHi: 'एकड़', labelMr: 'एकर' },
                { id: 'bigha', labelEn: 'Bigha', labelHi: 'बीघा', labelMr: 'बिघा' },
                { id: 'hectares', labelEn: 'Hectares', labelHi: 'हेक्टेयर', labelMr: 'हेक्टर' }
              ].map((u) => (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => setUnit(u.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                    unit === u.id 
                      ? 'bg-emerald-600 text-white shadow-md font-black' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {language === 'en' ? u.labelEn : (language === 'hi' ? u.labelHi : u.labelMr)}
                </button>
              ))}
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={areaValue}
              onChange={(e) => setAreaValue(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 mt-3"
            />
            <div className="flex justify-between text-[11px] text-gray-500 font-mono">
              <span>1 {unit}</span>
              <span>25 {unit}</span>
              <span>50 {unit}</span>
              <span>100+ {unit}</span>
            </div>
          </div>

          {/* Animal Threat Selector */}
          <div className="space-y-2.5">
            <label className="text-sm font-bold text-gray-800">
              {language === 'en' && 'Target Animal Threat:'}
              {language === 'hi' && 'कौन से जानवर खेत में नुकसान करते हैं?'}
              {language === 'mr' && 'शेतात कोणत्या प्राण्यांचा त्रास किंवा धोका आहे?'}
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'boar_nilgai', name: 'Wild Boar / Nilgai', nameHi: 'जंगली सूअर / नीलगाय', nameMr: 'रानडुक्कर / नीलगाय', icon: '🐗', recStrands: 3 },
                { id: 'elephant', name: 'Wild Elephants', nameHi: 'जंगली हाथी', nameMr: 'जंगली हत्ती', icon: '🐘', recStrands: 4 },
                { id: 'monkeys', name: 'Monkeys & Langurs', nameHi: 'बंदर एवं लंगूर', nameMr: 'माकड आणि वानर', icon: '🐒', recStrands: 5 },
                { id: 'cattle', name: 'Stray Cattle / Cows', nameHi: 'छुट्टा पशु / गाय', nameMr: 'मोकाट जनावरे / गाय', icon: '🐮', recStrands: 2 }
              ].map((threat) => (
                <div
                  key={threat.id}
                  onClick={() => { setAnimalThreat(threat.id); setStrands(threat.recStrands); }}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                    animalThreat === threat.id
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm font-bold'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-2xl">{threat.icon}</span>
                  <div>
                    <p className="text-xs font-bold leading-tight">
                      {language === 'en' ? threat.name : (language === 'hi' ? threat.nameHi : threat.nameMr)}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      {threat.recStrands} {language === 'en' ? 'wire strands' : (language === 'hi' ? 'तार लगाना' : 'वायर पदर')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Power Source Selector */}
          <div className="space-y-2.5">
            <label className="text-sm font-bold text-gray-800">
              {language === 'en' && 'Power Availability at Farm:'}
              {language === 'hi' && 'खेत पर बिजली की सुविधा:'}
              {language === 'mr' && 'शेतात विजेची उपलब्धता:'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'solar', label: '100% Solar + Battery', labelHi: '100% सोलर + बैटरी', labelMr: '100% सोलर + बॅटरी' },
                { id: 'grid', label: 'Grid Electricity (220V)', labelHi: 'बिजली (220V)', labelMr: 'वीज (220V ग्रिड)' },
                { id: 'hybrid', label: 'Solar + Grid Hybrid', labelHi: 'सोलर + बिजली', labelMr: 'सोलर + वीज (हायब्रीड)' }
              ].map((pwr) => (
                <button
                  key={pwr.id}
                  type="button"
                  onClick={() => setPowerSource(pwr.id)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    powerSource === pwr.id
                      ? 'bg-amber-500 text-white shadow-md font-black'
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {language === 'en' ? pwr.label : (language === 'hi' ? pwr.labelHi : pwr.labelMr)}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Strands Slider/Adjustment */}
          <div className="space-y-2.5 pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold mb-0 text-gray-800">
                {language === 'en' && 'Wire Strands (Layers):'}
                {language === 'hi' && 'फेंसिंग तार की परते:'}
                {language === 'mr' && 'कुंपणाच्या वायरचे पदर/लेयर:'}
              </label>
              <span className="badge badge-green font-black">
                {effectiveStrands} {language === 'en' ? 'Strands' : (language === 'hi' ? 'लाइन' : 'पदर')}
              </span>
            </div>
            <div className="flex gap-2">
              {[2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setStrands(num)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    effectiveStrands === num
                      ? 'bg-emerald-600 text-white font-black'
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {num} L
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Output Calculation Summary & Kit Recommendation */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Summary Card */}
          <div className="glass-panel p-6 sm:p-8 space-y-6 border border-emerald-300 bg-white shadow-md">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 
                {language === 'en' && 'Step 2: Calculation Results'}
                {language === 'hi' && 'स्टेप 2: एस्टीमेट रिपोर्ट'}
                {language === 'mr' && 'स्टेप 2: कुंपणाचा एकूण अंदाज व रिपोर्ट'}
              </span>
              <span className="badge badge-gold font-mono font-bold">
                {areaValue} {unit.toUpperCase()} ({perimeterMeters}m)
              </span>
            </div>

            {/* Metrics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
                <p className="text-[11px] text-gray-500 uppercase font-bold">
                  {language === 'en' ? 'Farm Perimeter' : (language === 'hi' ? 'खेत का घेरा' : 'शेताचा परिघ')}
                </p>
                <p className="text-lg font-black text-gray-900 mt-1">{perimeterMeters} m</p>
                <p className="text-[10px] text-gray-500 font-mono">(~{perimeterFeet} ft)</p>
              </div>

              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
                <p className="text-[11px] text-gray-500 uppercase font-bold">
                  {language === 'en' ? 'Total GI Wire' : (language === 'hi' ? 'कुल तार' : 'एकूण आवश्यक वायर')}
                </p>
                <p className="text-lg font-black text-amber-600 mt-1">{totalWireMeters} m</p>
                <p className="text-[10px] text-gray-500 font-mono">({totalWireRolls} {language === 'en' ? 'Rolls' : (language === 'hi' ? 'रोल' : 'रोल्स')})</p>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-gray-50 p-3.5 rounded-2xl border border-gray-200">
                <p className="text-[11px] text-gray-500 uppercase font-bold">
                  {language === 'en' ? 'Insulators' : (language === 'hi' ? 'इंसुलेटर' : 'इन्सुलेटर')}
                </p>
                <p className="text-lg font-black text-emerald-600 mt-1">{ringInsulators + cornerStrainers} Pcs</p>
                <p className="text-[10px] text-gray-500 font-mono">(~{insulatorPacksNeeded} {language === 'en' ? 'Packs' : (language === 'hi' ? 'पैक' : 'पॅक्स')})</p>
              </div>
            </div>

            {/* Recommended Machine Spotlight */}
            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-300 flex items-center gap-4">
              <img
                src={recommendedMachine.image || "/images/jhatka-10kv.jpg"}
                alt={recommendedMachine.name}
                className="w-20 h-20 rounded-xl object-cover border border-emerald-300 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="badge badge-green text-[10px]">
                  {language === 'en' && '✨ Recommended Machine'}
                  {language === 'hi' && '✨ अनुशंसित झटका मशीन'}
                  {language === 'mr' && '✨ शिफारस केलेली मशीन'}
                </span>
                <h4 className="font-extrabold text-gray-900 text-sm sm:text-base mt-1 truncate">
                  {language === 'en' && recommendedMachine.name}
                  {language === 'hi' && (recommendedMachine.nameHindi || recommendedMachine.name)}
                  {language === 'mr' && (recommendedMachine.nameMarathi || recommendedMachine.name)}
                </h4>
                <p className="text-xs text-emerald-700 font-bold mt-1 font-mono">
                  ₹{recommendedMachine.price?.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Total Estimated Cost Box */}
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-4">
              <div>
                <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">
                  {language === 'en' && 'Estimated Total Kit Cost:'}
                  {language === 'hi' && 'कुल अनुमानित खर्च:'}
                  {language === 'mr' && 'अंदाजे एकूण संपूर्ण खर्च:'}
                </p>
                <p className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1 tracking-tight">
                  ~₹{grandTotalEstimate.toLocaleString('en-IN')}
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5 font-medium">
                  {language === 'en' && '*Includes Machine + Solar Pack + Insulator Combo + Estimated Wire Cost'}
                  {language === 'hi' && '*मशीन + सोलर किट + इंसुलेटर कॉम्बो + अनुमानित तार खर्च शामिल'}
                  {language === 'mr' && '*मशीन + सोलर किट + इन्सुलेटर कॉम्बो + वायरचा अंदाजे खर्च समाविष्ट'}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2.5 w-full">
                <button
                  onClick={handleAddBundleToCart}
                  className="btn btn-primary py-3.5 px-5 text-sm font-bold shadow-md w-full cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} className="fill-white" />
                  {language === 'en' && 'Add Complete Kit to Cart'}
                  {language === 'hi' && 'किट गाड़ी में डालें'}
                  {language === 'mr' && 'संपूर्ण किट कार्टमध्ये जोडा'}
                </button>

                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="btn btn-gold py-3 px-4 text-xs font-bold w-full cursor-pointer flex items-center justify-center gap-2"
                >
                  <PhoneCall size={15} />
                  {language === 'en' && 'Get Free Expert Quotation & Consultation Call'}
                  {language === 'hi' && 'मुफ्त विशेषज्ञ सलाह और कोटेशन पाएं'}
                  {language === 'mr' && 'तज्ज्ञांचा मोफत सल्ला आणि कोटेशन मिळवा'}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="modal-overlay" onClick={() => setIsConsultationModalOpen(false)}>
          <div className="modal-content bg-white max-w-md w-full p-6 border border-gray-300 rounded-3xl relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsConsultationModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 cursor-pointer">✕</button>
            
            {submitSuccess ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="text-emerald-600 mx-auto w-14 h-14 animate-bounce" />
                <h3 className="text-xl font-black text-gray-900">
                  {language === 'en' && 'Request Submitted Successfully!'}
                  {language === 'hi' && 'अनुरोध सफलतापूर्वक भेज दिया गया!'}
                  {language === 'mr' && 'तुमची विनंती यशस्वीरित्या पाठवली आहे!'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'en' && 'Our senior engineer will call you shortly.'}
                  {language === 'hi' && 'हमारे सीनियर इंजीनियर जल्द ही आपको कॉल करेंगे।'}
                  {language === 'mr' && 'आमचे इंजिनीअर लवकरच तुमच्याशी संपर्क साधतील.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
                    <PhoneCall className="text-emerald-600" size={18} />
                    {language === 'en' && 'Get Expert Quotation'}
                    {language === 'hi' && 'विशेषज्ञ सलाह व कोटेशन'}
                    {language === 'mr' && 'विशेषज्ञ सल्ला व कोटेशन मागवा'}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 font-medium">
                    {language === 'en' && `For your ${areaValue} ${unit} farm`}
                    {language === 'hi' && `आपके ${areaValue} ${unit} खेत के लिए`}
                    {language === 'mr' && `तुमच्या ${areaValue} ${unit} शेताच्या कुंपणासाठी`}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    {language === 'en' && 'Your Full Name *'}
                    {language === 'hi' && 'आपका नाम *'}
                    {language === 'mr' && 'तुमचे नाव *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={consultForm.name}
                    onChange={e => setConsultForm({...consultForm, name: e.target.value})}
                    placeholder={language === 'en' ? "e.g. Ram Kumar Patil" : (language === 'hi' ? "जैसे राम कुमार" : "उदा. रामभाऊ पाटील")}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    {language === 'en' && 'Phone / WhatsApp *'}
                    {language === 'hi' && 'फोन / व्हाट्सएप नंबर *'}
                    {language === 'mr' && 'मोबाईल / व्हॉट्सॲप नंबर *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={consultForm.phone}
                    onChange={e => setConsultForm({...consultForm, phone: e.target.value})}
                    placeholder="9876543210"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    {language === 'en' && 'Village / District'}
                    {language === 'hi' && 'गांव / जिला'}
                    {language === 'mr' && 'गाव / जिल्हा'}
                  </label>
                  <input
                    type="text"
                    value={consultForm.village}
                    onChange={e => setConsultForm({...consultForm, village: e.target.value})}
                    placeholder={language === 'en' ? "e.g. Nashik, MH" : (language === 'hi' ? "जैसे सीहोर, MP" : "उदा. नाशिक, महाराष्ट्र")}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    {language === 'en' && 'Any Special Note / Questions?'}
                    {language === 'hi' && 'कोई सवाल?'}
                    {language === 'mr' && 'काही प्रश्न किंवा टीप?'}
                  </label>
                  <textarea
                    rows="2"
                    value={consultForm.notes}
                    onChange={e => setConsultForm({...consultForm, notes: e.target.value})}
                    placeholder={language === 'en' ? "e.g. Need quick delivery..." : (language === 'hi' ? "जैसे फसल बचानी है..." : "उदा. रानडुक्कर व हत्तींचा खूप त्रास आहे...")}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full py-3 font-bold cursor-pointer flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} />
                  {language === 'en' && 'Submit Quotation Request'}
                  {language === 'hi' && 'अनुरोध भेजें'}
                  {language === 'mr' && 'कोटेशन विनंती पाठवा'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default SmartFenceCalculator;
