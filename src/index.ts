console.log("Hey There, finally my package is published ......");

export const addValues = (...args: [number]) => {
  args.reduce((acc, curr) => {
    return curr + acc;
  }, 0);
};
