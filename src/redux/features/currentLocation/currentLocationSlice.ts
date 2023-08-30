import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILocation } from "@/types/types";
import { StoreType } from "../../store";

const initialState: ILocation = {
    name: "",
    pos: ""
};

const currentLocationSlice = createSlice({
    name: "currentLocation",
    initialState,
    reducers: {
        setCurrentLocation: (_, action: PayloadAction<ILocation>) => {
            return action.payload
        }
    },
})


export const currentLocationReducer = currentLocationSlice.reducer;
export const {setCurrentLocation} = currentLocationSlice.actions;
export const selectCurrentLocation = (state: StoreType ) => state.currentLocation;