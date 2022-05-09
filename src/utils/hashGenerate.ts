export const generateHash = () => {
  return "_" + Math.random().toString(36).substring(2, 9);
};
