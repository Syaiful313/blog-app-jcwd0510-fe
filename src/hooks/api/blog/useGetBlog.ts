import { axiosInstance } from "@/lib/axios";
import { Blog } from "@/types/blogs";
import { useQuery } from "@tanstack/react-query";


const useGetBlog = (id: number) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Blog>(`/blogs/${id}`);
      return data;
    },
  });
};

export default useGetBlog;
