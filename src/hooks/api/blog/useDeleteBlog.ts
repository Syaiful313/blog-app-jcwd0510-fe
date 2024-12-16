"use client";
import useAxios from "@/hooks/useAxios";
import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useDeleteBlog = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await axiosInstance.delete(`/blog/${id}`);
      return data;
    },
    onSuccess: async () => {
      toast.success("Delete blog Success");
      await queryClient.invalidateQueries({ queryKey: ["blogs"] });
      router.replace("/");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useDeleteBlog;
