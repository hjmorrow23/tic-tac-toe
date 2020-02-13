

export const onSetGamesList = (state, games) => {
    console.log(state, games)
    return {
        ...state, 
        games
    };
}

export const onSetGamesListError = (state, error) => {
    return {
        ...state, 
        games
    };
}