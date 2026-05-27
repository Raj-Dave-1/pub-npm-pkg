console.log("Hey There, finally my package is published ......");
export const addValues = (...args) => {
    args.reduce((acc, curr) => {
        return curr + acc;
    }, 0);
};
//# sourceMappingURL=index.js.map