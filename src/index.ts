console.log("Hey There, finally my package is published ......");

export const addValues = (...args: [number]) => {
  return args.reduce((acc, curr) => {
    return curr + acc;
  }, 0);
};
