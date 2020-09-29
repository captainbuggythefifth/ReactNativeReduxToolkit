export const EN = "en";
export const NL = "nl";
export const DEFAULT = EN;

export const EN_LONG = "ENGLISH";
export const NL_LONG = "DUTCH";

export const PERSISTENCE_KEY = "LanguagePersistenceKey";

export interface IAvailableLabelsValues {
    label: string,
    value: string
}

export const AVAILABLE_LABELS_VALUES: IAvailableLabelsValues[] = [
    {
        label: EN_LONG,
        value: EN
    },
    {
        label: NL_LONG,
        value: NL
    }
]