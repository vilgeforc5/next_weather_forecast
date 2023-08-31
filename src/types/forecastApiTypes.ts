
export interface ForecastRequestParamMandatory {
    location: string;
}
export interface CurrentForecastRequestParams extends ForecastRequestParamMandatory {
    lang?: string;
}

export interface FutureForecastRequestParams extends ForecastRequestParamMandatory {
    lang?: string;
    days: number;
}

export interface CurrentForecastResponse {
    location: {};
    current: CurrentForecastResponseFieldCurrent;
}

interface CurrentForecastResponseFieldCurrent {
    last_updated: string;
    last_updated_epoch: number;
    temp_c: number;
    feelslike_c: number
    condition: {
        text: string;
        icon: string;
        code: number;
    }
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    is_day: boolean;
}