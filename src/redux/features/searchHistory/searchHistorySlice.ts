import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { StoreType } from "../../store";
import { ILocation } from "@/types/types";

const searchHistoryEntityAdapter = createEntityAdapter<ILocation>({
    selectId: (loc) => loc.pos,
});

const searchHistoryPersistent = createSlice({
    name: "searchHistoryPersistent",
    initialState: searchHistoryEntityAdapter.getInitialState,
    reducers: {
        addHistoryLocation: searchHistoryEntityAdapter.addOne,
        clearHistory: searchHistoryEntityAdapter.removeAll,
    },
});

export const searchHistoryPersistentReducer = searchHistoryPersistent.reducer;

export const {addHistoryLocation, clearHistory} = searchHistoryPersistent.actions;

export const {
    selectAll: selectAllHistory
} = searchHistoryEntityAdapter.getSelectors<StoreType>(state => state.searchHistoryPersistent);


export const selectAllHistoryReversed = createSelector(
    [(state: StoreType) => selectAllHistory(state)], 
    (allHistory) => {
        if (allHistory.length > 0) {
            return allHistory.toReversed()
        } else {
            return []
        }    
    }
)
