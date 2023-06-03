// export const validateCeoNumber = (email) => {
//   // const regex = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;
//   const regex = /^[0-9]{10}$/;
//   // /^[0-9?A-z0-9?] + (\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
//   return regex.test(email);
// };

export const validateCeoNumber = (email) => {
  const regex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  // /^[0-9?A-z0-9?] + (\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
  return regex.test(email);
};

export const removeWhitespace = (text) => {
  const regex = /\s/g;
  return text.replace(regex, "");
};
