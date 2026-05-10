import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    portfolio: 'اعمالنا',
    customerService: 'خدمة العملاء',
    contact: 'اتصل بنا',
    
    // Homepage
    welcome: 'مرحباً بكم في',
    shopName: 'Bob Flower Store',
    heroSubtitle: 'أجمل الورود والباقات لجميع مناسباتكم الخاصة',
    ourGallery: 'معرض الصور',
    viewAllPortfolio: 'عرض جميع الأعمال',
    shopNow: 'تسوق الآن',
    
    // Portfolio
    portfolioTitle: 'معرض أعمالنا',
    portfolioSubtitle: 'استكشف مجموعتنا الرائعة من باقات الورود وتنسيقات الزهور',
    instagramFeed: 'آخر منشوراتنا على إنستغرام',
    viewOnInstagram: 'مشاهدة على إنستغرام',
    addInstagramLink: 'يمكنك إضافة رابط إنستغرام الخاص بك هنا',
    instagramPlaceholder: 'https://instagram.com/yourprofile',
    
    // Customer Service
    customerServiceTitle: 'خدمة العملاء',
    customerServiceSubtitle: 'نحن هنا لخدمتكم',
    deliveryTitle: 'التوصيل',
    deliveryDesc: 'نوفر خدمة التوصيل السريع لجميع أنحاء المدينة',
    qualityTitle: 'الجودة',
    qualityDesc: 'نختار أجود أنواع الورود الطازجة يومياً',
    supportTitle: 'الدعم',
    supportDesc: 'فريق خدمة العملاء متاح على مدار الساعة',
    customTitle: 'تصميم خاص',
    customDesc: 'نصمم باقات خاصة حسب طلبك ومناسبتك',
    
    // Contact
    contactTitle: 'اتصل بنا',
    contactSubtitle: 'نسعد بتواصلكم معنا',
    getInTouch: 'تواصل معنا',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    followUs: 'تابعنا',
    sendMessage: 'أرسل رسالة',
    name: 'الاسم',
    message: 'الرسالة',
    submit: 'إرسال',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    home: 'Home',
    portfolio: 'Portfolio',
    customerService: 'Customer Service',
    contact: 'Contact',
    
    // Homepage
    welcome: 'Welcome to',
    shopName: 'Bob Flower Store',
    heroSubtitle: 'The most beautiful roses and bouquets for all your special occasions',
    ourGallery: 'Our Gallery',
    viewAllPortfolio: 'View All Portfolio',
    shopNow: 'Shop Now',
    
    // Portfolio
    portfolioTitle: 'Our Portfolio',
    portfolioSubtitle: 'Explore our stunning collection of rose bouquets and flower arrangements',
    instagramFeed: 'Latest from Instagram',
    viewOnInstagram: 'View on Instagram',
    addInstagramLink: 'You can add your Instagram link here',
    instagramPlaceholder: 'https://instagram.com/yourprofile',
    
    // Customer Service
    customerServiceTitle: 'Customer Service',
    customerServiceSubtitle: 'We are here to serve you',
    deliveryTitle: 'Delivery',
    deliveryDesc: 'We provide fast delivery service throughout the city',
    qualityTitle: 'Quality',
    qualityDesc: 'We select the finest fresh roses daily',
    supportTitle: 'Support',
    supportDesc: 'Customer service team available 24/7',
    customTitle: 'Custom Design',
    customDesc: 'We design special bouquets according to your request and occasion',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'We are happy to hear from you',
    getInTouch: 'Get in Touch',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    followUs: 'Follow Us',
    sendMessage: 'Send Message',
    name: 'Name',
    message: 'Message',
    submit: 'Submit',
    
    // Footer
    allRightsReserved: 'All Rights Reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
