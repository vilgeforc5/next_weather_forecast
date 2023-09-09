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
        setCurrentLocation: (prevState, action: PayloadAction<ILocation>) => {
            if (prevState.name !== action.payload.name && prevState.pos !== action.payload.pos)
                return action.payload
        }
    },
})


export const currentLocationReducer = currentLocationSlice.reducer;
export const {setCurrentLocation} = currentLocationSlice.actions;
export const selectCurrentLocation = (state: StoreType ) => state.currentLocation;