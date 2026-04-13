"use client";
import { useResetPasswordRequest } from "@/services/auth.request";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiHide, BiShow } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import * as yup from "yup";

interface ResetPasswordProps {
  token: string;
}

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must not exceed 15 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .min(6, "Confirm Password must be at least 6 characters")
    .max(32, "Confirm Password must not exceed 15 characters"),
});

export default function ResetPassword({ token }: ResetPasswordProps) {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate: resetPassword, isPending } = useResetPasswordRequest();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = async (data: any) => {
    if (data?.password !== data?.confirmPassword) {
      toast.error("Password does not match");
      return;
    }

    const payload = {
      password: data?.password,
    };

    resetPassword(
      { payload, token },
      {
        onSuccess: (data) => {
          toast.success(data?.message);
          setTimeout(() => {
            router.push("/login");
          }, 5000);
        },
        onError: () => {
          console.log("error occured");
        },
      },
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#111111] flex items-cente justify-center p-6 pt-16 sm:px-4 lg:px-8">
      <div className="w-full max-w-[420px]">
        <div className="w-full">
          <h1 className="text-white text-3xl font-bold leading-none">
            Reset Password
          </h1>

          <p className="text-[#D9D9D9] text-xl mt-3">
            Enter your new password
          </p>

          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="mt-14 flex flex-col gap-7"
          >
            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                {...register("password")}
                maxLength={32}
                className={`w-full rounded-xl border bg-[#2A2A2A] py-3 px-6 pr-14 text-white placeholder:text-[#707070] placeholder:text-[1rem] sm:placeholder:text-[1.05rem] outline-none transition ${
                  errors.password
                    ? "border-red-500 bg-[#3a2323]"
                    : "border-[#8A8A8A] focus:border-[#CFB07A]"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8F8F8F]"
              >
                {showPassword ? <BiHide size={22} /> : <BiShow size={22} />}
              </button>

              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  {String(errors.password.message)}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                {...register("confirmPassword")}
                maxLength={32}
                className={`w-full rounded-xl border bg-[#2A2A2A] py-3 px-6 pr-14 text-white placeholder:text-[#707070] placeholder:text-[1rem] sm:placeholder:text-[1.05rem] outline-none transition ${
                  errors.confirmPassword
                    ? "border-red-500 bg-[#3a2323]"
                    : "border-[#8A8A8A] focus:border-[#CFB07A]"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8F8F8F]"
              >
                {showConfirmPassword ? (
                  <BiHide size={22} />
                ) : (
                  <BiShow size={22} />
                )}
              </button>

              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-400">
                  {String(errors.confirmPassword.message)}
                </p>
              )}
            </div>

            <button
              disabled={isPending}
              className="mt-10 p-3 w-full rounded-xl bg-[#CFB07A] text-[#111111] text-[1.5rem] sm:text-[1.9rem] font-semibold transition hover:opacity-95 disabled:opacity-70 cursor-pointer"
            >
              {isPending ? "Saving..." : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
