"use client"
import React from "react";

import { PageHeader } from "@/components/_pageHeader/pageHeader";
import { LocationInfo } from "@/components/_locationInfo/locationInfo";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store from "@/redux/store";
import persistStore from "redux-persist/es/persistStore";
import { WeatherCardsSection } from "@/components/_weatherCardsSection/weatherCardsSection";
import { Footer } from "@/components/_footer.tsx/footer";
import { ForecastSection } from "@/components/_forecastSection/forecastSection";

import 'react-toastify/dist/ReactToastify.css';
import { SupportMessage } from "@/components/_supportMessage/supportMessage";

const persistor = persistStore(store)

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <PageHeader />
          <SupportMessage />
          <main className="main flex flex-col outer-padding pb-0 pt-1.5">
            <LocationInfo />
            <WeatherCardsSection />
            <ForecastSection />
          </main>
          <Footer />
        </PersistGate>
      </Provider>
    </>
  )
}
