// LOADING
const LOADING_START = 'LOADING_START';
const LOADING_STOP = 'LOADING_STOP';

function loading_start_object(loading) {
    return {
        type: LOADING_START,
        payload: loading
    }
}

function loading_stop_object(loading) {
    return {
        type: LOADING_STOP,
        payload: loading
    }
}

const count_down = (time) => (dispatch) => {
    dispatch(loading_start_object(true))
    setTimeout(() => dispatch(loading_stop_object(false)), time);
}

export {
    count_down,
    LOADING_START,
    LOADING_STOP
}
