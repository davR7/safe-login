"use client";
import styles from "./signinform.module.css";
import { signIn } from "next-auth/react";
import { loginErrors } from "./loginErrors";
import { ICredentials } from "./types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICredentials>();

  const router = useRouter();

  const onSubmit = async ({ email, password }: ICredentials) => {
    const response = await signIn("credentials", { email, password, redirect: false, callbackUrl: "/" });

    if (response?.ok) {
      router.push(response.url!);
    }
  };

  return (
    <>
      <h3 className={styles.titleForm}>Conecte-se</h3>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            {...register("email", loginErrors.email)}
            name="email"
            type="email"
            className={styles.input}
            placeholder="Email"
          />
          {errors?.email && <p className={styles.inputError}>{errors.email.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <input
            {...register("password", loginErrors.password)}
            name="password"
            type="password"
            className={styles.input}
            placeholder="Senha"
          />
          {errors?.password && <p className={styles.inputError}>{errors.password.message}</p>}
        </div>
        <button className={styles.btnForm} type="button" onClick={() => handleSubmit(onSubmit)()}>
          Entrar
        </button>
      </form>
    </>
  );
}
