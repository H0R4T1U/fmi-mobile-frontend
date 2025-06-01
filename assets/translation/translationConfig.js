import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ro: {
        translation: {
            profile: 'Profil',
            student: 'STUDENT',
            credentials: 'CREDENTIALE',
            logout: 'DECONECTARE',
            number: 'NR. MATRICOL',
            code: 'COD',
            username:'USERNAME',
            password:'PAROLA',
            news: 'Stiri',
            fees: 'Taxe',
            exams: 'Examene',
            grades: 'Consultare Note',
            attendances: 'Prezente',
            academic: 'Academic',
            timetable: 'ORAR',
            buildings: 'Cladiri',
            monday: 'Luni',
            tuesday: 'Marti',
            wednesday: 'Miercuri',
            thursday: 'Joi',
            friday: 'Vineri',
        }
    },
    en: {
        translation: {
            profile: 'Profile',
            student: 'STUDENT',
            credentials: 'CREDENTIALS',
            logout: 'LOG OUT',
            number: 'STUDENT NR.',
            code: 'CODE',
            username:'USERNAME',
            password:'PASSWORD',
            news: 'News',
            fees: 'Fees',
            exams: 'Exams',
            grades: 'Grades',
            attendances: 'Attendance',
            academic: 'Academic',
            timetable: 'TIMETABLE',
            buildings: 'Buildings',
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
        }
    },
    de: {
        translation: {
            profile: 'Profil',
            student: 'STUDENT',
            credentials: 'ZUGANGSDATEN',
            logout: 'ABMELDEN',
            number: 'MATR.-NR.',
            code: 'CODE',
            username:'BENTUZER',
            password:'PASSWORT',
            news: 'Nachricht',
            fees: 'Gebühren',
            exams: 'Prüfungen',
            grades: 'Noten',
            attendances: 'Anwesenheit',
            academic: 'Akademisch',
            timetable: 'STUNDENPLAN',
            buildings: 'Gebäude',
            monday: "Montag",
            tuesday: "Dienstag",
            wednesday: "Mittwoch",
            thursday: "Donnerstag",
            friday: "Freitag",
        }
    },
    hu: {
        translation: {
            profile: 'Profil',
            student: 'HALLGATO',
            credentials: 'BEJELENTKEZESI ADATOK',
            logout: 'KIJELENTKEZES',
            number: 'NEPTUN SZAM',
            code: 'KOD',
            username:'FELHASZNALO',
            password:'JELSZO',
            news: 'Hirek',
            fees: 'Díjak',
            exams: 'Vizsgák',
            grades: 'Jegyek',
            attendances: 'Jelenlét',
            academic: 'Akadémiai',
            timetable: 'ORAREND',
            buildings: 'Epületek',
            monday: "Hétfő",
            tuesday: "Kedd",
            wednesday: "Szerda",
            thursday: "Csütörtök",
            friday: "Péntek",
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