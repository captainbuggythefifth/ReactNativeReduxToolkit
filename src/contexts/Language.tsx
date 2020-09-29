import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import Persistence from "helpers/Persistence";
import { LANGUAGE } from "common";
import { IAvailableLabelsValues } from "common/configs/language";
import i18n from "i18n-js";
import memoize from "lodash.memoize";
import * as RNLocalize from "react-native-localize";
import { I18nManager } from "react-native";

type Props = {
    children: React.ReactNode
};

const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    [LANGUAGE.EN]: () => require("./../translations/en.json"),
    [LANGUAGE.NL]: () => require("./../translations/nl.json"),
};

const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

interface II8nConfig {
    languageTag: string,
    isRTL: boolean
}

const setI18nConfig = (language: string = LANGUAGE.DEFAULT) => {
    // fallback if no available language fits
    const fallback: II8nConfig = {
        languageTag: language,
        isRTL: false
    };

    let useConfig = fallback

    // const rNLocalizeFindBestAvailableLanguage = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;

    /* const rNLocalizeFindBestAvailableLanguage = RNLocalize.findBestAvailableLanguage([language]) || fallback;

    if (rNLocalizeFindBestAvailableLanguage.languageTag === LANGUAGE.EN || rNLocalizeFindBestAvailableLanguage.languageTag === LANGUAGE.NL) {
        useConfig = rNLocalizeFindBestAvailableLanguage
    } else {
        useConfig = fallback
    } */

    // clear translation cache
    // @ts-ignore
    translate.cache.clear();
    // update layout direction
    I18nManager.forceRTL(useConfig.isRTL);

    // set i18n-js config
    i18n.translations = {
        // @ts-ignore
        [useConfig.languageTag]: translationGetters[useConfig.languageTag]()
    };
    i18n.locale = useConfig.languageTag;
};

export interface ILanguageContextProps {
    language: string,
    availableLanguages: IAvailableLabelsValues[],
    setLanguage: (value: string) => void,
    translate: Function
}

setI18nConfig();

export const LanguageContext = React.createContext<ILanguageContextProps>({
    language: LANGUAGE.DEFAULT,
    availableLanguages: LANGUAGE.AVAILABLE_LABELS_VALUES,
    setLanguage: (value: string) => { },
    translate,
});

export const useLanguageHook = () => {
    const persistence = new Persistence(AsyncStorage);

    const availableLanguages = LANGUAGE.AVAILABLE_LABELS_VALUES;

    const [language, setLanguage] = React.useState<string>(LANGUAGE.DEFAULT);

    const setPersistLanguage = async (_language: string) => {
        persistence.store(LANGUAGE.PERSISTENCE_KEY, _language);
        setLanguage(_language);
        setI18nConfig(_language);
    }

    React.useEffect(() => {
        
        const checkLanguage = async () => {
            const currentLanguage = await persistence.retreive(LANGUAGE.PERSISTENCE_KEY);

            if (currentLanguage) {
                setI18nConfig(currentLanguage);
                setLanguage(currentLanguage);
            }

        };
        checkLanguage();
    }, []);


    return {
        language,
        availableLanguages,
        setLanguage: setPersistLanguage,
        translate
    }
}

export const LanguageProvider = ({ children }: Props) => {

    const availableLanguages = LANGUAGE.AVAILABLE_LABELS_VALUES;
    const { language, setLanguage, translate } = useLanguageHook();

    return (
        <LanguageContext.Provider value={{
            language,
            availableLanguages,
            setLanguage,
            translate
        }}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useLanguage = () => React.useContext(LanguageContext);
