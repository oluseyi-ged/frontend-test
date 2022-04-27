import React from "react"
import { MetricData } from "../../data/Data"
import BarStyles from "../../styles/Bar.module.scss"

const metrics = MetricData

function Colorbar() {
  return (
    <>
      <div>
        <p>Error 500: 1 256</p>
        <p>Error 501: 800</p>
        <p>Error 502: 650</p>
        <p>Other: 330</p>
      </div>
    </>
  )
}

export default Colorbar
