import React from "react";
import { useDispatch } from "react-redux";
import { useFetch } from "@/hooks/useFetch";
import { setCurrentLocation } from "@/redux/features/currentLocation/currentLocationSlice";
import { addHistoryLocation } from "@/redux/features/searchHistory/searchHistorySlice";
import { yandexApiGeocodeKey } from "@/apiKeys";
import { DispatchType } from "@/redux/store";
import { IGeoObjectYandex, IYandexGeoObjectApiResponse } from "@/types/types";


export const Autocomplete: React.FC<{ query: string }> = ({ query }) => {
    const state = useFetch<IYandexGeoObjectApiResponse>(
        `https://geocode-maps.yandex.ru/1.x/?apikey=${yandexApiGeocodeKey}&format=json&geocode=${query}`
    );

    switch (state.status) {
        case "loading": {
            // state.data === undefined only on initial load. in case loaded - continue
            if (!state.data) {
                return <LoadingMessage />;
            }
        }
        case "fetched": {
            if (state.data) {
                const fetchData = state.data.response.GeoObjectCollection.featureMember;
                if (fetchData.length > 0) {
                    return <AutoCompleteList locations={fetchData} />;
                } else {
                    return <NothingFoundMessage query={query} />;
                }
            }
        }
        case "error": {
            return <ErrorMessage />;
        }
    }
};


const LoadingMessage = () => {
    return <p className="mb-1.5 px-2 py-2"> Загружаю ... </p>;
};

const NothingFoundMessage: React.FC<{ query: string }> = ({ query }) => {
    return (
        <div
            className="h-72 flex items-center justify-center flex-col
                     bg-zinc-100 
                     px-4
        ">
                <svg 
                    className="w-16 h-16 lg:w-24 lg:h-24 -mt-4 text-orange-400  "
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>

                <p className="my-1.5 px-2 text-base lg:text-xl">
                    По запросу <span className="font-semibold">&quot;{query}&quot;</span>{" "}
                    ничего не найдено
                </p>
        </div>
    );
};

const ErrorMessage = () => {
    return (
        <div
            className="h-72 flex items-center justify-center flex-col
                     bg-zinc-100 
                     px-4
        ">
                <svg 
                    className="w-16 h-16 lg:w-24 lg:h-24 -mt-4 text-orange-400"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>

                <p className="my-1.5 px-2 text-base lg:text-xl">
                    Не могу получить данные 
                </p>
        </div>
    );
};

const AutoCompleteList: React.FC<{ locations: IGeoObjectYandex[] }> = ({
    locations,
}) => {
    return locations.map((location) => (
        <AutocompleteItem key={location.GeoObject.Point.pos} item={location} />
    ));
};

const AutocompleteItem: React.FC<{ item: IGeoObjectYandex }> = ({ item }) => {
    const dispatch = useDispatch<DispatchType>();
    return (
        <li
            onClick={() => {
                dispatch(
                    setCurrentLocation({
                        name: item.GeoObject.name,
                        pos: item.GeoObject.Point.pos,
                    })
                );
                dispatch(
                    addHistoryLocation({
                        name: item.GeoObject.name,
                        pos: item.GeoObject.Point.pos,
                    })
                );
            }}
            className="lg:text-lg py-1.5 px-2  pl-3
                       cursor-pointer 
                       hover:bg-slate-300 bg-zinc-100 
                       odd:bg-zinc-50 first:pt-2.5 last:pb-2.5"
        >
            {item.GeoObject.name}
        </li>
    );
};