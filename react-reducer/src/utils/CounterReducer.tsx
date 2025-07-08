const CounterReducer = (state: number, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state -1;
        default:
            throw new Error('Unhandled action type:', action.type);
    };
};

export default CounterReducer;