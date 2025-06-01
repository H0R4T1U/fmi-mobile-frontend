import FloatingHeader from "../../components/common/FloatingHeader";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import TabelPrezente from "../../components/academic/TabelPrezente";
import MateriiDropDown from "../../components/academic/MateriiDropDown";
import { useTranslation } from "react-i18next";
import useToken from "../../utils/hooks/useToken";
import useFetch from "../../utils/hooks/useFetch";
import Constants from "expo-constants";
import ErrorView from "../../components/common/ErrorView";
import LoadingView from "../../components/common/LoadingView";
import { CacheManager } from "../../utils/CacheManager";

const { BACKEND } = Constants.expoConfig.extra;

export default function PrezenteScreen() {
    const { t } = useTranslation();
    const [selectedMaterie, setSelectedMaterie] = useState(null);
    const [prezente, setPrezente] = useState([]);
    const { token, tokenError, tokenLoading } = useToken();
    const {data: courses, dataError: coursesError, dataLoading: coursesLoading} = useFetch({
        token,
        address: `${BACKEND}/api/courses`,
        hasToken: true,
    });

    const materiiList = courses
        ? Object.keys(courses).map((key) => ({ label: key, value: key }))
        : [];

    const getCacheKeyForCourse = (materie) => `prezente_${materie}`;

    const genereazaSaptamani = (tipValori) => {
        const saptamani = [];

        for (let i = 1; i <= 14; i++) {
            const rand = { week: i };
            let hasActivity = false;

            if (tipValori["Laborator"] && Array.isArray(tipValori["Laborator"]) && tipValori["Laborator"][0] !== -1) {
                const tip = tipValori["Laborator"][0];

                const shouldShow = tip === 0 || (tip === 1 && i % 2 === 1) || (tip === 2 && i % 2 === 0);

                if (shouldShow) {
                    rand.laborator = "ABSENT";
                    hasActivity = true;
                } else {
                    rand.laborator = "";
                }
            }
            if (tipValori["Seminar"] && Array.isArray(tipValori["Seminar"]) && tipValori["Seminar"][0] !== -1) {
                const tip = tipValori["Seminar"][0];
                const shouldShow = tip === 0 || (tip === 1 && i % 2 === 1) || (tip === 2 && i % 2 === 0);

                if (shouldShow) {
                    rand.seminar = "ABSENT";
                    hasActivity = true;
                } else {
                    rand.seminar = "";
                }
            }

            if (hasActivity) {
                saptamani.push(rand);
            }
        }

        return saptamani;
    };

    useEffect(() => {
        const loadPrezente = async () => {
            if (selectedMaterie && courses && courses[selectedMaterie]) {
                const cacheKey = getCacheKeyForCourse(selectedMaterie);
                const cachedPrezente = await CacheManager.get(cacheKey);
                if (cachedPrezente) {
                    setPrezente(cachedPrezente);
                } else {
                    const tipuri = courses[selectedMaterie];
                    const generated = genereazaSaptamani(tipuri);
                    setPrezente(generated);
                    await CacheManager.set(cacheKey, generated);
                }
            }
        };
        loadPrezente();
    }, [selectedMaterie, courses]);

    const handleUpdatePrezente = async (newPrezenteOrFunction) => {
        const newPrezente = typeof newPrezenteOrFunction === 'function'
            ? newPrezenteOrFunction(prezente)
            : newPrezenteOrFunction;
        if (newPrezente === undefined || newPrezente === null) {
            await CacheManager.remove(getCacheKeyForCourse(selectedMaterie));
            setPrezente([]);
        } else {
            setPrezente(newPrezente);
            await CacheManager.set(getCacheKeyForCourse(selectedMaterie), newPrezente);
        }
    };

    if (tokenLoading || coursesLoading)
        return <LoadingView headerText={t("attendances").toUpperCase()} />;

    if (tokenError || coursesError)
        return <ErrorView error={tokenError || coursesError} headerText={t("attendances").toUpperCase()} />;

    const getTipuriForTable = () => {
        if (!selectedMaterie || !courses || !courses[selectedMaterie]) return null;

        const materie = courses[selectedMaterie];

        const getLaboratorData = () => {
            const lab = materie["Laborator"];
            return Array.isArray(lab) && lab[0] !== -1;
        };

        const getSeminarData = () => {
            const sem = materie["Seminar"];
            return Array.isArray(sem) && sem[0] !== -1;
        };

        return {
            showLaborator: getLaboratorData(),
            showSeminar: getSeminarData(),
            tipLaborator: Array.isArray(materie["Laborator"]) ? materie["Laborator"][0] : null,
            tipSeminar: Array.isArray(materie["Seminar"]) ? materie["Seminar"][0] : null,
        };
    };

    const tipuriTable = getTipuriForTable();

    return (
        <>
            <FloatingHeader text={t("attendances").toUpperCase()} />
            <MateriiDropDown
                items={materiiList}
                onSelectMaterie={setSelectedMaterie}
                selectedValue={selectedMaterie}
            />
            {selectedMaterie && (
                <TabelPrezente
                    examene={prezente}
                    setPrezente={handleUpdatePrezente}
                    tipuri={tipuriTable}
                />
            )}
        </>
    );
}
