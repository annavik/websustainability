import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ServerGuideline } from "../models/guideline";
import { valueToLevel } from "./valueToLevel";

const QUERY_KEY = "guidelines";
const URL = "https://c0ldbear.github.io/data/wsg-info.json?v=1.2";

export const useGuidelines = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      axios.get<ServerGuideline[]>(URL).then((res) =>
        res.data.map((serverGuideline, index) => ({
          id: `guideline-${index}`,
          index,
          title: serverGuideline.title,
          impact: valueToLevel(serverGuideline.impact),
          impactLabel: serverGuideline.impact,
          effort: valueToLevel(serverGuideline.effort),
          effortLabel: serverGuideline.effort,
        }))
      ),
  });

  return { guidelines: data, isLoading, isError };
};
