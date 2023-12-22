import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxios from "./useAxios";

const useTasks = () => {
  const axiosPublic = useAxios();
  const { user } = useAuthContext();

  const { data:tasks, refetch } = useQuery({
    queryKey: "todos",
    queryFn: async () => {
      const res = await axiosPublic.get(`/todo/${user.email}`);
      return res.data;
    },
  });
  return [tasks, refetch];
};

export default useTasks;
