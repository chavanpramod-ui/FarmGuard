import React, { useState } from 'react';
import { ShieldAlert, Zap, CheckCircle2, HelpCircle, Sun, Activity, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

const FarmerEducationSection = ({ language }) => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      qEn: "Is the Jhatka Machine shock safe for animals and humans? Can it kill?",
      qHi: "क्या झटका मशीन का करंट जानवरों और इंसानों के लिए सुरक्षित है? क्या इससे जान जा सकती है?",
      qMr: "झटका मशीनचा करंट प्राणी आणि माणसांसाठी सुरक्षित आहे का? त्यामुळे जीव जाऊ शकतो का?",
      aEn: "Yes, it is 100% non-lethal and completely safe! Unlike standard household AC electricity which causes continuous electrocution, our ISI-compliant Jhatka controller sends a controlled DC micro-second pulse (lasting less than 0.3 milliseconds) once every 1.2 seconds. It delivers a strong deterrent 'thump' that scares the animal away immediately without causing burns, cardiac arrest, or any physical injury.",
      aHi: "हाँ, यह 100% सुरक्षित और गैर-घातक है! घरेलू बिजली (AC) के विपरीत जिसमें लगातार करंट रहता है, हमारी ISI मानक झटका मशीन हर 1.2 सेकंड में केवल एक पल (0.3 मिलीसेकंड से भी कम) के लिए डीसी पल्स भेजती है। यह जानवर को केवल एक जोरदार झटका देकर डराता है जिससे वह खेत से भाग जाता है, लेकिन शरीर को कोई नुकसान या जलन नहीं होती।",
      aMr: "होय, हे 100% सुरक्षित आणि अघातक आहे! घरातील नेहमीच्या विजेसारखा (AC) यामध्ये सतत करंट नसतो. आमची ISI मानक मशीन दर 1.2 सेकंदाला फक्त एका क्षणासाठी (0.3 मिलीसेकंद) डीसी पल्स पाठवते. त्यामुळे प्राण्याला फक्त जोरदार झटका बसून तो घाबरून पळतो, पण शरीराला कोणतीही हानी किंवा भाजणे होत नाही."
    },
    {
      qEn: "Why is proper Earthing / Grounding critical for high voltage Jhatka machines?",
      qHi: "झटका मशीन के लिए अर्थिंग (Earthing) करना इतना जरूरी क्यों है?",
      qMr: "झटका मशीनसाठी योग्य अर्थिंग (Earthing) करणे इतके महत्त्वाचे का आहे?",
      aEn: "An electric fence circuit is only completed when an animal touches the live wire AND the ground simultaneously. If your earthing rod is dry or corroded, the return path is weak, and the animal won't feel a strong shock even if the machine outputs 10,000V! Always bury a copper or GI earthing rod at least 4 feet deep with salt and charcoal, and keep the earth pit moist during dry summer months.",
      aHi: "झटका मशीन का सर्किट तब पूरा होता है जब जानवर तार को और जमीन को एक साथ छूता है। यदि अर्थिंग कमजोर या सूखी होगी, तो मशीन से 10,000V निकलने पर भी जानवर को तेज झटका नहीं लगेगा! इसलिए कम से कम 4 फीट गहरा कॉपर या GI अर्थिंग रॉड नमक और कोयले के साथ गाड़ें और गर्मियों में अर्थिंग गड्ढे में पानी डालते रहें।",
      aMr: "जेव्हा प्राणी कुंपणाच्या वायरला आणि जमिनीला एकाच वेळी स्पर्श करतो तेव्हाच सर्किट पूर्ण होते. जर अर्थिंग कोरडी किंवा कमजोर असेल तर मशीनमधून 10,000V करंट निघूनही प्राण्याला झटका बसणार नाही! म्हणूनच किमान 4 फूट खोल तांबे किंवा GI रॉड मीठ व कोळशासोबत गाडा आणि उन्हाळ्यात अर्थिंग खड्ड्यात पाणी टाकत राहा."
    },
    {
      qEn: "How does the Solar + Battery system work during cloudy monsoon days?",
      qHi: "बादल या बारिश के मौसम में सोलर बैटरी सिस्टम कैसे काम करता है?",
      qMr: "ढगाळ किंवा पावसाळी वातावरणात सोलर व बॅटरी सिस्टम कशी चालते?",
      aEn: "Our FarmGuard solar packs use high-efficiency Monocrystalline panels along with heavy-duty SMF dry batteries. Even during 3 to 4 days of continuous rain or overcast skies, our smart controller stores enough energy to operate the fence 24/7 without interruption. Plus, our Hybrid models can automatically switch to home grid power if needed.",
      aHi: "हमारे सोलर पैक में हाई-एफिशिएंसी मोनोक्रिस्टलाइन पैनल और हैवी SMF बैटरी होती है। लगातार 3-4 दिन बारिश या बादल रहने पर भी बैटरी में इतना बैकअप रहता है कि मशीन रात-दिन बिना रुके चल सके। हमारे हाइब्रिड मॉडल जरूरत पड़ने पर घर की बिजली से भी चल सकते हैं।",
      aMr: "आमच्या सोलर पॅकमध्ये हाय-एफिशिएंसी मोनोक्रिस्टलाइन पॅनेल आणि हेवी SMF ड्राय बॅटरी असते. सलग 3-4 दिवस पाऊस किंवा ढगाळ वातावरण असले तरीही बॅटरीमध्ये इतका बॅकअप राहतो की मशीन रात्रंदिवस न थांबता चालू शकते. हायब्रीड मॉडेल गरज पडल्यास घरातील विजेवरही चालू शकतात."
    },
    {
      qEn: "What happens if a tree branch falls on the fence wire or wire touches grass?",
      qHi: "यदि तार पर पेड़ की डाली गिर जाए या घास तार से छू जाए तो क्या होगा?",
      qMr: "जर कुंपणाच्या वायरवर झाडाची फांदी पडली किंवा गवत स्पर्श झाले तर काय होते?",
      aEn: "If heavy vegetation or wet tree branches touch the live wire, partial voltage leakage occurs. Our smart machines detect this abnormal load and instantly sound the high-decibel Warning Siren near your farm or house, alerting you immediately to check and clear the fence line!",
      aHi: "यदि हरी डाली या बड़ी घास लाइव तार को छूती है, तो वोल्टेज लीक होने लगता है। हमारी स्मार्ट मशीन तुरंत इस लीकेज को पहचान कर तेज सायरन (अलार्म) बजा देती है, जिससे आपको पता चल जाता है कि तार पर कुछ गिरा है और आप उसे हटा सकते हैं।",
      aMr: "जर ओले गवत किंवा झाडाची फांदी लाईव्ह वायरला लागली तर व्होल्टेज लीक होऊ लागते. आमचे स्मार्ट मशीन लगेच हा बिघाड ओळखून मोठा सायरन (अलार्म) वाजवते, जेणेकरून तुम्हाला लगेच समजते की वायरवर काहीतरी पडले आहे आणि तुम्ही ते हटवू शकता."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider shadow-sm">
          <ShieldAlert size={15} /> 
          {language === 'en' && 'Safety & Knowledge Guide'}
          {language === 'hi' && 'सुरक्षा व अर्थिंग ज्ञान'}
          {language === 'mr' && 'सुरक्षितता आणि ज्ञान मार्गदर्शक'}
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
          {language === 'en' && <>How <span className="text-emerald-600">Jhatka Machines</span> Work Safely</>}
          {language === 'hi' && <>बिना जानवर को नुकसान पहुंचाए <span className="text-emerald-600">झटका मशीन</span> कैसे काम करती है?</>}
          {language === 'mr' && <>कोणत्याही जनावराला इजा न करता <span className="text-emerald-600">झटका मशीन</span> कशी काम करते?</>}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-medium">
          {language === 'en' && 'Learn the science of safe electric fencing, earthing procedures, and best practices.'}
          {language === 'hi' && 'सुरक्षित फेंसिंग और अर्थिंग का वैज्ञानिक तरीका जानें।'}
          {language === 'mr' && 'सुरक्षित झटका कुंपणाचे विज्ञान आणि योग्य वापर समजून घ्या.'}
        </p>
      </div>

      {/* 3 Pillar Infographic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="glass-panel p-6 border border-gray-200 bg-white rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-200">
            <Activity size={26} />
          </div>
          <h3 className="text-lg font-black text-gray-900">
            {language === 'en' && 'Pulsed DC Shock'}
            {language === 'hi' && 'पल्स डीसी करंट'}
            {language === 'mr' && 'पल्स डीसी शॉक (Pulsed DC)'}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            {language === 'en' && 'Controlled 10,000V pulse for just 0.0003 seconds. Safe but highly effective deterrent for wild animals.'}
            {language === 'hi' && '10,000V पल्स केवल 0.0003 सेकंड के लिए। जानवरों के लिए 100% सुरक्षित पर उन्हें भगाने में असरदार।'}
            {language === 'mr' && '10,000V पल्स फक्त 0.0003 सेकंदासाठी. प्राण्यांसाठी 100% सुरक्षित पण शेतातून दूर पळवणारा झटका.'}
          </p>
        </div>

        <div className="glass-panel p-6 border border-gray-200 bg-white rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center border border-amber-200">
            <Sun size={26} />
          </div>
          <h3 className="text-lg font-black text-gray-900">
            {language === 'en' && 'Solar Panel Setup'}
            {language === 'hi' && 'सोलर पैनल सेटअप'}
            {language === 'mr' && 'सोलर पॅनेल व बॅटरी सेटअप'}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            {language === 'en' && 'Mount facing South at 25-30° tilt. Clean the panel weekly for optimal solar charging even in monsoon.'}
            {language === 'hi' && 'दक्षिण की ओर 25-30° पर लगाएं। अच्छी चार्जिंग के लिए पैनल को सप्ताह में एक बार पानी से साफ करें।'}
            {language === 'mr' && 'पॅनेल दक्षिणेकडे 25-30° कोनात लावा. उत्तम बॅटरी चार्जिंगसाठी पॅनेल दर आठवड्याला स्वच्छ पुसा.'}
          </p>
        </div>

        <div className="glass-panel p-6 border border-gray-200 bg-white rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center border border-blue-200">
            <AlertCircle size={26} />
          </div>
          <h3 className="text-lg font-black text-gray-900">
            {language === 'en' && 'Safety Warning & Earthing'}
            {language === 'hi' && 'सुरक्षा व अर्थिंग नियम'}
            {language === 'mr' && 'सुरक्षा आणि खबरदारी'}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            {language === 'en' && 'Use certified controllers only. Never connect 220V grid directly. Display yellow warning boards.'}
            {language === 'hi' && 'प्रमाणित मशीन ही उपयोग करें। सीधे 220V बिजली कभी न जोड़ें। खेत पर पीले चेतावनी बोर्ड जरूर लगाएं।'}
            {language === 'mr' && 'फक्त ISI प्रमाणित मशीन वापरा. थेट 220V वीज कधीही कुंपणाला جوडू नका. धोक्याचे फलक नक्की लावा.'}
          </p>
        </div>

      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-4 pt-6">
        <h3 className="text-xl font-black text-gray-900 text-center mb-6 flex items-center justify-center gap-2">
          <HelpCircle className="text-amber-500" />
          {language === 'en' && 'Frequently Asked Questions (Farmer FAQs)'}
          {language === 'hi' && 'अक्सर पूछे जाने वाले महत्वपूर्ण प्रश्न'}
          {language === 'mr' && 'शेतकऱ्यांनी वारंवार विचारलेले महत्त्वाचे प्रश्न (FAQs)'}
        </h3>

        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="glass-panel overflow-hidden border border-gray-200 transition-all rounded-2xl shadow-sm bg-white"
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-emerald-600 cursor-pointer"
            >
              <span className="text-sm sm:text-base leading-snug">
                {language === 'en' ? faq.qEn : (language === 'hi' ? faq.qHi : faq.qMr)}
              </span>
              {openFaq === idx ? <ChevronUp className="flex-shrink-0 text-emerald-600" /> : <ChevronDown className="flex-shrink-0 text-gray-400" />}
            </button>

            {openFaq === idx && (
              <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-700 border-t border-gray-100 leading-relaxed bg-gray-50 font-medium">
                {language === 'en' ? faq.aEn : (language === 'hi' ? faq.aHi : faq.aMr)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerEducationSection;
