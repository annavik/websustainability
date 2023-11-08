import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import _ from "lodash";
import { Guideline, ServerGuideline } from "../models/guideline";
import { valueToLevel } from "./valueToLevel";

const QUERY_KEY = "guidelines";
const URL = "https://c0ldbear.github.io/data/wsg-info.json";

export const useGuidelines = (): {
  guidelines?: Guideline[];
  tags?: string[];
  categories?: { id: string; title: string }[];
  isLoading: boolean;
  isError: boolean;
} => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      axios
        .get<{
          tags: string[];
          categories: {
            id: string;
            title: string;
          }[];
          data: ServerGuideline[];
        }>(URL)
        .then((res) => {
          const { tags, categories, data } = res.data;

          return {
            tags,
            categories,
            guidelines: data.map((serverGuideline, index) => {
              const guideline: Guideline = {
                ...serverGuideline,
                id: `guideline-${index}`,
                index,
                impact: {
                  level: valueToLevel(serverGuideline.impact),
                  title: serverGuideline.impact,
                },
                effort: {
                  level: valueToLevel(serverGuideline.impact),
                  title: serverGuideline.impact,
                },
                tags: _.uniq(serverGuideline.tags),
                url: serverGuideline.url,
              };

              return guideline;
            }),
          };
        }),
  });

  return { ...data, isLoading, isError };
};
