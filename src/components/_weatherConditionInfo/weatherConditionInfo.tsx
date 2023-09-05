import React from 'react'
import { Grid } from '../_grid/grid'
import { WeatherConditionCard } from '../_weatherConditionCard/weatherConditionCard'
import { WeatherCard } from '../_weatherCard/weatherCard'
import { WeatherCardHeader } from '../_weatherCard/_weatherCardHeader/weatherCardHeader'
import { IconSun } from '../_weatherIcons/iconSun'
import { WeatherCardData } from '../_weatherCard/_weatherCardData/weatherCardData'

export const WeatherConditionInfo = () => {
    return (
        <Grid
            col={2}
            row={3}
            gap={{
                gap_x: 10,
                gap_y: 10
            }}
            responsive={{
                md: {
                    col: 3,
                    row: 2
                }
            }}
        >
            <Grid.GridCell
                col_span={2}
                responsive={{
                    md: {
                        col_span: 1
                    }
                }}
            >
                <div className="bg-sky-200 w-full h-full">
                    tempertature
                </div>
            </Grid.GridCell>
            <Grid.GridCell>
                <WeatherCard
                    addOn={<p className='text-xs md:text-sm lg:text-base text-slate-400'>14:20</p>}
                    prefix='mm/h'
                    renderHeader={() =>
                        <WeatherCardHeader
                            title="Температура"
                            icon={<IconSun color="slate-400" />}
                        />
                    }
                    renderMain={() =>
                        <WeatherCardData dataNumerical={13} prefix='°C' />
                    }
                />
            </Grid.GridCell>
            <Grid.GridCell>
                <WeatherConditionCard />
            </Grid.GridCell>
            <Grid.GridCell
                col_span={2}
                responsive={{
                    md: {
                        col_span: 3
                    }
                }}
            >

                <div className="bg-sky-200 w-full h-full">
                    forecast
                </div>

            </Grid.GridCell>

        </Grid>
    )
}
