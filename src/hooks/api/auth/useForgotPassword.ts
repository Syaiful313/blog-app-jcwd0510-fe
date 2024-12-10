"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface ForgotPasswordPayload {
  email: string;
}

const useForgotPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: ForgotPasswordPayload) => {
      const { data } = await axiosInstance.post(
        "/auth/forgot-password",
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success("Send email success");
      router.push("/");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

// const useRegister = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const handlerRegister = async (payload) => {
//     try {
//       setIsLoading(true);
//       const { data } = await axios.post("http://localhost:8000", payload);
//       toast.success("Register success");
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return {handlerRegister, isLoading};
// };

export default useForgotPassword;
