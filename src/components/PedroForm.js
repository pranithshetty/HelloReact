// react-hook-form with yup validation

import { useForm } from "react-hook-form";
import * as yup from "yup"; //for form validation
import { yupResolver } from "@hookform/resolvers/yup";
export const PedroForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    mail: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required("Age is required!"),
    password: yup.string().min(4).max(10).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords dont match ")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input placeholder="Full Name" {...register("fullName")} />
      <p style={{ color: "red" }}>{errors.fullName?.message}</p>
      <input placeholder="mail" {...register("mail")} />
      <p style={{ color: "red" }}>{errors.mail?.message}</p>
      <input placeholder="Age" type="number" {...register("age")} />
      <p style={{ color: "red" }}>{errors.age?.message}</p>
      <input placeholder="Pasword" type="password" {...register("password")} />
      <p style={{ color: "red" }}>{errors.password?.message}</p>
      <input
        placeholder="Confirm Password"
        type="password"
        {...register("confirmPassword")}
      />
      <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
