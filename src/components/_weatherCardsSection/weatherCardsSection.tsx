import React from 'react'
import { Grid } from '../_grid/grid'
import { WeatherCard } from '../_weatherCard/weatherCard'
import { WeatherCardHeader } from '../_weatherCard/_weatherCardHeader/weatherCardHeader'
import { WeatherCardData } from '../_weatherCard/_weatherCardData/weatherCardData'
import { reverseString } from '@/utils/reverseString'
import Skeleton from 'react-loading-skeleton'
import { defaultSkeletonStyles } from '@/utils/defaultSkeletonStyles'
import { IconPressure } from '../_weatherIcons/iconPressure'
import { IconSun } from '../_weatherIcons/iconSun'
import { IconWind } from '../_weatherIcons/iconWind'
import { useGetCurrentForecastQuery } from '@/redux/services/weatherForecast/weatherForecastApi'
import { StoreType } from '@/redux/store'
import { useSelector } from 'react-redux'

const gridResponsiveParams = {
    md: {
        col: 3,
        row: 1
    }
}

const gridGap = {
    gap_x: 10,
    gap_y: 10
}

export const WeatherCardsSection = () => {
    const currentLocation = useSelector((state: StoreType) => state.currentLocation)
    const {
        data: currentData,
    } = useGetCurrentForecastQuery({ 
            location: reverseString(currentLocation.pos) 
        }, 
        {
            skip: currentLocation.name === ""
        })

    return (
        <section className='w-full'>
            <Grid col={2} row={2} gap={gridGap} responsive={gridResponsiveParams}> 
                <Grid.GridCell
                    col_span={2}
                    responsive={{
                        md: {
                            col_span: 1
                        }
                    }}
                >
                    <WeatherCard
                        addOn={
                            <p className='text-xs md:text-sm lg:text-base text-slate-400 overflow-hidden'>
                                {currentData?.current ?
                                    currentData.current.condition.text :
                                    <Skeleton width="50px" height="10px" {...defaultSkeletonStyles} />
                                }
                            </p>
                        }
                        renderHeader={() =>
                            <WeatherCardHeader
                                title="Температура"
                                icon={<IconSun color="slate-400" />}
                            />
                        }
                        renderMain={() =>
                            currentData?.current ?
                                <WeatherCardData dataNumerical={currentData.current.temp_c} prefix='°C' /> :
                                <Skeleton  {...defaultSkeletonStyles} className='h-24 lg:h-40 w-full' />
                        }
                    />
                </Grid.GridCell>
                <Grid.GridCell>
                    <WeatherCard
                        renderHeader={() =>
                            <WeatherCardHeader
                                title="Давление"
                                icon={<IconPressure color="slate-400" />}
                            />
                        }
                        renderMain={() =>
                            currentData?.current ?
                                <WeatherCardData
                                    dataNumerical={currentData.current.pressure_mb}
                                    prefix='mbar'
                                    barColor='gradient-blue-purple-red-lr'
                                    barLimits={{ gap: 100, max: 1200, min: 100 }} /> :
                                <Skeleton  {...defaultSkeletonStyles} className='h-24 lg:h-40 w-full' />
                        }
                    />
                </Grid.GridCell>
                <Grid.GridCell>
                    <WeatherCard
                        addOn={
                            <p className='text-xs md:text-sm lg:text-base text-slate-400 overflow-hidden'>
                                {currentData?.current ?
                                    currentData.current.wind_dir :
                                    <Skeleton width="50px" height="10px" {...defaultSkeletonStyles} />
                                }
                            </p>
                        }
                        renderHeader={() =>
                            <WeatherCardHeader
                                title="Ветер"
                                icon={<IconWind color="slate-400" />}
                            />
                        }
                        renderMain={() =>
                            currentData?.current ?
                                <WeatherCardData
                                    dataNumerical={currentData.current.wind_kph}
                                    prefix='кмч'
                                    barColor='gradient-blue-light-lr'
                                    barLimits={{
                                        gap: 10,
                                        min: 2,
                                        max: 100
                                    }}
                                /> :
                                <Skeleton  {...defaultSkeletonStyles} className='h-24 lg:h-40 w-full' />
                        }
                    />
                </Grid.GridCell>
            </Grid>
        </section>
    )
}
