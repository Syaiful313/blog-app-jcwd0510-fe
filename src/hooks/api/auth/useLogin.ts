"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface LoginPayload {
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await axiosInstance.post("/auth/login", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("Login Success");
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

export default useLogin;


