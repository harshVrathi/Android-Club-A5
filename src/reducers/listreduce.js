import {add, del} from '../actions/typeaction';

const initialState={
  List: []
}

const anitreduce = (state = initialState, action) => {
  switch (action.type) {
    case add:
      return {
        ...state,
        List: state.List.concat({
          key: Math.random(),
          name: action.data
        })
      };
    case del:
      return {
        ...state,
        List: state.List.filter((item) =>
          item.key !== action.key)
      };
    default:
      return state;
  }
}
export default anitreduce;