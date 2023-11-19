import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
const initialState = {
    assignments: db.assignments,
    assignment: { name: "New Assignment 123", description: "New Description" },
};
const assignmentsSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignment = [
        { ...action.payload, _id: new Date().getTime().toString() }, //TODO
          ...state.assignment,
]; },
    deleteAssignment: (state, action) => {
      state.assignment = state.assignment.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignment = state.assignment.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
}); },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
}, },
});
export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
