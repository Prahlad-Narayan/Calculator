import { RESULT } from "./const";
export const txt = "txt";
export const txt2 = "txt2";
export const txt3 = "txt3";

export const setResult = (payload) => ({
  type: RESULT,
  payload,
});
export const setTxt = (payload) => ({
  type: txt,
  payload,
});

export const setTxt2 = (payload) => ({
  type: txt2,
  payload,
});

export const setTxt3 = (payload) => ({
  type: txt3,
  payload,
});
