const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const themePanel = document.querySelector("#themePanel");
const themeToggle = document.querySelector("#themeToggle");
const swatches = document.querySelectorAll(".swatch");
const scrollDownButton = document.querySelector("#scrollDown");
const scrollTopButton = document.querySelector("#scrollTop");
const languageToggle = document.querySelector("#languageToggle");
const languageList = document.querySelector("#languageList");
const newsletterForm = document.querySelector("#newsletterForm");
const newsletterMessage = document.querySelector("#newsletterMessage");
const translations = {
  EN: {
    text: {
      ".brand strong": "Mayra Transport AI",
      ".brand small": "Smart Logistics",
      ".language-list button:nth-child(1)": "English",
      ".language-list button:nth-child(2)": "Hindi",
      ".main-nav a:nth-child(1)": "Services",
      ".main-nav a:nth-child(2)": "Process",
      ".main-nav a:nth-child(3)": "Fleet",
      ".main-nav a:nth-child(4)": "Contact",
      ".theme-card h2": "Color Settings",
      ".theme-card p": "Change website theme",
      ".hero-content h1": "Predict routes, assign vehicles, and track cargo in real time.",
      ".hero-copy": "A futuristic logistics demo for smart dispatch, live shipment intelligence, fleet utilization, and risk-aware delivery planning.",
      ".hero-actions .primary": "Get Quote",
      ".hero-actions .secondary": "View Services",
      ".tracking-panel h2": "AI Track",
      ".tracking-panel label": "Consignment ID",
      "#trackResult": "Enter a demo ID to generate an AI shipment status.",
      ".ai-strip article:nth-child(1) strong": "Route Prediction",
      ".ai-strip article:nth-child(1) p": "Detects delays, toll pressure, traffic density, and better corridors.",
      ".ai-strip article:nth-child(2) strong": "Smart Matching",
      ".ai-strip article:nth-child(2) p": "Pairs cargo size, urgency, location, and vehicle availability.",
      ".ai-strip article:nth-child(3) strong": "Live Risk Score",
      ".ai-strip article:nth-child(3) p": "Flags route exceptions, late pickup risk, and unloading bottlenecks.",
      ".stats article:nth-child(1) span": "AI Service Zones",
      ".stats article:nth-child(2) span": "Smart Loads",
      ".stats article:nth-child(3) span": "Prediction Accuracy",
      ".stats article:nth-child(4) span": "Connected Vehicles",
      "#services .section-heading .eyebrow": "Intelligent service verticals",
      "#services .section-heading h2": "AI-assisted cargo planning for daily, project, and stored loads.",
      ".service-logo-row figure:nth-child(1) figcaption": "FTL Cargo",
      ".service-logo-row figure:nth-child(2) figcaption": "Part Load",
      ".service-logo-row figure:nth-child(3) figcaption": "Project Cargo",
      ".service-logo-row figure:nth-child(4) figcaption": "Warehouse",
      ".service-card:nth-child(1) h3": "AI Full Truck Loads",
      ".service-card:nth-child(1) p": "Dedicated vehicle movement with predictive route timing and automated dispatch suggestions.",
      ".service-card:nth-child(2) h3": "Smart Part Loads",
      ".service-card:nth-child(2) p": "Shared movement recommendations based on lane demand, capacity, and delivery windows.",
      ".service-card:nth-child(3) h3": "Risk-Aware ODC",
      ".service-card:nth-child(3) p": "Heavy and oversized movement planning with route constraints and checkpoint visibility.",
      ".service-card:nth-child(4) h3": "Warehouse Signals",
      ".service-card:nth-child(4) p": "Storage, loading, and dispatch support with queue alerts and inventory movement cues.",
      "#process .eyebrow": "AI dispatch flow",
      "#process h2": "From request to delivery, every step gets a smarter signal.",
      ".timeline article:nth-child(1) h3": "Scan",
      ".timeline article:nth-child(1) p": "Capture pickup, delivery, load type, timing, and constraints.",
      ".timeline article:nth-child(2) h3": "Predict",
      ".timeline article:nth-child(2) p": "Estimate timing, vehicle fit, route confidence, and delivery risk.",
      ".timeline article:nth-child(3) h3": "Dispatch",
      ".timeline article:nth-child(3) p": "Assign the right vehicle and keep operators aligned with live updates.",
      ".timeline article:nth-child(4) h3": "Resolve",
      ".timeline article:nth-child(4) p": "Share completion status, delivery proof, and trip performance summary.",
      "#fleet .eyebrow": "Fleet intelligence",
      "#fleet h2": "Choose vehicles with smarter utilization signals.",
      "#fleet > div:first-child p:last-child": "Choose from LCV, container, open body, trailer, and project vehicles. Each trip can include route scoring, dispatch priority, driver coordination, and loading updates.",
      ".quote .eyebrow": "AI quote builder",
      ".quote h2": "Describe the load and let the system prepare the next move.",
      ".quote-form button": "Submit Request",
      ".site-footer strong": "Mayra Transport AI",
      ".footer-col:nth-child(1) p": "AI-assisted logistics, cargo, fleet, and warehousing services for faster business movement.",
      ".footer-col:nth-child(2) h2": "Page Links",
      ".footer-col:nth-child(2) a:nth-child(2)": "Home",
      ".footer-col:nth-child(2) a:nth-child(3)": "Services",
      ".footer-col:nth-child(2) a:nth-child(4)": "Process",
      ".footer-col:nth-child(2) a:nth-child(5)": "Fleet",
      ".footer-col:nth-child(2) a:nth-child(6)": "Quote",
      ".footer-col:nth-child(3) h2": "Important Links",
      ".footer-col:nth-child(3) a:nth-child(2)": "Book Transport",
      ".footer-col:nth-child(3) a:nth-child(3)": "Track Shipment",
      ".footer-col:nth-child(3) a:nth-child(4)": "Call Support",
      ".footer-col:nth-child(3) a:nth-child(5)": "WhatsApp Help",
      ".footer-col:nth-child(3) a:nth-child(6)": "Email Us",
      ".newsletter-form h2": "Newsletter",
      ".newsletter-form p": "Get route updates, transport offers, and service news.",
      ".newsletter-form button": "Subscribe",
      ".copyright-bar p:nth-child(1)": "Copyright © 2026 Mayra Transport AI. All rights reserved.",
      ".copyright-bar p:nth-child(2)": "Company: Mayra Transport AI | Developer: Codex Demo",
      ".whatsapp-button": "WA WhatsApp",
      ".call-button": "☎ Call"
    },
    tailText: {
      ".hero-content .eyebrow": " AI-powered transport command"
    },
    labels: {
      "name": "Full Name",
      "phone": "Mobile Number",
      "pickup": "Pickup Address",
      "delivery": "Delivery Address",
      "details": "Load Details",
      "newsletterEmail": "Email Address"
    },
    placeholders: {
      "trackingId": "MT-2026-1088",
      "name": "Your name",
      "phone": "+91 98765 43210",
      "pickup": "Bhiwandi, warehouse road",
      "delivery": "Pune, industrial area",
      "details": "Material, weight, vehicle type, date",
      "newsletterEmail": "your@email.com"
    },
    fleet: {
      "LCV / LPT": "AI recommends LCV trucks for dense city lanes and short-distance cargo.",
      "Container": "AI recommends container trucks for protected box movement and packed goods.",
      "Open Body": "AI recommends open body trucks for industrial material and large consignments.",
      "Trailer": "AI recommends trailers for oversized, heavy, and project logistics loads."
    },
    statuses: [
      "AI score 82: booked and awaiting best-fit vehicle assignment.",
      "AI score 91: vehicle assigned with pickup call scheduled.",
      "AI score 88: cargo loaded, route is clear, ETA is stable.",
      "AI score 76: final delivery active with moderate unloading risk.",
      "AI score 96: delivered with proof of delivery available."
    ],
    emptyTracking: "Please enter a consignment ID.",
    newsletterMessage: "Thanks. Newsletter subscription saved.",
    quoteMessage: (name, pickup, delivery) => `Thanks ${name}. AI quote draft generated for ${pickup} to ${delivery}.`
  },
  HI: {
    text: {
      ".brand strong": "मायरा ट्रांसपोर्ट AI",
      ".brand small": "स्मार्ट लॉजिस्टिक्स",
      ".language-list button:nth-child(1)": "English",
      ".language-list button:nth-child(2)": "हिंदी",
      ".main-nav a:nth-child(1)": "सेवाएं",
      ".main-nav a:nth-child(2)": "प्रक्रिया",
      ".main-nav a:nth-child(3)": "फ्लीट",
      ".main-nav a:nth-child(4)": "संपर्क",
      ".theme-card h2": "रंग सेटिंग",
      ".theme-card p": "वेबसाइट थीम बदलें",
      ".hero-content h1": "रूट का अनुमान लगाएं, वाहन असाइन करें, और कार्गो को रियल टाइम में ट्रैक करें।",
      ".hero-copy": "स्मार्ट डिस्पैच, लाइव शिपमेंट जानकारी, फ्लीट उपयोग और सुरक्षित डिलीवरी प्लानिंग के लिए आधुनिक लॉजिस्टिक्स डेमो।",
      ".hero-actions .primary": "कोट पाएं",
      ".hero-actions .secondary": "सेवाएं देखें",
      ".tracking-panel h2": "AI ट्रैक",
      ".tracking-panel label": "कंसाइनमेंट ID",
      "#trackResult": "AI शिपमेंट स्थिति देखने के लिए डेमो ID डालें।",
      ".ai-strip article:nth-child(1) strong": "रूट अनुमान",
      ".ai-strip article:nth-child(1) p": "देरी, टोल, ट्रैफिक और बेहतर रास्तों की पहचान करता है।",
      ".ai-strip article:nth-child(2) strong": "स्मार्ट मिलान",
      ".ai-strip article:nth-child(2) p": "कार्गो आकार, तात्कालिकता, लोकेशन और वाहन उपलब्धता को मिलाता है।",
      ".ai-strip article:nth-child(3) strong": "लाइव रिस्क स्कोर",
      ".ai-strip article:nth-child(3) p": "रूट समस्या, पिकअप देरी और अनलोडिंग जोखिम को दिखाता है।",
      ".stats article:nth-child(1) span": "AI सेवा क्षेत्र",
      ".stats article:nth-child(2) span": "स्मार्ट लोड",
      ".stats article:nth-child(3) span": "अनुमान सटीकता",
      ".stats article:nth-child(4) span": "कनेक्टेड वाहन",
      "#services .section-heading .eyebrow": "स्मार्ट सेवा श्रेणियां",
      "#services .section-heading h2": "दैनिक, प्रोजेक्ट और स्टोरेज लोड के लिए AI आधारित कार्गो प्लानिंग।",
      ".service-logo-row figure:nth-child(1) figcaption": "FTL कार्गो",
      ".service-logo-row figure:nth-child(2) figcaption": "पार्ट लोड",
      ".service-logo-row figure:nth-child(3) figcaption": "प्रोजेक्ट कार्गो",
      ".service-logo-row figure:nth-child(4) figcaption": "वेयरहाउस",
      ".service-card:nth-child(1) h3": "AI फुल ट्रक लोड",
      ".service-card:nth-child(1) p": "समय अनुमान और ऑटो डिस्पैच सुझाव के साथ समर्पित वाहन मूवमेंट।",
      ".service-card:nth-child(2) h3": "स्मार्ट पार्ट लोड",
      ".service-card:nth-child(2) p": "लेन मांग, क्षमता और डिलीवरी समय के अनुसार साझा मूवमेंट सुझाव।",
      ".service-card:nth-child(3) h3": "रिस्क-अवेयर ODC",
      ".service-card:nth-child(3) p": "भारी और बड़े कार्गो के लिए रूट बाधा और चेकपॉइंट विजिबिलिटी।",
      ".service-card:nth-child(4) h3": "वेयरहाउस संकेत",
      ".service-card:nth-child(4) p": "स्टोरेज, लोडिंग और डिस्पैच में क्यू अलर्ट और इन्वेंटरी संकेत।",
      "#process .eyebrow": "AI डिस्पैच फ्लो",
      "#process h2": "रिक्वेस्ट से डिलीवरी तक हर कदम पर स्मार्ट संकेत।",
      ".timeline article:nth-child(1) h3": "स्कैन",
      ".timeline article:nth-child(1) p": "पिकअप, डिलीवरी, लोड प्रकार, समय और जरूरतें कैप्चर करें।",
      ".timeline article:nth-child(2) h3": "अनुमान",
      ".timeline article:nth-child(2) p": "समय, वाहन फिट, रूट भरोसा और डिलीवरी जोखिम का अनुमान लगाएं।",
      ".timeline article:nth-child(3) h3": "डिस्पैच",
      ".timeline article:nth-child(3) p": "सही वाहन असाइन करें और ऑपरेटर को लाइव अपडेट दें।",
      ".timeline article:nth-child(4) h3": "पूरा करें",
      ".timeline article:nth-child(4) p": "पूर्ण स्थिति, डिलीवरी प्रूफ और ट्रिप रिपोर्ट शेयर करें।",
      "#fleet .eyebrow": "फ्लीट इंटेलिजेंस",
      "#fleet h2": "बेहतर उपयोग संकेतों के साथ वाहन चुनें।",
      "#fleet > div:first-child p:last-child": "LCV, कंटेनर, ओपन बॉडी, ट्रेलर और प्रोजेक्ट वाहन चुनें। हर ट्रिप में रूट स्कोर, डिस्पैच प्राथमिकता, ड्राइवर समन्वय और लोडिंग अपडेट शामिल हो सकते हैं।",
      ".quote .eyebrow": "AI कोट बिल्डर",
      ".quote h2": "लोड की जानकारी दें और सिस्टम अगला मूव तैयार करे।",
      ".quote-form button": "रिक्वेस्ट भेजें",
      ".site-footer strong": "मायरा ट्रांसपोर्ट AI",
      ".footer-col:nth-child(1) p": "तेज बिजनेस मूवमेंट के लिए AI आधारित लॉजिस्टिक्स, कार्गो, फ्लीट और वेयरहाउस सेवाएं।",
      ".footer-col:nth-child(2) h2": "पेज लिंक",
      ".footer-col:nth-child(2) a:nth-child(2)": "होम",
      ".footer-col:nth-child(2) a:nth-child(3)": "सेवाएं",
      ".footer-col:nth-child(2) a:nth-child(4)": "प्रक्रिया",
      ".footer-col:nth-child(2) a:nth-child(5)": "फ्लीट",
      ".footer-col:nth-child(2) a:nth-child(6)": "कोट",
      ".footer-col:nth-child(3) h2": "महत्वपूर्ण लिंक",
      ".footer-col:nth-child(3) a:nth-child(2)": "ट्रांसपोर्ट बुक करें",
      ".footer-col:nth-child(3) a:nth-child(3)": "शिपमेंट ट्रैक करें",
      ".footer-col:nth-child(3) a:nth-child(4)": "सपोर्ट कॉल",
      ".footer-col:nth-child(3) a:nth-child(5)": "व्हाट्सऐप मदद",
      ".footer-col:nth-child(3) a:nth-child(6)": "ईमेल करें",
      ".newsletter-form h2": "न्यूजलेटर",
      ".newsletter-form p": "रूट अपडेट, ट्रांसपोर्ट ऑफर और सेवा समाचार पाएं।",
      ".newsletter-form button": "सब्सक्राइब",
      ".copyright-bar p:nth-child(1)": "कॉपीराइट © 2026 मायरा ट्रांसपोर्ट AI. सर्वाधिकार सुरक्षित।",
      ".copyright-bar p:nth-child(2)": "कंपनी: मायरा ट्रांसपोर्ट AI | डेवलपर: Codex Demo",
      ".whatsapp-button": "WA व्हाट्सऐप",
      ".call-button": "☎ कॉल"
    },
    tailText: {
      ".hero-content .eyebrow": " AI-पावर्ड ट्रांसपोर्ट कमांड"
    },
    labels: {
      "name": "पूरा नाम",
      "phone": "मोबाइल नंबर",
      "pickup": "पिकअप पता",
      "delivery": "डिलीवरी पता",
      "details": "लोड विवरण",
      "newsletterEmail": "ईमेल पता"
    },
    placeholders: {
      "trackingId": "MT-2026-1088",
      "name": "आपका नाम",
      "phone": "+91 98765 43210",
      "pickup": "भिवंडी, वेयरहाउस रोड",
      "delivery": "पुणे, इंडस्ट्रियल एरिया",
      "details": "मटेरियल, वजन, वाहन प्रकार, तारीख",
      "newsletterEmail": "your@email.com"
    },
    fleet: {
      "LCV / LPT": "AI शहर के छोटे रूट और कम दूरी के कार्गो के लिए LCV ट्रक सुझाता है।",
      "Container": "AI सुरक्षित पैक्ड माल के लिए कंटेनर ट्रक सुझाता है।",
      "Open Body": "AI बड़े औद्योगिक सामान के लिए ओपन बॉडी ट्रक सुझाता है।",
      "Trailer": "AI भारी और प्रोजेक्ट लॉजिस्टिक्स लोड के लिए ट्रेलर सुझाता है।"
    },
    statuses: [
      "AI स्कोर 82: बुक हो गया है और सही वाहन असाइनमेंट बाकी है।",
      "AI स्कोर 91: वाहन असाइन हो गया है, पिकअप कॉल शेड्यूल है।",
      "AI स्कोर 88: कार्गो लोड हो गया है, रूट साफ है और ETA स्थिर है।",
      "AI स्कोर 76: फाइनल डिलीवरी चालू है, अनलोडिंग जोखिम मध्यम है।",
      "AI स्कोर 96: डिलीवर हो गया है, डिलीवरी प्रूफ उपलब्ध है।"
    ],
    emptyTracking: "कृपया कंसाइनमेंट ID डालें।",
    newsletterMessage: "धन्यवाद. न्यूजलेटर सब्सक्रिप्शन सेव हो गया है।",
    quoteMessage: (name, pickup, delivery) => `धन्यवाद ${name}. ${pickup} से ${delivery} के लिए AI कोट ड्राफ्ट तैयार है।`
  }
};
let currentLanguage = "EN";

const savedTheme = localStorage.getItem("mayra-theme") || "fresh";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isOpen = themePanel.classList.toggle("open");
  themeToggle.setAttribute("aria-expanded", String(isOpen));
});

swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    applyTheme(swatch.dataset.theme);
    localStorage.setItem("mayra-theme", swatch.dataset.theme);
  });
});

const savedLanguage = localStorage.getItem("mayra-language") || "EN";
setLanguage(savedLanguage);

languageToggle.addEventListener("click", () => {
  const isOpen = languageList.classList.toggle("open");
  languageToggle.setAttribute("aria-expanded", String(isOpen));
});

languageList.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
    localStorage.setItem("mayra-language", button.dataset.language);
    languageList.classList.remove("open");
    languageToggle.setAttribute("aria-expanded", "false");
  });
});

function setLanguage(language) {
  const dictionary = translations[language] || translations.EN;
  currentLanguage = language;
  languageToggle.querySelector("span").textContent = language;
  document.documentElement.lang = language === "HI" ? "hi" : "en";

  Object.entries(dictionary.text).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  });

  Object.entries(dictionary.tailText).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element && element.childNodes.length > 1) {
      element.childNodes[element.childNodes.length - 1].nodeValue = value;
    }
  });

  Object.entries(dictionary.labels).forEach(([name, value]) => {
    const field = document.querySelector(`[name="${name}"]`);
    const label = field?.closest("label");
    if (label && label.firstChild) label.firstChild.nodeValue = `${value}\n            `;
  });

  Object.entries(dictionary.placeholders).forEach(([name, value]) => {
    const field = document.querySelector(`[name="${name}"], #${name}`);
    if (field) field.placeholder = value;
  });

  document.querySelectorAll(".fleet-option").forEach((button) => {
    button.dataset.fleet = dictionary.fleet[button.textContent.trim()];
  });

  const activeFleet = document.querySelector(".fleet-option.active");
  if (activeFleet) document.querySelector("#fleetNote").textContent = activeFleet.dataset.fleet;

  const whatsappButton = document.querySelector(".whatsapp-button");
  const callButton = document.querySelector(".call-button");
  if (whatsappButton) whatsappButton.innerHTML = language === "HI" ? "<span>WA</span> व्हाट्सऐप" : "<span>WA</span> WhatsApp";
  if (callButton) callButton.innerHTML = language === "HI" ? "<span>☎</span> कॉल" : "<span>☎</span> Call";
}

scrollDownButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function applyTheme(theme) {
  document.body.classList.remove("theme-deep", "theme-lime");

  if (theme !== "fresh") {
    document.body.classList.add(`theme-${theme}`);
  }

  swatches.forEach((swatch) => {
    swatch.classList.toggle("active", swatch.dataset.theme === theme);
  });
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const trackingForm = document.querySelector("#trackingForm");
const trackResult = document.querySelector("#trackResult");

trackingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = new FormData(trackingForm).get("trackingId").trim();

  if (!value) {
    trackResult.textContent = "Please enter a consignment ID.";
    trackResult.style.color = "#c83c21";
    return;
  }

  const statuses = translations[currentLanguage].statuses;
  const status = statuses[Math.abs(hashCode(value)) % statuses.length];
  trackResult.textContent = `${value.toUpperCase()}: ${status}`;
  trackResult.style.color = "#0f8f72";
});

document.querySelectorAll(".fleet-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".fleet-option").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#fleetNote").textContent = button.dataset.fleet;
  });
});

const quoteForm = document.querySelector("#quoteForm");
const formMessage = document.querySelector("#formMessage");
const quoteParams = new URLSearchParams(window.location.search);

["name", "phone", "pickup", "delivery"].forEach((field) => {
  const value = quoteParams.get(field);
  const input = quoteForm.elements[field];

  if (value && input) {
    input.value = value;
  }
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const name = data.get("name").trim();
  const pickup = data.get("pickup").trim();
  const delivery = data.get("delivery").trim();

  formMessage.textContent = translations[currentLanguage].quoteMessage(name, pickup, delivery);
  quoteForm.reset();
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletterMessage.textContent = translations[currentLanguage].newsletterMessage;
  newsletterForm.reset();
});

const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const target = Number(entry.target.dataset.count);
    const suffix = target === 98 ? "%" : "+";
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 55));

    const timer = setInterval(() => {
      current = Math.min(target, current + step);
      entry.target.textContent = `${current}${suffix}`;

      if (current >= target) {
        clearInterval(timer);
      }
    }, 24);

    observer.unobserve(entry.target);
  });
}, { threshold: 0.35 });

counters.forEach((counter) => counterObserver.observe(counter));

function hashCode(text) {
  return text.split("").reduce((hash, char) => {
    return ((hash << 5) - hash) + char.charCodeAt(0);
  }, 0);
}
