import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Section {
  id: string;
  title: string;
  data: any[];
}

interface SectionsState {
  combinedSection: Section[];
}

const initialState: SectionsState = {
  combinedSection: [],
};
const combinedSectionsSlice = createSlice({
  name: 'combinedSectionsSlice',
  initialState,
  reducers: {
    combinedSections: (state, action: PayloadAction<Section[]>) => {
      state.combinedSection = action.payload;
    },
  },
});

export const {combinedSections} = combinedSectionsSlice.actions;
export default combinedSectionsSlice.reducer;
