import { t } from "i18next";

/**
 * Returns i18n Translate
 * @param {string} value  the word you want to translate
 */

export const GetWord = (value) => {
  return t(value);
};
