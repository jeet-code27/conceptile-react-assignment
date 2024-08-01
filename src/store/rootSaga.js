import { all } from "redux-saga/effects";
import { watchStudentSagas } from "./studentSaga";

export default function* rootSaga() {
  yield all([watchStudentSagas()]);
}
