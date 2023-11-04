import Fuse from "fuse.js";
import { Filter } from "../../models/filter";
import { Guideline } from "../../models/guideline";

export const useFilteredGuidelines = ({
  activeFilters,
  guidelines,
  searchString,
}: {
  activeFilters: Filter[];
  guidelines: Guideline[];
  searchString: string;
}) => {
  let filteredGudelines = guidelines;

  // Filter based on search search string
  const fuse = new Fuse(guidelines ?? [], {
    keys: [
      {
        name: "title",
        weight: 1,
      },
    ],
    threshold: 0.5,
    shouldSort: false,
  });

  if (searchString.length) {
    filteredGudelines = fuse.search(searchString).map((result) => result.item);
  }

  // Filter based on tags
  if (activeFilters.length) {
    filteredGudelines = filteredGudelines.filter((guideline) => {
      return guideline.tags.some((tag) =>
        activeFilters.some(
          (filter) => filter.type === "tags" && filter.value === tag
        )
      );
    });
  }

  return filteredGudelines;
};
