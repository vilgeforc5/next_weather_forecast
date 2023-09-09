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


export type Breakpoints = "sm" | "md" | "lg" | "xl" | "2xl";


export type ArrayElement<ArrayType extends readonly unknown[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
