console.log("Hey There, finally my package is published ......");
export const addValues = (...args) => {
    return args.reduce((acc, curr) => {
        return curr + acc;
    }, 0);
};
//# sourceMappingURL=index.js.map