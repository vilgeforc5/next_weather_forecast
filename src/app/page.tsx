"use client"
import React from "react";

import { PageHeader } from "@/components/_pageHeader/pageHeader";
import { LocationInfo } from "@/components/_locationInfo/locationInfo";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store from "@/redux/store";
import persistStore from "redux-persist/es/persistStore";
import { Grid } from "@/components/_grid/grid";

const persistor = persistStore(store)

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <PageHeader />
          <main className="main flex flex-col outer-padding pt-2">
            <LocationInfo />
            <Grid col={3} row={2}>
              <Grid.GridCell >
                <div className="border-2 border-slate-500 h-full w-full">
                </div>
              </Grid.GridCell>
              <Grid.GridCell>
                <div className="border-2 border-slate-500 h-full w-full">
                </div>
              </Grid.GridCell>
              <Grid.GridCell>
                <div className="border-2 border-slate-500 h-full w-full">
                </div>
              </Grid.GridCell>
              <Grid.GridCell col_span={3}>
                <div className="border-2 border-slate-500 h-full w-full">
                </div>
              </Grid.GridCell>
            </Grid>
          </main>
          <footer className="footer h-10">
            footer
          </footer>
        </PersistGate>
      </Provider>
    </>
  )
}
