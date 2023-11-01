import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Guideline } from "../models/guideline";

const QUERY_KEY = "guidelines";
const URL = "https://c0ldbear.github.io/data/wsg-info.json";

export const useGuidelines = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => axios.get<Guideline[]>(URL).then((res) => res.data),
  });

  return { guidelines: data, isLoading, isError };
};
