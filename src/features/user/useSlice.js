const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

// This is action creator for example
export const { updateName } = userSlice.actions;

export default userSlice.reducer;
