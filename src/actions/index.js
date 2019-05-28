import {
    SEARCH_CHANGE,
    MOVIES_FETCHED,
    MOVIES_FAILED
} from "../types";
import {URL} from "../../constants";

export const searchChanged = (text) => {
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
};

export const getMovies = text => async(dispatch) => {
    function onSuccess(success) {
        dispatch({ type: MOVIES_FETCHED, payload: success });
        return success;
    }
    function onError(error) {
        dispatch({ type:MOVIES_FAILED, error })
    }
    try {
        const url = `${URL}${text}`;
        const res = await fetch(url, {method: 'GET'});
        const success = await res.json();
        return onSuccess(success);
    } catch (e) {
        return onError(e)
    }
}