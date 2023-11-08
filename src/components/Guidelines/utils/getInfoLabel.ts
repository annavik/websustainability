export const getInfoLabel = (numGuidelines: number): string => {
  if (numGuidelines === 0) {
    return "No guidelines to show.";
  }
  if (numGuidelines === 1) {
    return `Showing ${numGuidelines} guideline:`;
  }
  return `Showing ${numGuidelines} guidelines:`;
};
