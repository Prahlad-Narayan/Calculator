import { RESULT } from "./const";
import { txt, txt2, txt3 } from "./action";
const initialState = { re: "", Text: "", Text2: "", Text3: "" };

function reducer(state = initialState, action) {
  switch (action.type) {
    case RESULT:
      return {
        ...state,
        re: action.payload,
      };
    case txt:
      return {
        ...state,
        Text: action.payload,
      };
    case txt2:
      return {
        ...state,
        Text2: action.payload,
      };
    case txt3:
      return {
        ...state,
        Text3: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;
