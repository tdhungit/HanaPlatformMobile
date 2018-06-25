export const appSetVar = (name, value) => {
    return {
        type: 'SET_APP_VAR',
        payload: {
            name: name,
            value: value
        }
    };
};
