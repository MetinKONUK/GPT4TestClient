import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    LLMName: 'Llama',
    isUsed: true,
    modelSelection: 'CodeLlama-34b-Python',
    topK: 250,
    topP: 0.7,
    minTokens: 512,
    maxTokens: 1536,
    temperature: 0.8,
    repPenalty: 0.6,
    presPenalty: 0.2,
    freqPenalty: 0.6,
};

export const llamaComparisonSlice = createSlice({
    name: 'llamaComparisonSlice',
    initialState,
    reducers: {
        updateSettings: (state, action) => {
            return { ...state, ...action.payload };
        },
        equalizeLLamaSettings: (state, action) => {
            let { temperature, maxLength, topP } = action.payload;
            let equalizeObj = {
                temperature,
                topP,
                maxTokens: maxLength,
            };
            return { ...state, ...equalizeObj };
        },
    },
});

export const { updateSettings, equalizeLLamaSettings } =
    llamaComparisonSlice.actions;

export default llamaComparisonSlice.reducer;
