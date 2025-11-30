const setTypeField = async (name: string) => {
    const filterName = name.replace(/User$/, "") || name;
    const lowerName = filterName.toLowerCase();

    if (lowerName.includes("date") || lowerName.includes("birth")) {
        return "date";
    } else if (lowerName.includes("email")) {
        return "email";
    } else if (lowerName.includes("password")) {
        return "password";
    } else {
        return "text";
    }
};

export default setTypeField;