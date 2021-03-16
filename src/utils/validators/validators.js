export const required = (value) => {
    if (!value) return 'required';
    return undefined;
}

export const minLength = (valueLength) => (value) => {
    if (value?.length < valueLength) return `value must be ${valueLength} or longer`;
    return undefined;
}