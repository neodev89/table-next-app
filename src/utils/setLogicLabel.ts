const setLogicLabel = (label: string) => {
    const hasUpperCase = /[A-Z]/.test(label);
    if (hasUpperCase) {
        const whereUpperCase = label.search(/[A-Z]/);
        const sliceLabel = label.slice(0, whereUpperCase).replace(/^./, (c) => c.toUpperCase());
        const afterSlice = label.slice(whereUpperCase,).replace(/^./, c => c.toUpperCase());

        return `${sliceLabel} ${afterSlice}`
    } else {
        return label.replace(/^./, c => c.toUpperCase());
    }
};

export default setLogicLabel;