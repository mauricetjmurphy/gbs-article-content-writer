export const splitResponseString = (string, arg) => {
  return string.split(arg).filter(Boolean);
};

export const splitTopicsStringAndFilter = (string, arg) => {
  const arr = string.split(arg).filter(Boolean);
  const filteredArray = arr.filter((item) => {
    const regex = /^[^0-9]/;

    if (regex.test(item[0])) {
      return false;
    }

    return true;
  });
  return filteredArray;
};

export const splitGetIndex = (string, arg, index) => {
  return string.split(arg)[index];
};

export const objectFromArray = (array) => {
  const objectsArray = [];

  array.forEach((item) => {
    const obj = {
      title: "",
      paragraphs: [],
    };

    item.map((item) => {
      if (item.split(": ")[0] === "Title") {
        obj["title"] = item.split(": ")[1];
      }

      if (!item.includes("Title:")) {
        const cleanText = item.split(": ")[1];
        obj.paragraphs.push(cleanText);
      }
    });

    objectsArray.push(obj);
  });

  return objectsArray;
};

export const getTodaysDate = () => {
  const today = new Date();
  const year = today.getUTCFullYear().toString();
  const month = (today.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = today.getUTCDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const removeOuterString = (str) => {
  if (str.length < 2 || str[0] !== '"' || str[str.length - 1] !== '"') {
    // If the string is less than two characters or doesn't start and end with a double quote, return the original string
    return str;
  } else {
    // Remove the outer double quotes and return the inner string
    return str.substring(1, str.length - 1);
  }
};

export const removeCharsFromString = (str, chars) => {
  // Create a new regular expression pattern from the characters to remove
  const pattern = new RegExp(`[${chars}]`, "g");

  // Use the filter method to remove the characters from the string
  const newStr = str
    .split("")
    .filter((char) => !pattern.test(char))
    .join("")
    .trim();

  return newStr;
};
