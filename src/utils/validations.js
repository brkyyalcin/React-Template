import * as yup from "yup";

let loginValidations = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir mail adresi giriniz!")
    .required("Email girmek zorunludur."),
  password: yup
    .string()
    .required("Şifre girmek zorunludur.")
    .min(6, "Şifre en az 6 karakterden oluşmalıdır."),
});

export default { loginValidations };
