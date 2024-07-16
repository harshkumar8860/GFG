import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    emojiDictionary: {
      "🌧": "Cloudy, rainy",
      "🌪": "Tornado",
      "☔": "Umbrella with raindrops",
      "☕": "Coffee",
      "📖": "Book",
      "🌊": "Wave",
      "🌈": "Rainbow",
      "😔": "Rain Sad",
      "😊": "Rain Happy",
      "🐛": "Caterpillar",
      "🤧": "Sick",
    },
    
  },
});

export const { emojiDictionary } = weatherSlice.actions;

export default weatherSlice.reducer;
