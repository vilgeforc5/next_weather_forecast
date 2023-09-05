"use client"
import React from "react";

import { PageHeader } from "@/components/_pageHeader/pageHeader";
import { LocationInfo } from "@/components/_locationInfo/locationInfo";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store from "@/redux/store";
import persistStore from "redux-persist/es/persistStore";
import { WeatherConditionInfo } from "@/components/_weatherConditionInfo/weatherConditionInfo";

const persistor = persistStore(store)

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <PageHeader />
          <main className="main flex flex-col outer-padding pt-2">
            <LocationInfo />
            <WeatherConditionInfo />
          </main>
          <footer className="footer h-10">
            footer
          </footer>
        </PersistGate>
      </Provider>
    </>
  )
}
