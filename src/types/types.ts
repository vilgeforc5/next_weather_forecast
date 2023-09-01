interface PositionInfo {
    lat: string;
    lon: string;
}

/**
 * `pos` default to string. May be `PositionInfo` for better usage in other apis than GeoObjectYandex.
*/
export interface ILocation
    <T extends PositionInfo | string = string>   {
    pos: T
    name: string;
}



export interface IGeoObjectYandex {
    GeoObject: {
        Point: {
            pos: string
        };
        name: string;
    }
}


export interface IYandexGeoObjectApiResponse {
    response: {
        GeoObjectCollection: {
            featureMember: IGeoObjectYandex[]
        }
    }
}


export type viewportSizes = "sm" | "md" | "lg" | "xl" | "2xl";

