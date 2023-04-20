import { createSlice } from '@reduxjs/toolkit';

export const valueSlice = createSlice({
    name: 'value',
    initialState: '',
    reducers: {
        updateValue: (state, action) => {
            return action.payload;
        },
    },
});

export const { updateValue } = valueSlice.actions;
export default valueSlice.reducer;
