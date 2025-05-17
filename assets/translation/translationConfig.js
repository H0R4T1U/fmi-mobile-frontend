import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ro: {
        translation: {
            profile: 'PROFIL',
            student: 'STUDENT',
            credentials: 'CREDENTIALE',
            logout: 'DECONECTARE',
            number: 'NR. MATRICOL',
            code: 'COD',
            username:'USERNAME',
            password:'PAROLA'
        }
    },
    en: {
        translation: {
            profile: 'PROFILE',
            student: 'STUDENT',
            credentials: 'CREDENTIALS',
            logout: 'LOG OUT',
            number: 'STUDENT NR.',
            code: 'CODE',
            username:'USERNAME',
            password:'PASSWORD'
        }
    },
    de: {
        translation: {
            profile: 'PROFIL',
            student: 'STUDENT',
            credentials: 'ZUGANGSDATEN',
            logout: 'ABMELDEN',
            number: 'MATR.-NR.',
            code: 'CODE',
            username:'BENTUZER',
            password:'PASSWORT'
        }
    },
    hu: {
        translation: {
            profile: 'PROFIL',
            student: 'HALLGATO',
            credentials: 'BEJELENTKEZESI ADATOK',
            logout: 'KIJELENTKEZES',
            number: 'NEPTUN SZAM',
            code: 'KOD',
            username:'FELHASZNALO',
            password:'JELSZO'
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ro',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;