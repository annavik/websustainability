import _ from "lodash";
import { Guideline } from "../models/guideline";

export const getCompactId = (guideline: Guideline) =>
  guideline.id.replace(".", "");

export const getSlug = (guideline: Guideline) => {
  const shortTitle = guideline.title.slice(guideline.title.indexOf(" ") + 1);

  return _.kebabCase(shortTitle);
};

export const getPath = (guideline: Guideline) => {
  const id = getCompactId(guideline);
  const slug = getSlug(guideline);

  return `/${id}/${slug}`;
};
