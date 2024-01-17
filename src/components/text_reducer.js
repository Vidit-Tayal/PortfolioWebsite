import capitalizeWords from "./text_capitalizer";

function textReducer(str, maxChars = 35) {
  if (str.length > maxChars) {
    let truncatedStr = str.substring(0, maxChars);

    return truncatedStr + " ...";
  }
  return str;
}

export default textReducer;
