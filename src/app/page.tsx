"use client"
import React from "react";

import { PageHeader } from "@/components/_pageHeader/pageHeader";
import { LocationInfo } from "@/components/_locationInfo/locationInfo";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store from "@/redux/store";
import persistStore from "redux-persist/es/persistStore";
import { WeatherConditionCard } from "@/components/_weatherConditionCard/weatherConditionCard";

const persistor = persistStore(store)

export default function Home() {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <PageHeader />
          <main className="main flex flex-col outer-padding pt-2">
            <LocationInfo />
            <div className="h-full grid grid-cols-3 grid-rows-2">
              <WeatherConditionCard />
            </div>
          </main>
          <footer className="footer">
            footer
          </footer>
          </PersistGate>
      </Provider>
    </>
  )
}
