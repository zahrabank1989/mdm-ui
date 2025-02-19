import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    username: "Username",
                    password: "Password",
                    farab: "ّFarab",
                    lan:"FA",
                    sign_in:"Sign in"
                },
            },
            fa: {
                translation: {
                    username: "نام کاربری",
                    password: "رمز عبور",
                    farab: "فراب",
                    lan:"EN",
                    sign_in:"ورود به سامانه"
                },
            },
        },
        lng: "fa", // Default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
