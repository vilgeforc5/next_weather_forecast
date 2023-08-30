"use client"
import React from "react";

import { PageHeader } from "@/components/_pageHeader/pageHeader";
import { LocationInfo } from "@/components/_locationInfo/locationInfo";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store from "@/redux/store";
import persistStore from "redux-persist/es/persistStore";

const persistor = persistStore(store)

export default function Home() {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <PageHeader />
          <LocationInfo />
        </PersistGate>
      </Provider>
    </>
  )
}
