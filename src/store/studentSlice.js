import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentData: null,
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    fetchStudentDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchStudentDataSuccess: (state, action) => {
      state.loading = false;
      state.studentData = action.payload;
    },
    fetchStudentDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStudentDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateStudentDataSuccess: (state, action) => {
      state.loading = false;
      state.studentData = action.payload;
    },
    updateStudentDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStudentDataRequest,
  fetchStudentDataSuccess,
  fetchStudentDataFailure,
  updateStudentDataRequest,
  updateStudentDataSuccess,
  updateStudentDataFailure,
} = studentSlice.actions;

export default studentSlice.reducer;
