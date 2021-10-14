import React from "react"
import { RouteComponentProps } from "react-router-dom"

interface IMatchParams {
  touristRouteId: string
}
export const DetailPage: React.FC<RouteComponentProps<IMatchParams>> = (
  props
) => {
  //從props.match.params獲得參數
  console.log(props.history)
  console.log(props.location)
  console.log(props.match)
  return (
    <>
      <h1>旅遊路線詳情頁面,路線ID:{props.match.params.touristRouteId}</h1>
    </>
  )
}
