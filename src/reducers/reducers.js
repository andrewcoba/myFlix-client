import { combineReducers } from "redux";

<<<<<<< Updated upstream
import { SET_FILTER, SET_MOVIES } from "../actions/actions";
=======
import { SET_FILTER } from "../actions/actions";
>>>>>>> Stashed changes

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
<<<<<<< Updated upstream
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies
});

export default moviesApp;
=======
}
>>>>>>> Stashed changes
