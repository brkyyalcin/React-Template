import { t } from "i18next";

/**
 * Returns i18n Translate
 * @param {string} value  the word you want to translate
 */

export const GetWord = (value) => {
  return t(value);
};

export const getLocalstorage = (value) => {
  return JSON.parse(localStorage.getItem(value));
};

export const setLocalstorage = (value, data) => {
  localStorage.setItem(value, JSON.stringify(data));
};

export const removeLocalstorage = (value) => {
  localStorage.removeItem(value);
};
