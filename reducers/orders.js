import {add, cancel, complete, create, remove} from '../actions/orders';

const reducer = createReducer(
  {},
  {
    [create]: (state, action) => {},
    [add]: (state, action) => {},
    [remove]: (state, action) => {},
    [complete]: (state, action) => {},
    [cancel]: (state, action) => {},
  }
);

export default reducer;
