import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import './InfoBox.css'

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  // if (!cases) {
  //   return 'Loading...'
  // }
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'} ${
        isRed && 'infoBox--red'
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>
          <CountUp start={0} end={cases} duration={2.5} separator="," />
        </h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox
