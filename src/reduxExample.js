//<====This is for handling a user====>//
import { createStore, combineReducers } from "redux";
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_USER": {
      //state.name = action.payload;
      state = { ...state, name: action.payload };
      break;
    }
    case "CHANGE_AGE": {
      //state.age = action.payload;
      state = { ...state, age: action.payload };
      break;
    }
  }
  return state;
};
const waifuReducer = (state = [], action) => {
  return state;
};
const reducers = combineReducers({
  user: userReducer,
  waifus: waifuReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log("Store has changed", store.getState());
});

store.dispatch({ type: "CHANGE_USER", payload: "Luis" });
store.dispatch({ type: "CHANGE_AGE", payload: 18 });
store.dispatch({ type: "CHANGE_AGE", payload: 250 });



//<====Includes error handling and middleware====>//
import { createStore, applyMiddleware } from "redux";

function add() {
  store.dispatch({ type: "ADD" });
}
function sub() {
  store.dispatch({ type: "DEC" });
}
function err() {
  store.dispatch({ type: "E" });
}

const reducer = (initialState = 0, action) => {
  switch (action.type) {
    case "ADD":
      return initialState + 1;
      break;
    case "DEC":
      return initialState - 1;
      break;
    case "E":
      throw new Error("DUN DUN DUUUUN!");
      break;
  }
};

const logger = store => next => action => {
  console.log("Action fired", action);
  next(action);
};
//Error handling middleware
const error = store => next => action => {
  try {
    next(action);
  } catch (e) {
    console.log("Isla says ERROR", e);
  }
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 0, middleware);

store.subscribe(() => console.log("Store has changed", store.getState()));
add();
add();
sub();
sub();
err();
