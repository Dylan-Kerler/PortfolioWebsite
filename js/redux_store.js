import { createStore } from 'redux';

const actions = {
    TOGGLE_ANIMATION: "TOGGLE_ANIMATION",
    CHANGE_LANGUAGE: "CHANGE_LANGUAGE"
};

function toggle_animation() {
    return { type: actions.TOGGLE_ANIMATION };
}

function change_language(language) {
    return {
        type: actions.CHANGE_LANGUAGE,
        language
    }
}

const initialState = {
    showAnimations: true,
    language: "all"
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.TOGGLE_ANIMATION:
            return animationReducer(state);
        case actions.CHANGE_LANGUAGE:
            return languageReducer(state, action.language);
        default:
            return state;
    }
}

function animationReducer(state) {
    if (state.language === "all") {
        return {...state, showAnimations: !state.showAnimations}
    }
    return {...state, showAnimations: false};
}

function languageReducer(state, language) {
    const showAnimations = language === "all"; //Only show animations if "all" is selected
    return { ...state, language, showAnimations }
}

const Store = createStore(reducer);

export {
    Store,
    toggle_animation,
    change_language
};
