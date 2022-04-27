import React from "react"
import { MetricData } from "../../data/Data"
import PanelStyles from "../../styles/Panel.module.scss"
import online from "../../assets/images/check-on.svg"

const metrics = MetricData

function Today() {
  return (
    <>
      <div className={PanelStyles.firstGrids}>
        <div className={PanelStyles.first__grid}>
          <img src={online} alt="" />
          <div className={PanelStyles.first__gridContent}>
            <p>Errors: {metrics?.data?.[0]?.errors_today || 0}% </p>
            <p>Average: 0,11%</p>
          </div>
        </div>
        <div className={PanelStyles.first__grid}>
          <img src={online} alt="" />
          <div className={PanelStyles.first__gridContent}>
            <p>Zeroes: {metrics?.data?.[0]?.zeroes_today || 0}% </p>
            <p>Average: 0,11%</p>
          </div>
        </div>
        <div className={PanelStyles.first__grid}>
          <img src={online} alt="" />
          <div className={PanelStyles.first__gridContent}>
            <p>Timeouts: {metrics?.data?.[0]?.timeout_today || 0}%</p>
            <p>Average: 0,11%</p>
          </div>
        </div>
      </div>

      <div className={PanelStyles.errorGrid}>
        {metrics?.errors_today?.map((error) => (
          <p>
            {error?.code ? `Error ${error?.code}` : "Others"}: {error?.count}
          </p>
        ))}
      </div>
    </>
  )
}

export default Today
