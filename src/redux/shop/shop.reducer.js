import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;