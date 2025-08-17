// src/components/CheckoutForm/CheckoutForm.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./CheckoutForm.css"; // <-- ЗМІНА 1: Простий імпорт стилів

// Схема валідації залишається без змін
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Ім'я є обов'язковим"),
  lastName: Yup.string().required("Прізвище є обов'язковим"),
  age: Yup.number()
    .typeError("Вік повинен бути числом")
    .required("Вік є обов'язковим")
    .positive("Вік повинен бути позитивним числом")
    .integer("Вік повинен бути цілим числом"),
  address: Yup.string().required("Адреса доставки є обов'язковою"),
  phone: Yup.string()
    .required("Мобільний телефон є обов'язковим")
    .matches(/^\+?[0-9]{10,12}$/, "Некоректний формат телефону"),
});

const CheckoutForm = ({ onCheckout }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Дані замовлення:", data);
    alert("Дякуємо за покупку!");
    onCheckout();
  };

  // <-- ЗМІНА 2: Використовуємо звичайні рядки для className
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      {" "}
      {/* НЕ styles.form */}
      <h2>Оформлення замовлення</h2>
      <div className="formField">
        {" "}
        {/* НЕ styles.formField */}
        <label>Ім'я</label>
        <input type="text" {...register("firstName")} />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}{" "}
        {/* НЕ styles.error */}
      </div>
      <div className="formField">
        <label>Прізвище</label>
        <input type="text" {...register("lastName")} />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
      </div>
      <div className="formField">
        <label>Вік</label>
        <input type="number" {...register("age")} />
        {errors.age && <p className="error">{errors.age.message}</p>}
      </div>
      <div className="formField">
        <label>Адреса доставки</label>
        <input type="text" {...register("address")} />
        {errors.address && <p className="error">{errors.address.message}</p>}
      </div>
      <div className="formField">
        <label>Мобільний телефон</label>
        <input type="tel" {...register("phone")} />
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </div>
      <button type="submit" className="checkoutButton">
        Checkout
      </button>{" "}
      {/* НЕ styles.checkoutButton */}
    </form>
  );
};

export default CheckoutForm;
