import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { weatherApiKey } from '@/apiKeys';
import { CurrentForecastRequestParams, FutureForecastRequestParams, CurrentForecastResponse, FutureForecastResponse} from "@/types/forecastApiTypes"

export const forecastApi = createApi({
    reducerPath: "forecast",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.weatherapi.com/v1/`,
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json")
            return headers
        }
    }),
    endpoints: builder => ({
        getCurrentForecast: builder.query<CurrentForecastResponse, CurrentForecastRequestParams>  ({
            query: (requestParams) => {
                return ({
                    url: `current.json?key=${weatherApiKey}`,
                    params: {
                        q: requestParams.location,
                        lang: requestParams.lang || "ru"
                    }
                })
            }
        }),
        getFutureForecast: builder.query<FutureForecastResponse, FutureForecastRequestParams>({
            query: (requestParams) => ({
                url: `forecast.json?key=${weatherApiKey}`,
                params: ({
                    q: requestParams.location,
                    days: requestParams.days,
                    lang: requestParams.lang || "ru"
                })
            })
        })
    }),
})

export const {
    useGetCurrentForecastQuery, 
    useGetFutureForecastQuery,
    useLazyGetCurrentForecastQuery,
    useLazyGetFutureForecastQuery
} = forecastApi