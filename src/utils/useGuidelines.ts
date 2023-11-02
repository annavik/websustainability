import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ServerGuideline } from "../models/guideline";
import { valueToLevel } from "./valueToLevel";

const QUERY_KEY = "guidelines";
const URL = "https://c0ldbear.github.io/data/wsg-info.json";

export const useGuidelines = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      axios.get<ServerGuideline[]>(URL).then((res) =>
        res.data.map((serverGuideline) => ({
          id: serverGuideline.Id,
          title: serverGuideline.Title,
          impact: valueToLevel(serverGuideline.Impact),
          impactLabel: serverGuideline.Impact,
          effort: valueToLevel(serverGuideline.Effort),
          effortLabel: serverGuideline.Effort,
        }))
      ),
  });

  return { guidelines: data, isLoading, isError };
};
