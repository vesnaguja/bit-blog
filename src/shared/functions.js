export const capitalFirstLetter = (string) => {
  let firstPart = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  let changedString = firstPart + rest;
  return (changedString)
};


export const shortenPostBody = (text) => {

  return text[0].toUpperCase() + text.slice(1, 140).trim() + "...";
}