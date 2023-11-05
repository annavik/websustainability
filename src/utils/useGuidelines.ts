import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import { Guideline, ServerGuideline } from "../models/guideline";
import { valueToLevel } from "./valueToLevel";

const QUERY_KEY = "guidelines";
const URL = "https://c0ldbear.github.io/data/wsg-info.json?v=1.3";

export const useGuidelines = (): {
  guidelines?: Guideline[];
  tags?: string[];
  categories?: { label: string; value: string }[];
  isLoading: boolean;
  isError: boolean;
} => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      axios.get<ServerGuideline[]>(URL).then((res) =>
        res.data.map((serverGuideline, index) => ({
          id: `guideline-${index}`,
          index,
          title: serverGuideline.title,
          description: serverGuideline.description,
          category: {
            label: serverGuideline.category.title,
            value: serverGuideline.category.id,
          },
          impact: valueToLevel(serverGuideline.impact),
          impactLabel: serverGuideline.impact,
          effort: valueToLevel(serverGuideline.effort),
          effortLabel: serverGuideline.effort,
          tags: serverGuideline.tags,
        }))
      ),
  });

  const tags = useMemo(() => {
    if (!data) {
      return;
    }

    return data.reduce((tags: string[], guideline) => {
      guideline.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });

      return tags;
    }, []);
  }, [data]);

  const categories = useMemo(() => {
    if (!data) {
      return;
    }

    return data.reduce(
      (categories: { value: string; label: string }[], guideline) => {
        if (!categories.some((c) => c.value === guideline.category.value)) {
          categories.push(guideline.category);
        }

        return categories;
      },
      []
    );
  }, [data]);

  return { guidelines: data, tags, categories, isLoading, isError };
};
