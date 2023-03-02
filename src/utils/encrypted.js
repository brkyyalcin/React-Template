var CryptoJS = require("crypto-js");

const KEY = "BC275234A5CC2L5C";
const IV = "8080808080808080";

export function Decrypt(securedText) {
  let chipper = CryptoJS.enc.Base64.parse(securedText);
  var plaintextArray = CryptoJS.AES.decrypt(
    { ciphertext: chipper },
    CryptoJS.enc.Utf8.parse(KEY),
    {
      keySize: 16,
      iv: CryptoJS.enc.Utf8.parse(IV),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );
  return plaintextArray.toString(CryptoJS.enc.Utf8);
}

export function Encrypt(plainText) {
  var encryptedlogin = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(plainText),
    CryptoJS.enc.Utf8.parse(KEY),
    {
      keySize: 128 / 8,
      iv: CryptoJS.enc.Utf8.parse(IV),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  ).toString();
  return encryptedlogin;
}
