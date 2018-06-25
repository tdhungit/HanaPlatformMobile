export const appReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_APP_VAR': {
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        }

        default: {
            return state;
        }
    }
};
