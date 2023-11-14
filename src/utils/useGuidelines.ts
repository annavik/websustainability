import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import _ from "lodash";
import { Guideline, ServerGuideline } from "../models/guideline";

const QUERY_KEY = "guidelines";
const URL = "https://c0ldbear.github.io/data/v1/wsg-info.json";

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
                  level: serverGuideline.impact.value,
                  title: serverGuideline.impact.title,
                },
                effort: {
                  level: serverGuideline.effort.value,
                  title: serverGuideline.effort.title,
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
