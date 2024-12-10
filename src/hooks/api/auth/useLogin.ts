"use client";

import { axiosInstance } from "@/lib/axios";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginPayload {
  email: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await axiosInstance.post("/auth/login", payload);
      return data;
    },
    onSuccess: (data) => {
      toast.success("Login Success");
      dispatch(loginAction(data)); // masukin data ke global state
      localStorage.setItem("blog-storage", JSON.stringify(data)); // masukin data ke LocalStorage
      router.replace("/");
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
