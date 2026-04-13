import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./apiClient";
import { toast } from "sonner";


// RESET PASSWORD REQUEST
export const useResetPasswordRequest = () => {
  return useMutation({
    mutationFn: async ({ payload }: { payload: any; }) => {
      try {
        const response = await axiosInstance.post(
          `/auth/reset-password`,
          payload,
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Password Reset successfully 🎉");
    },
    onError: (error: any) => {
      if (error.response?.status === 500) {
        toast.error("Internal Server Error");
      } else {
        toast.error(error.response?.data?.message || "something went wrong. Please, try again later");
      }
    },
  });
};
