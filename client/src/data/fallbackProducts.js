const fallbackProducts = [
  {
    _id: "prod_jhatka_12kv_set",
    name: "Complete 12 KV Solar Fencing All-in-One Kit (12 KV Set)",
    nameHindi: "कम्प्लीट 12 KV सोलर फेंसिंग ऑल-इन-वन किट (12 KV सेट)",
    nameMarathi: "कम्प्लीट 12 KV सोलर कुंपण ऑल-इन-वन किट (12 KV संपूर्ण सेट)",
    category: "jhatka_machine",
    tagline: "Complete Package: 12 KV Machine + 30 AH Battery + 40W Panel + 10 Kg Wire + 100 Insulators",
    taglineHindi: "संपूर्ण पैकेज: 12 KV मशीन + 30 AH बैटरी + 40W पैनल + 10 Kg तार + 100 इंसुलेटर",
    taglineMarathi: "संपूर्ण पॅकेज: 12 KV मशीन + 30 AH बॅटरी + 40W पॅनेल + 10 Kg वायर + 100 इन्सुलेटर",
    price: 11800,
    originalPrice: 15500,
    specifications: {
      voltageOutput: "12,000V Pulsed Output (1.2 Sec Pulse)",
      coverageArea: "Up to 20 Acres (approx. 4 km fence line)",
      batteryBackup: "30 AH Heavy Duty Battery (Up to 48 hours continuous backup)",
      pulseInterval: "1.2 Seconds (ISI Compliant Non-Lethal Shock)",
      warranty: "1 Year Replacement Warranty on Machine & Battery",
      solarPanelSize: "40W High-Efficiency Monocrystalline Panel"
    },
    image: "/images/jhatka-10kv.jpg",
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 142,
    features: [
      "All-in-One Ready to Install Set: Includes 12 KV Machine (₹4600), 30 AH Battery (₹3150), 40W Solar Panel (₹2000), 10 Kg GI Wire (₹1650), and 100 Insulators (₹400)",
      "Auto Day/Night Controller: Switches on automatically at dusk and saves battery during daytime",
      "Weatherproof ABS & Metal Body suitable for heavy monsoon and hot summer conditions",
      "Effective protection against stray cattle, monkeys, wild boars, and nilgai without harming animals",
      "Loud Warning Siren and battery level indicators included"
    ],
    featuresHindi: [
      "तुरंत लगाने के लिए तैयार संपूर्ण सेट: 12 KV मशीन (₹4600), 30 AH बैटरी (₹3150), 40W सोलर पैनल (₹2000), 10 किलो GI तार (₹1650) और 100 इंसुलेटर (₹400) शामिल",
      "ऑटो डे/नाइट कंट्रोलर: शाम होते ही अपने आप चालू होता है और दिन में बैटरी बचाता है",
      "बारिश और तेज धूप से सुरक्षित वाटरप्रूफ और मजबूत बॉडी",
      "आवारा पशुओं, बंदरों, जंगली सूअर और नीलगाय से 100% सुरक्षित और गैर-घातक बचाव",
      "तेज आवाज वाला चेतावनी सायरन और बैटरी इंडिकेटर शामिल"
    ],
    featuresMarathi: [
      "लगेच बसवण्यासाठी तयार संपूर्ण सेट: 12 KV मशीन (₹4600), 30 AH बॅटरी (₹3150), 40W सोलर पॅनेल (₹2000), 10 किलो GI वायर (₹1650) आणि 100 इन्सुलेटर (₹400) समाविष्ट",
      "ऑटो डे/नाईट कंट्रोलर: सायंकाळी आपोआप चालू होते आणि दिवसा बॅटरी वाचवते",
      "पाऊस आणि तीव्र उन्हापासून सुरक्षित वॉटरप्रूफ आणि मजबूत बॉडी",
      "भटकी जनावरे, माकड, जंगली डुक्कर आणि नीलगाय यांच्यापासून 100% सुरक्षित आणि अघातक संरक्षण",
      "मोठ्या आवाजाचा सायरन आणि बॅटरी इंडिकेटर समाविष्ट"
    ],
    packageContents: [
      "1 x FG-12KV Jhatka Main Machine Unit",
      "1 x 30 AH / 12V Dry Battery",
      "1 x 40W Monocrystalline Solar Panel",
      "1 x 10 Kg Galvanized GI Fence Wire Roll",
      "100 x Super-Tough Nylon Insulators",
      "1 x Warning Siren & Connection Cables",
      "4 x Warning Sign Boards"
    ],
    recommendedFor: ["Small & Medium Farms", "Stray Cattle", "Wild Boars", "Monkeys", "Blue Bulls (Nilgai)"]
  },
  {
    _id: "prod_jhatka_18kv_set",
    name: "Complete 18 KV Solar Fencing All-in-One Kit (18 KV Set)",
    nameHindi: "कम्प्लीट 18 KV सोलर फेंसिंग ऑल-इन-वन किट (18 KV हैवी सेट)",
    nameMarathi: "कम्प्लीट 18 KV सोलर कुंपण ऑल-इन-वन किट (18 KV हेवी सेट)",
    category: "jhatka_machine",
    tagline: "Heavy-Duty Package: 18 KV Machine + 30 AH Battery + 40W Panel + 10 Kg Wire + 100 Insulators",
    taglineHindi: "हैवी-ड्यूटी पैकेज: 18 KV मशीन + 30 AH बैटरी + 40W पैनल + 10 Kg तार + 100 इंसुलेटर",
    taglineMarathi: "हेवी-ड्युटी पॅकेज: 18 KV मशीन + 30 AH बॅटरी + 40W पॅनेल + 10 Kg वायर + 100 इन्सुलेटर",
    price: 12700,
    originalPrice: 16800,
    specifications: {
      voltageOutput: "18,000V High Power Dual Pulse Output",
      coverageArea: "Up to 40 Acres (approx. 8-10 km multi-strand fence perimeter)",
      batteryBackup: "30 AH Heavy Duty Battery (Up to 48-60 hours continuous backup)",
      pulseInterval: "1.1 Seconds with High/Low Power Selector",
      warranty: "2 Years Replacement & Service Warranty",
      solarPanelSize: "40W High-Efficiency Monocrystalline Panel"
    },
    image: "/images/jhatka-15kv.jpg",
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 186,
    features: [
      "Ultimate Heavy-Duty Set: Includes 18 KV Machine (₹5500), 30 AH Battery (₹3150), 40W Solar Panel (₹2000), 10 Kg GI Wire (₹1650), and 100 Insulators (₹400)",
      "High Power Dual Pulse Technology specifically engineered for thick-skinned animals like wild boars, nilgai, and elephants",
      "Dual Power Changeover: Can operate on Solar Battery as well as home 220V AC Grid power",
      "Digital LED Battery Level and Fence Voltage diagnostic meter built-in",
      "Heavy-Duty Copper Transformer with triple lightning arrestor surge protection"
    ],
    featuresHindi: [
      "अल्ट्रा हैवी-ड्यूटी सेट: 18 KV मशीन (₹5500), 30 AH बैटरी (₹3150), 40W सोलर पैनल (₹2000), 10 किलो GI तार (₹1650) और 100 इंसुलेटर (₹400) शामिल",
      "हाई पावर डुअल पल्स तकनीक: जंगली सूअर, नीलगाय और हाथियों की मोटी चमड़ी में तुरंत असरदार",
      "डुअल पावर सिस्टम: सोलर बैटरी और घर की 220V बिजली दोनों पर स्वचालित रूप से काम करता है",
      "डिजिटल LED बैटरी लेवल और फेंस वोल्टेज मीटर डिस्प्ले",
      "हैवी-ड्यूटी कॉपर ट्रांसफार्मर और बिजली/वोल्टेज बढ़ने से सुरक्षा का विशेष सर्किट"
    ],
    featuresMarathi: [
      "अल्ट्रा हेवी-ड्युटी सेट: 18 KV मशीन (₹5500), 30 AH बॅटरी (₹3150), 40W सोलर पॅनेल (₹2000), 10 किलो GI वायर (₹1650) आणि 100 इन्सुलेटर (₹400) समाविष्ट",
      "हाय पॉवर ड्युअल पल्स तंत्रज्ञान: जंगली डुक्कर, नीलगाय आणि हत्ती यांच्या जाड कातडीवर त्वरित प्रभावी",
      "ड्युअल पॉवर सिस्टम: सोलर बॅटरी आणि घरातील 220V वीज दोन्हीवर स्वयंचलितपणे चालते",
      "डिजिटल LED बॅटरी लेव्हल आणि कुंपण व्होल्टेज मीटर डिस्प्ले",
      "हेवी-ड्युटी कॉपर ट्रान्सफॉर्मर आणि वीज/व्होल्टेज वाढण्यापासून संरक्षणासाठी विशेष सर्किट"
    ],
    packageContents: [
      "1 x FG-18KV Heavy Duty Jhatka Main Machine Unit",
      "1 x 30 AH / 12V Dry Battery",
      "1 x 40W Monocrystalline Solar Panel",
      "1 x 10 Kg Galvanized GI Fence Wire Roll",
      "100 x Super-Tough Nylon Insulators",
      "1 x Weatherproof High-Decibel Siren & Connection Cables",
      "6 x Glow-in-the-dark Warning Sign Boards"
    ],
    recommendedFor: ["Large Farms", "Elephants", "Wild Boars", "Blue Bulls (Nilgai)", "Monkeys"]
  },
  {
    _id: "prod_jhatka_01",
    name: "FG-12KV FarmGuard Standalone Jhatka Machine (12 KV Unit)",
    nameHindi: "FG-12KV फार्मगार्ड स्टैंडअलोन झटका मशीन (12 KV यूनिट)",
    nameMarathi: "FG-12KV फार्मगार्ड स्टैंडअलोन झटका मशीन (12 KV युनिट)",
    category: "jhatka_machine",
    tagline: "High Efficiency 12 KV Pulsed Electric Fence Controller for Crop Protection",
    taglineHindi: "फसलों की सुरक्षा के लिए हाई एफिशिएंसी 12 KV पल्स्ड इलेक्ट्रिक फेंस कंट्रोलर",
    taglineMarathi: "पिकांच्या संरक्षणासाठी हाय एफिशिएंसी 12 KV पल्स्ड इलेक्ट्रिक कुंपण कंट्रोलर",
    price: 4600,
    originalPrice: 6200,
    specifications: {
      voltageOutput: "12,000V Pulsed Output",
      coverageArea: "Up to 20 Acres (approx. 4 km fence perimeter)",
      batteryBackup: "Supports 12V external battery (30 AH or 40 AH)",
      pulseInterval: "1.2 Seconds (ISI Compliant Non-Lethal Shock)",
      warranty: "1 Year Replacement Warranty",
      solarPanelSize: "Compatible with 40W Solar Panel"
    },
    image: "/images/jhatka-5kv.jpg",
    inStock: true,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 94,
    features: [
      "Standalone 12 KV Machine with Auto Day/Night Mode switcher",
      "Includes loud Warning Siren and connection cords for battery and solar panel",
      "Weatherproof IP65 rugged body resistant to rain, dust, and extreme farm temperatures",
      "100% Non-Lethal High Voltage Pulse that repels wild boars, cattle, and monkeys without physical injury"
    ],
    featuresHindi: [
      "स्टैंडअलोन 12 KV मशीन जिसमें शाम को ऑटोमैटिक चालू और सुबह बंद होने की सुविधा है",
      "तेज आवाज वाला चेतावनी सायरन और बैटरी/सोलर कनेक्शन केबल शामिल हैं",
      "बारिश, धूल और तेज गर्मी से सुरक्षित वाटरप्रूफ IP65 मजबूत बॉडी",
      "100% सुरक्षित झटका जो जानवरों को बिना चोट पहुंचाए खेत से दूर भगाता है"
    ],
    featuresMarathi: [
      "स्टैंडअलोन 12 KV मशीन ज्यामध्ये सायंकाळी आपोआप चालू आणि सकाळी बंद होण्याची सोय आहे",
      "मोठ्या आवाजाचा सायरन आणि बॅटरी/सोलर जोडणी केबल समाविष्ट आहे",
      "पाऊस, धूळ आणि तीव्र उष्णतेपासून सुरक्षित वॉटरप्रूफ IP65 मजबूत बॉडी",
      "100% सुरक्षित झटका जो जनावरांना इजा न करता शेतातून दूर पळवून लावतो"
    ],
    packageContents: [
      "1 x FG-12KV Jhatka Main Unit",
      "1 x High-Decibel Warning Siren",
      "1 x Battery & Solar Connection Cord with Clips",
      "2 x Warning Sign Boards for Fence",
      "1 x User & Installation Manual in Marathi/Hindi/English"
    ],
    recommendedFor: ["Stray Cattle", "Wild Boars", "Monkeys", "Nilgai"]
  },
  {
    _id: "prod_jhatka_02",
    name: "FG-18KV FarmGuard Heavy Duty Standalone Jhatka Machine (18 KV Unit)",
    nameHindi: "FG-18KV फार्मगार्ड हैवी ड्यूटी स्टैंडअलोन झटका मशीन (18 KV यूनिट)",
    nameMarathi: "FG-18KV फार्मगार्ड हेवी ड्युटी स्टैंडअलोन झटका मशीन (18 KV युनिट)",
    category: "jhatka_machine",
    tagline: "Commercial Grade 18 KV Multi-Pulse Fence Controller with Dual Power & Siren Alert",
    taglineHindi: "कमर्शियल ग्रेड 18 KV मल्टी-पल्स फेंस कंट्रोलर - डुअल पावर और सायरन अलर्ट के साथ",
    taglineMarathi: "कमर्शियल ग्रेड 18 KV मल्टी-पल्स कुंपण कंट्रोलर - ड्युअल पॉवर आणि सायरन अलर्टसह",
    price: 5500,
    originalPrice: 7500,
    specifications: {
      voltageOutput: "18,000V Ultra High Voltage Pulsed Output",
      coverageArea: "Up to 40 Acres (approx. 8-10 km fence perimeter)",
      batteryBackup: "Supports 30 AH or 40 AH External Battery",
      pulseInterval: "1.1 Seconds with High/Low Power Selector",
      warranty: "2 Years Replacement & Service Warranty",
      solarPanelSize: "Compatible with 40W Solar Panel"
    },
    image: "/images/jhatka-10kv.jpg",
    inStock: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 118,
    features: [
      "Standalone 18 KV Heavy-Duty Controller with dual AC/DC changeover technology",
      "High/Low Power Selector: Use Low Power for small animals and High Power for stubborn nilgai and wild boars",
      "Digital LED Battery Level and Fence Health Indicator Display",
      "Heavy-Duty Copper Transformer designed for consistent 24/7 pulse delivery even in wet monsoon weather"
    ],
    featuresHindi: [
      "स्टैंडअलोन 18 KV हैवी-ड्यूटी कंट्रोलर जो सोलर बैटरी और बिजली (220V AC) दोनों पर चलता है",
      "हाई/लो पावर स्विच: छोटे जानवरों के लिए लो पावर और जंगली सूअर/नीलगाय के लिए हाई पावर",
      "डिजिटल LED बैटरी लेवल और फेंस स्टेटस डिस्प्ले",
      "लगातार शक्तिशाली पल्स देने के लिए हैवी-ड्यूटी कॉपर ट्रांसफार्मर"
    ],
    featuresMarathi: [
      "स्टैंडअलोन 18 KV हेवी-ड्युटी कंट्रोलर जो सोलर बॅटरी आणि घरगुती वीज (220V AC) दोन्हीवर चालतो",
      "हाय/लो पॉवर स्विच: लहान प्राण्यांसाठी लो पॉवर आणि जंगली डुक्कर/नीलगाय यांच्यासाठी हाय पॉवर",
      "डिजिटल LED बॅटरी लेव्हल आणि कुंपण स्थिती दाखवणारा डिस्प्ले",
      "सातत्यपूर्ण शक्तिशाली पल्स देण्यासाठी हेवी-ड्युटी कॉपर ट्रान्सफॉर्मर"
    ],
    packageContents: [
      "1 x FG-18KV Heavy Duty Main Unit",
      "1 x Weatherproof Loud Siren",
      "1 x AC to DC Power Adapter Cable",
      "1 x Battery & Solar Connection Cable",
      "4 x Reflective Warning Signs"
    ],
    recommendedFor: ["Large Farms", "Elephants", "Wild Boars", "Blue Bulls (Nilgai)", "Stray Cattle"]
  },
  {
    _id: "prod_solar_01",
    name: "Complete Solar Power Pack (40W Panel + 30 AH Dry Battery Combo)",
    nameHindi: "कम्प्लीट सोलर पावर पैक (40W पैनल + 30 AH ड्राई बैटरी कॉम्बो)",
    nameMarathi: "कम्प्लीट सोलर पॉवर पॅक (40W पॅनेल + 30 AH ड्राय बॅटरी कॉम्बो)",
    category: "solar_accessories",
    tagline: "Maintenance-Free Power Bundle: 40W Solar Panel (₹2000) + 30 AH Battery (₹3150)",
    taglineHindi: "मेंटेनेंस-फ्री पावर बंडल: 40W सोलर पैनल (₹2000) + 30 AH बैटरी (₹3150)",
    taglineMarathi: "मेंटेनन्स-फ्री पॉवर बंडल: 40W सोलर पॅनेल (₹2000) + 30 AH बॅटरी (₹3150)",
    price: 5150,
    originalPrice: 6800,
    specifications: {
      voltageOutput: "12V DC Regulated Output / 40V Panel Rating",
      coverageArea: "Compatible with all 12 KV and 18 KV Jhatka models",
      batteryBackup: "30 AH Sealed Lead Acid (SMF) Zero-Maintenance Battery",
      pulseInterval: "Continuous DC Power Supply",
      warranty: "1 Year Battery & 10 Years Solar Panel Output Warranty",
      solarPanelSize: "40W High-Efficiency Monocrystalline Panel"
    },
    image: "/images/solar-pack.jpg",
    inStock: true,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 74,
    features: [
      "Combo Bundle: Includes 40W Monocrystalline Solar Panel (₹2000) and 30 AH SMF Dry Battery (₹3150)",
      "Generates continuous power even during cloudy or monsoon days",
      "30 AH SMF Battery requires zero water topping up for life",
      "Pre-wired with heavy-duty weatherproof connectors ready to plug into any Jhatka machine"
    ],
    featuresHindi: [
      "कॉम्बो बंडल: 40W मोनोक्रिस्टलाइन सोलर पैनल (₹2000) और 30 AH SMF ड्राई बैटरी (₹3150) शामिल",
      "बादलों और बारिश के मौसम में भी लगातार चार्जिंग और बिजली बैकअप सुनिश्चित करता है",
      "30 AH SMF बैटरी जिसमें कभी पानी डालने की जरूरत नहीं पड़ती",
      "मौसम-रोधी केबल और क्लिप्स के साथ किसी भी झटका मशीन से तुरंत जोड़ने के लिए तैयार"
    ],
    featuresMarathi: [
      "कॉम्बो बंडल: 40W मोनोक्रिस्टलाईन सोलर पॅनेल (₹2000) आणि 30 AH SMF ड्राय बॅटरी (₹3150) समाविष्ट",
      "ढगाळ आणि पावसाळी वातावरणातही सातत्यपूर्ण चार्जिंग आणि वीज बॅकअप सुनिश्चित करतो",
      "30 AH SMF बॅटरी ज्यामध्ये कधीही पाणी टाकण्याची गरज पडत नाही",
      "हवामान-रोधी केबल आणि क्लिप्ससह कोणत्याही झटका मशीनला त्वरित जोडण्यासाठी तयार"
    ],
    packageContents: [
      "1 x 40W Monocrystalline Solar Panel with Aluminum Frame",
      "1 x 12V 30 AH SMF Dry Battery",
      "1 x 5-Meter Solar Connecting Wire with Clips",
      "1 x Panel Mounting Bracket"
    ],
    recommendedFor: ["All Jhatka Machines", "Off-Grid Farms", "Remote Crop Fields"]
  },
  {
    _id: "prod_battery_30ah",
    name: "FG-30AH Heavy Duty Solar Dry Battery (30 AH / 12V SMF Battery)",
    nameHindi: "FG-30AH हैवी ड्यूटी सोलर ड्राई बैटरी (30 AH / 12V SMF बैटरी)",
    nameMarathi: "FG-30AH हेवी ड्युटी सोलर ड्राय बॅटरी (30 AH / 12V SMF बॅटरी)",
    category: "solar_accessories",
    tagline: "Zero-Maintenance 30 AH Sealed Lead Acid Battery for Long Fencing Backup",
    taglineHindi: "झटका मशीन के लंबे बैकअप के लिए जीरो-मेंटेनेंस 30 AH ड्राई बैटरी",
    taglineMarathi: "झटका मशीनच्या दीर्घ बॅकअपसाठी झिरो-मेंटेनन्स 30 AH ड्राय बॅटरी",
    price: 3150,
    originalPrice: 4200,
    specifications: {
      voltageOutput: "12V DC Regulated Output",
      coverageArea: "Compatible with all Jhatka controllers",
      batteryBackup: "30 Ampere-Hour (AH) capacity - Up to 48 hours continuous backup",
      pulseInterval: "N/A",
      warranty: "1 Year Complete Replacement Warranty",
      solarPanelSize: "Recommended 40W Solar Panel for fast charging"
    },
    image: "/images/solar-pack.jpg",
    inStock: true,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 62,
    features: [
      "30 AH Sealed Maintenance Free (SMF) Battery - Zero acid refilling needed",
      "Designed specifically for deep discharge and fast solar recharging cycles",
      "Provides up to 48 hours of continuous night-and-day backup during heavy monsoon rain",
      "Rugged leak-proof construction safe for outdoor farm environments"
    ],
    featuresHindi: [
      "30 AH सील्ड मेंटेनेंस फ्री (SMF) बैटरी - कभी तेजाब या पानी डालने की जरूरत नहीं",
      "डीप डिस्चार्ज और तेज सोलर चार्जिंग के लिए विशेष रूप से निर्मित",
      "लगातार 2 दिन बारिश रहने पर भी मशीन को रात-दिन बिना रुके चलाता है",
      "मजबूत और लीक-प्रूफ बॉडी जो खेत के कठोर वातावरण के लिए पूरी तरह सुरक्षित है"
    ],
    featuresMarathi: [
      "30 AH सील्ड मेंटेनन्स फ्री (SMF) बॅटरी - कधीही ॲसिड किंवा पाणी टाकण्याची गरज नाही",
      "डीप डिस्चार्ज आणि जलद सोलर चार्जिंगसाठी विशेषतः तयार केलेली",
      "सलग 2 दिवस पाऊस असला तरीही मशीनला रात्रंदिवस न थांबता चालवते",
      "मजबूत आणि लीक-प्रूफ बॉडी जी शेतातील कठीण वातावरणासाठी पूर्णपणे सुरक्षित आहे"
    ],
    packageContents: [
      "1 x 12V 30 AH SMF Dry Battery",
      "1 x Connection Terminal Screws & Protective Boots"
    ],
    recommendedFor: ["12 KV and 18 KV Machines", "Solar Street Lights", "Farm Inverters"]
  },
  {
    _id: "prod_battery_40ah",
    name: "FG-40AH Ultra Heavy Duty Solar Dry Battery (40 AH / 12V SMF Battery)",
    nameHindi: "FG-40AH अल्ट्रा हैवी ड्यूटी सोलर ड्राई बैटरी (40 AH / 12V SMF बैटरी)",
    nameMarathi: "FG-40AH अल्ट्रा हेवी ड्युटी सोलर ड्राय बॅटरी (40 AH / 12V SMF बॅटरी)",
    category: "solar_accessories",
    tagline: "Extra High Capacity 40 AH Dry Battery for Large 18 KV Machines & Cloudy Weather",
    taglineHindi: "बड़ी 18 KV मशीनों और लगातार बादलों के मौसम के लिए अतिरिक्त हाई कैपेसिटी 40 AH ड्राई बैटरी",
    taglineMarathi: "मोठ्या 18 KV मशीन्स आणि ढगाळ वातावरणासाठी अतिरिक्त हाय कॅपॅसिटी 40 AH ड्राय बॅटरी",
    price: 3850,
    originalPrice: 5000,
    specifications: {
      voltageOutput: "12V DC Regulated Output",
      coverageArea: "Ideal for large multi-acre perimeter fencing",
      batteryBackup: "40 Ampere-Hour (AH) capacity - Up to 72 hours (3 days) backup",
      pulseInterval: "N/A",
      warranty: "1 Year Replacement Warranty",
      solarPanelSize: "Compatible with 40W - 60W Solar Panels"
    },
    image: "/images/solar-pack.jpg",
    inStock: true,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 48,
    features: [
      "Extra High Capacity 40 AH SMF Battery delivering superior backup up to 72 hours (3 continuous days without sunlight)",
      "Zero maintenance leak-proof dry lead acid technology",
      "Ideal companion for 18 KV Heavy Duty machines guarding large 40+ acre farms",
      "Built-in overcharge and thermal stability protection"
    ],
    featuresHindi: [
      "अतिरिक्त हाई कैपेसिटी 40 AH SMF बैटरी जो बिना धूप के लगातार 3 दिनों (72 घंटे) तक शानदार बैकअप देती है",
      "जीरो मेंटेनेंस लीक-प्रूफ ड्राई बैटरी तकनीक",
      "40 एकड़ से बड़े खेतों की सुरक्षा करने वाली 18 KV हैवी-ड्यूटी मशीनों के लिए सबसे बेहतरीन विकल्प",
      "ओवरचार्ज और तापमान बढ़ने से सुरक्षा की तकनीक"
    ],
    featuresMarathi: [
      "अतिरिक्त हाय कॅपॅसिटी 40 AH SMF बॅटरी जी सूर्याप्रकाशाशिवाय सलग 3 दिवस (72 तास) उत्तम बॅकअप देते",
      "झिरो मेंटेनन्स लीक-प्रूफ ड्राय बॅटरी तंत्रज्ञान",
      "40 एकरांपेक्षा मोठ्या शेतांचे संरक्षण करणाऱ्या 18 KV हेवी-ड्युटी मशीन्ससाठी सर्वोत्तम पर्याय",
      "ओव्हरचार्ज आणि तापमान वाढण्यापासून संरक्षणाची विशेष सोय"
    ],
    packageContents: [
      "1 x 12V 40 AH SMF Dry Battery",
      "1 x Heavy Duty Terminal Connectors"
    ],
    recommendedFor: ["18 KV Heavy Duty Machines", "Large Farm Installations", "Monsoon Prone Regions"]
  },
  {
    _id: "prod_panel_40w",
    name: "FG-40W High Efficiency Monocrystalline Solar Panel (40V / 40 Watt)",
    nameHindi: "FG-40W हाई एफिशिएंसी मोनोक्रिस्टलाइन सोलर पैनल (40V / 40 वॉट)",
    nameMarathi: "FG-40W हाय एफिशिएंसी मोनोक्रिस्टलाईन सोलर पॅनेल (40V / 40 वॉट)",
    category: "solar_accessories",
    tagline: "Fast Charging 40 Watt Solar Panel with Weatherproof Aluminum Frame",
    taglineHindi: "तेज चार्जिंग करने वाला 40 वॉट सोलर पैनल - मौसम-रोधी एल्युमिनियम फ्रेम के साथ",
    taglineMarathi: "जलद चार्जिंग करणारे 40 वॉट सोलर पॅनेल - हवामान-रोधी ॲल्युमिनियम फ्रेमसह",
    price: 2000,
    originalPrice: 2800,
    specifications: {
      voltageOutput: "18V - 40V Peak Voltage Rating",
      coverageArea: "Sufficient to fully charge 30 AH & 40 AH batteries daily",
      batteryBackup: "Charges battery fully within 5-6 hours of sunlight",
      pulseInterval: "N/A",
      warranty: "10 Years Power Output Guarantee",
      solarPanelSize: "40 Watt Monocrystalline High Efficiency Cells"
    },
    image: "/images/solar-pack.jpg",
    inStock: true,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 81,
    features: [
      "High Efficiency Monocrystalline cells produce charging current even during early morning and cloudy skies",
      "Sturdy anodized aluminum frame withstands heavy winds, hail, and monsoon storms",
      "Pre-fitted waterproof junction box with diode protection against night-time reverse current drainage",
      "Easily mounts on farm poles or roof brackets at 25-30° tilt"
    ],
    featuresHindi: [
      "हाई एफिशिएंसी मोनोक्रिस्टलाइन सेल्स जो सुबह सवेरे और बादलों के मौसम में भी करंट बनाते हैं",
      "मजबूत एल्युमिनियम फ्रेम जो तेज हवाओं, ओलों और तूफानी बारिश का आसानी से सामना करता है",
      "वाटरप्रूफ जंक्शन बॉक्स जो रात के समय बैटरी से करंट वापस रिवर्स होने से रोकता है",
      "खंभे या छत पर 25-30° के कोण पर आसानी से फिट हो जाता है"
    ],
    featuresMarathi: [
      "हाय एफिशिएंसी मोनोक्रिस्टलाईन सेल्स जे पहाटे आणि ढगाळ वातावरणातही उत्तम करंट निर्माण करतात",
      "मजबूत ॲल्युमिनियम फ्रेम जी सोसाट्याचा वारा, गारा आणि वादळी पावसाचा सहज सामना करते",
      "वॉटरप्रूफ जंक्शन बॉक्स जो रात्रीच्या वेळी बॅटरीमधून करंट मागे परत जाण्यापासून रोखतो",
      "खांबावर किंवा छतावर 25-30° कोनात सहज बसते"
    ],
    packageContents: [
      "1 x 40W / 40V Solar Panel",
      "1 x Pre-connected Connecting Cord",
      "1 x Mounting Hardware Bolts"
    ],
    recommendedFor: ["30 AH Battery", "40 AH Battery", "Solar Fencing Systems"]
  },
  {
    _id: "prod_wire_10kg",
    name: "FG-WIRE10KG Galvanized GI Fencing Wire (10 Kg Roll)",
    nameHindi: "FG-WIRE10KG गैल्वनाइज्ड GI फेंसिंग तार (10 किलो का बंडल)",
    nameMarathi: "FG-WIRE10KG गॅल्वनाईज्ड GI कुंपण तार (10 किलोचा बंडल)",
    category: "insulators_wires",
    tagline: "Anti-Rust Heavy Duty GI Wire for High Voltage Pulse Conductivity (10 Kg)",
    taglineHindi: "जंग-रोधी हैवी ड्यूटी GI तार - करंट का शानदार प्रवाह सुनिश्चित करने के लिए (10 किलो)",
    taglineMarathi: "गंज-रोधी हेवी ड्युटी GI तार - करंटचा उत्तम प्रवाह सुनिश्चित करण्यासाठी (10 किलो)",
    price: 1650,
    originalPrice: 2200,
    specifications: {
      voltageOutput: "Tested up to 25,000V high voltage pulse carrying capacity",
      coverageArea: "10 Kg Roll covers approx. 1,000 to 1,200 meters length (single strand)",
      batteryBackup: "N/A",
      pulseInterval: "N/A",
      warranty: "5 Years Anti-Rust Galvanized Zinc Coating Guarantee",
      solarPanelSize: "N/A"
    },
    image: "/images/insulators.jpg",
    inStock: true,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 110,
    features: [
      "10 Kg Heavy Duty Roll: Premium grade hot-dip galvanized GI wire with double zinc coating to prevent rust",
      "High tensile strength resists snapping when pushed by cattle or wild animals",
      "Low electrical resistance ensures full 12 KV or 18 KV shock reaches even the furthest corners of your farm",
      "Smooth finish safe for handling during installation with insulators and strainers"
    ],
    featuresHindi: [
      "10 किलो का हैवी ड्यूटी बंडल: जंग से बचाने के लिए डबल जिंक कोटिंग वाला प्रीमियम गैल्वनाइज्ड GI तार",
      "मजबूत खिंचाव क्षमता जो जानवरों के धक्का मारने पर भी आसानी से नहीं टूटता",
      "कम इलेक्ट्रिकल रेजिस्टेंस जिससे 12 KV या 18 KV का पूरा झटका खेत के आखिरी कोने तक पहुंचता है",
      "इंसुलेटर के साथ आसानी से कसने और लगाने के लिए स्मूथ फिनिश"
    ],
    featuresMarathi: [
      "10 किलोचा हेवी ड्युटी बंडल: गंजण्यापासून वाचवण्यासाठी डबल झिंक कोटिंग असलेली प्रीमियम गॅल्वनाईज्ड GI तार",
      "मजबूत ताण सहन करण्याची क्षमता ज्यामुळे जनावरांनी धक्का मारला तरीही सहज तुटत नाही",
      "कमी इलेक्ट्रिकल रेझिस्टन्स ज्यामुळे 12 KV किंवा 18 KV चा पूर्ण झटका शेताच्या शेवटच्या कोपऱ्यापर्यंत पोहोचतो",
      "इन्सुलेटरसोबत सहज बसवण्यासाठी आणि ओढण्यासाठी गुळगुळीत फिनिश"
    ],
    packageContents: [
      "1 x 10 Kg Roll Galvanized GI Fencing Wire"
    ],
    recommendedFor: ["All Jhatka Fencing Installations", "Multi-Strand Perimeter Protection"]
  },
  {
    _id: "prod_insulators_01",
    name: "FG-INS100 Super-Tough Nylon Insulators (100 Pieces Pack)",
    nameHindi: "FG-INS100 सुपर-टफ नायलॉन इंसुलेटर (100 पीस का पैकेट)",
    nameMarathi: "FG-INS100 सुपर-टफ नायलॉन इन्सुलेटर (100 पीसचे पॅकेट)",
    category: "insulators_wires",
    tagline: "UV-Stabilized Virgin Nylon Insulators to Prevent Voltage Leakage (100 Pcs @ ₹400)",
    taglineHindi: "खंभों पर करंट लीकेज रोकने वाले UV-स्टेबलाइज्ड नायलॉन इंसुलेटर (100 पीस केवल ₹400 में)",
    taglineMarathi: "खांबांवर करंट लीकेज रोखणारे UV-स्टेबलाईज्ड नायलॉन इन्सुलेटर (100 पीस फक्त ₹400 मध्ये)",
    price: 400,
    originalPrice: 650,
    specifications: {
      voltageOutput: "Tested for up to 25,000V insulation breakdown resistance",
      coverageArea: "100 Pcs pack is sufficient for approx. 2 to 3 Acres of 3-strand fencing",
      batteryBackup: "N/A",
      pulseInterval: "N/A",
      warranty: "5 Years Anti-Weather UV Degradation Guarantee",
      solarPanelSize: "N/A"
    },
    image: "/images/insulators.jpg",
    inStock: true,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 135,
    features: [
      "100 Pieces Economy Pack for only ₹400 (₹4 per piece)",
      "Made from 100% Virgin High-Density Nylon engineered specifically for high-voltage pulse insulation",
      "Prevents current loss to ground even during heavy rain or morning dew",
      "Quick screw-in design works with wooden posts, cement pillars, and iron angles"
    ],
    featuresHindi: [
      "केवल ₹400 में 100 पीस का किफायती पैकेट (₹4 प्रति पीस)",
      "हाई-वोल्टेज पल्स इंसुलेशन के लिए 100% वर्जिन हाई-डेंसिटी नायलॉन से निर्मित",
      "भारी बारिश और ओस में भी जमीन में करंट लीकेज को रोकता है",
      "लकड़ी, सीमेंट और लोहे के खंभों पर आसानी से फिट होने वाला डिजाइन"
    ],
    featuresMarathi: [
      "फक्त ₹400 मध्ये 100 पीसचे किफायतशीर पॅकेट (₹4 प्रति पीस)",
      "हाय-व्होल्टेज पल्स इन्सुलेशनसाठी 100% व्हर्जिन हाय-डेन्सिटी नायलॉनपासून बनवलेले",
      "मुसळधार पाऊस आणि दव पडतानाही जमिनीत करंट लीकेज रोखते",
      "लाकडी, सिमेंट आणि लोखंडी खांबांवर सहज बसणारी रचना"
    ],
    packageContents: [
      "100 x Ring / Bobbin Insulators with Nails/Screws"
    ],
    recommendedFor: ["GI Wire Fencing", "Wooden & Cement Posts", "High Voltage Fences"]
  },
  {
    _id: "prod_agri_01",
    name: "FarmGuard Heavy Duty 4-Stroke Brush Cutter & Crop Harvester",
    nameHindi: "फार्मगार्ड हैवी ड्यूटी 4-स्ट्रोक ब्रश कटर और फसल कटाई मशीन",
    nameMarathi: "फार्मगार्ड हेवी ड्युटी 4-स्ट्रोक ब्रश कटर आणि पीक कापणी मशीन",
    category: "agri_machinery",
    tagline: "Multi-Purpose Farm Assistant for Weeding, Paddy/Wheat Harvesting, and Grass Cutting",
    taglineHindi: "खरपतवार हटाने, धान/गेहूं की कटाई और घास काटने के लिए मल्टी-पर्पज कृषि मशीन",
    taglineMarathi: "तण काढण्यासाठी, भात/गहू कापणीसाठी आणि गवत कापण्यासाठी मल्टी-पर्पज कृषी मशीन",
    price: 11499,
    originalPrice: 15999,
    specifications: {
      voltageOutput: "50cc 4-Stroke Petrol Engine (3.2 HP)",
      coverageArea: "Harvester capacity: 1 Acre in 3 to 4 Hours",
      batteryBackup: "1.2L Fuel Tank (Runs 2.5 hours per liter)",
      pulseInterval: "7500 RPM High Torque Gearbox",
      warranty: "1 Year Engine & Carburetor Warranty",
      solarPanelSize: "N/A"
    },
    image: "/images/brush-cutter.jpg",
    inStock: true,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 76,
    features: [
      "Powerful & Fuel-Efficient 4-Stroke Engine: No separate oil-petrol mixing required, easy recoil start",
      "Multi-Attachment Compatibility: Includes 3-Teeth Blade, 80-Teeth Paddy Harvesting Blade, and Nylon Trimmer Head",
      "Ergonomic Bike-Handle with padded double shoulder harness for fatigue-free operation",
      "Heavy-Duty Aluminum Shaft and Japanese bevel gear bearing for vibration damping"
    ],
    featuresHindi: [
      "शक्तिशाली और कम तेल खाने वाला 4-स्ट्रोक इंजन: पेट्रोल में मोबिल ऑयल मिलाने की झंझट नहीं",
      "मल्टी-अटैचमेंट: 3-दंते ब्लेड, 80-दंते धान कटाई ब्लेड और घास ट्रिमर हेड शामिल",
      "आरामदायक डबल शोल्डर बेल्ट और बाइक-हैंडल डिजाइन से बिना थके घंटों काम करें",
      "मजबूत एल्युमिनियम शाफ्ट और वाइब्रेशन कम करने वाले जापानी बियरिंग"
    ],
    featuresMarathi: [
      "शक्तिशाली आणि कमी इंधन वापरणारे 4-स्ट्रोक इंजिन: पेट्रोलमध्ये ऑईल मिसळण्याची झंझट नाही",
      "मल्टी-अटॅचमेंट: 3-दाती ब्लेड, 80-दाती भात कापणी ब्लेड आणि गवत ट्रिमर हेड समाविष्ट",
      "आरामदायी डबल शोल्डर बेल्ट आणि बाईक-हँडल डिझाईनमुळे न थकता तासनतास काम करा",
      "मजबूत ॲल्युमिनियम शाफ्ट आणि व्हायब्रेशन कमी करणारे जपानी बेअरिंग्ज"
    ],
    packageContents: [
      "1 x 50cc 4-Stroke Engine & Shaft",
      "1 x 80T Crop Harvesting Blade with Crop Catcher Guard",
      "1 x 3T Heavy Duty Bush Blade",
      "1 x Nylon Trimmer Head",
      "1 x Double Padded Shoulder Harness Belt",
      "1 x Tool Kit & Eye Safety Goggles"
    ],
    recommendedFor: ["Paddy Harvesting", "Wheat Harvesting", "Weed Clearing", "Orchard Maintenance"]
  },
  {
    _id: "prod_agri_02",
    name: "Smart Solar Water Pump Controller with Auto Dry-Run Protector",
    nameHindi: "स्मार्ट सोलर वाटर पंप कंट्रोलर एवं ऑटो ड्राई-रन प्रोटेक्टर",
    nameMarathi: "स्मार्ट सोलर वॉटर पंप कंट्रोलर आणि ऑटो ड्राय-रन प्रोटेक्टर",
    category: "agri_machinery",
    tagline: "Protect Submersible & Surface Pumps from Burning Out due to Low Water or Voltage Fluctuations",
    taglineHindi: "पानी खत्म होने या वोल्टेज घटने-बढ़ने से मोटर जलने से बचाने वाला स्मार्ट कंट्रोलर",
    taglineMarathi: "पाणी संपल्यास किंवा व्होल्टेज कमी-जास्त झाल्यास मोटर जळण्यापासून वाचवणारा स्मार्ट कंट्रोलर",
    price: 4299,
    originalPrice: 6200,
    specifications: {
      voltageOutput: "Compatible with 1 HP to 5 HP Single & 3-Phase Motors",
      coverageArea: "Works with Solar PV Arrays and Grid Supply",
      batteryBackup: "Digital LCD Voltage & Current Display",
      pulseInterval: "Under/Over Voltage Tripping < 0.5 sec",
      warranty: "18 Months Replacement Warranty",
      solarPanelSize: "Supports VFD Solar Pump Drivers"
    },
    image: "/images/solar-pump-controller.jpg",
    inStock: true,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 43,
    features: [
      "Smart Sensorless Dry-Run Protection: Automatically shuts off motor instantly when well/borewell water level drops",
      "Precision Over-Voltage, Under-Voltage, and Phase-Loss Protection",
      "Automatic Timer Mode: Set daily watering schedules (e.g. run pump for 2 hours every morning)",
      "LED Status Display showing real-time voltage, ampere load, and fault diagnostic codes"
    ],
    featuresHindi: [
      "स्मार्ट ड्राई-रन सुरक्षा: कुएं या बोरवेल में पानी कम होते ही मोटर को तुरंत बंद कर जलने से बचाता है",
      "हाई और लो वोल्टेज तथा फेज कटने पर स्वचालित सुरक्षा",
      "ऑटोमेटिक टाइमर मोड: हर दिन पानी चलाने का समय तय करें (जैसे हर सुबह 2 घंटे)",
      "रीयल-टाइम वोल्टेज, करंट और फॉल्ट कोड दिखाने वाला LED डिस्प्ले"
    ],
    featuresMarathi: [
      "स्मार्ट ड्राय-रन सुरक्षा: विहीर किंवा बोअरवेलमधील पाणी कमी होताच मोटर त्वरित बंद करून जळण्यापासून वाचवतो",
      "हाय आणि लो व्होल्टेज तसेच फेज गेल्यावर स्वयंचलित सुरक्षा",
      "ऑटोमॅटिक टायमर मोड: दररोज पाणी भरण्याची वेळ सेट करा (उदा. दररोज सकाळी 2 तास)",
      "रीअल-टाईम व्होल्टेज, करंट आणि फॉल्ट कोड दाखवणारा LED डिस्प्ले"
    ],
    packageContents: [
      "1 x Smart Pump Controller Unit",
      "3 x Stainless Steel Water Level Sensors with 10m Wire",
      "1 x Installation Manual & Wiring Guide"
    ],
    recommendedFor: ["Borewell Pumps", "Open Well Submersibles", "Solar Irrigation Systems"]
  },
  {
    _id: "prod_agri_03",
    name: "Solar-Powered Automatic Drip Irrigation & Fertilizer Controller",
    nameHindi: "सोलर स्वचालित ड्रिप सिंचाई और फर्टिलाइजर कंट्रोलर",
    nameMarathi: "सोलर स्वयंचलित ठिबक सिंचन आणि फर्टिलायझर कंट्रोलर",
    category: "agri_machinery",
    tagline: "Automate Farm Watering & Fertigation precisely by Schedule without Grid Electricity",
    taglineHindi: "बिना बिजली के निर्धारित समय पर खेतों में सटीक सिंचाई और खाद पहुंचाने की स्वचालित मशीन",
    taglineMarathi: "विजेशिवाय ठरलेल्या वेळी शेतात अचूक पाणी आणि खत पोहोचवणारी स्वयंचलित मशीन",
    price: 5499,
    originalPrice: 7800,
    specifications: {
      voltageOutput: "Operates 12V Latching Solenoid Valves (Included)",
      coverageArea: "Controls up to 4 Independent Irrigation Zones / Plots",
      batteryBackup: "Built-in Solar Panel + Rechargeable Li-ion Battery",
      pulseInterval: "Programmable from 1 minute to 12 hours duration",
      warranty: "1 Year Comprehensive Warranty",
      solarPanelSize: "Built-in 5W Solar Top Charger"
    },
    image: "/images/drip-controller.jpg",
    inStock: true,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 31,
    features: [
      "100% Wireless & Solar Powered: No mains AC wiring needed across vast farm fields",
      "4-Zone Independent Control: Schedule different watering durations for vegetables, fruit trees, and flowers",
      "Rain Sensor Port: Automatically pauses irrigation during monsoon rain to prevent waterlogging",
      "Large Weather-Resistant LCD Screen with intuitive dial controls for easy setting by farm workers"
    ],
    featuresHindi: [
      "100% वायरलेस और सोलर चालित: दूर खेतों तक बिजली के तार ले जाने की आवश्यकता नहीं",
      "4-जोन स्वतंत्र नियंत्रण: सब्जियों, फलों और फूलों के लिए अलग-अलग समय पर पानी दें",
      "रेन सेंसर पोर्ट: बारिश होने पर अपने आप सिंचाई रोक देता है जिससे खेत में पानी नहीं भरता",
      "बड़ा वाटरप्रूफ LCD स्क्रीन और आसान डायल कंट्रोल जिससे कोई भी किसान आसानी से सेट कर सके"
    ],
    featuresMarathi: [
      "100% वायरलेस आणि सोलरवर चालणारे: दूरच्या शेतांपर्यंत विजेच्या तारा नेण्याची गरज नाही",
      "4-झोन स्वतंत्र नियंत्रण: भाज्या, फळबागा आणि फुलांसाठी वेगवेगळ्या वेळी पाणी द्या",
      "रेन सेन्सर पोर्ट: पाऊस सुरू झाल्यावर आपोआप सिंचन थांबवतो ज्यामुळे शेतात पाणी साचत नाही",
      "मोठा वॉटरप्रूफ LCD स्क्रीन आणि सोपे डायल कंट्रोल ज्यामुळे कोणताही शेतकरी सहज सेट करू शकतो"
    ],
    packageContents: [
      "1 x Solar Drip Controller Unit",
      "2 x 1-Inch Motorized Solenoid Valves",
      "1 x Soil Moisture/Rain Sensor Unit",
      "1 x Quick Connect Fittings Kit"
    ],
    recommendedFor: ["Vegetable Farming", "Fruit Orchards", "Polyhouse & Greenhouses"]
  }
];

export default fallbackProducts;
