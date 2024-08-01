import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchStudentDataRequest,
  fetchStudentDataSuccess,
  fetchStudentDataFailure,
  updateStudentDataRequest,
  updateStudentDataSuccess,
  updateStudentDataFailure,
} from "./studentSlice";
import { fetchStudentData, updateStudentData } from "../services/api";

function* fetchStudentDataSaga() {
  try {
    const data = yield call(fetchStudentData);
    yield put(fetchStudentDataSuccess(data));
  } catch (error) {
    yield put(fetchStudentDataFailure(error.message));
  }
}

function* updateStudentDataSaga(action) {
  try {
    const data = yield call(updateStudentData, action.payload);
    yield put(updateStudentDataSuccess(data));
  } catch (error) {
    yield put(updateStudentDataFailure(error.message));
  }
}

export function* watchStudentSagas() {
  yield takeLatest(fetchStudentDataRequest.type, fetchStudentDataSaga);
  yield takeLatest(updateStudentDataRequest.type, updateStudentDataSaga);
}
