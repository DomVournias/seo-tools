export const formatParagraph = (paragraph) => {
  if (paragraph != null) {
    let mergedParagraph = paragraph.join("");
    let parsedParagraph = mergedParagraph.replace(/<\/?[^>]+(>|$)/g, " ");
    const paragraphWords = parsedParagraph.split(" ");
    const filteredParagraph = paragraphWords.filter((string) => string != "");

    return filteredParagraph;
  }
  return "";
};
