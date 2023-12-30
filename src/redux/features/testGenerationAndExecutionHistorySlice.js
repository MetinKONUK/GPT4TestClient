import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTestGenerationAndExecutionHistoryDataFromDB =
    createAsyncThunk(
        'testGenerationAndExecutionHistorySlice/fetchTestGenerationAndExecutionHistoryDataFromDB',
        async (historyElementCount, { getState, rejectWithValue }) => {
            try {
                const { userData } = getState();
                const userIdentifier =
                    userData.username || userData.userEmailAddress;

                const response = await axios.get(
                    `http://localhost:5000/api/users/testGenerationHistories/getTestGenerationHistories/${userIdentifier}/${historyElementCount}`
                );
                return response.data; // Return the data to be used in the extraReducers
            } catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
    );

const initialState = {
    testGenerationHistories: [],
};

export const testGenerationAndExecutionHistorySlice = createSlice({
    name: 'testGenerationAndExecutionHistorySlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchTestGenerationAndExecutionHistoryDataFromDB.fulfilled,
            (state, action) => {
                // Update the state with the fetched data
                state.testGenerationHistories = action.payload;
            }
        );
        // You might want to handle the pending and rejected cases as well
    },
});

export default testGenerationAndExecutionHistorySlice.reducer;
