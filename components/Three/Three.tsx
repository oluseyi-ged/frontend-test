import React from "react"
import { MetricData } from "../../data/Data"
import PanelStyles from "../../styles/Panel.module.scss"
import online from "../../assets/images/check-on.svg"

const metrics = MetricData
function Three() {
  return (
    <>
      <div className={PanelStyles.firstGrids}>
        <div className={PanelStyles.first__grid}>
          <img src={online} alt="" />
          <div className={PanelStyles.first__gridContent}>
            <p>
              Errors:{" "}
              {Math.round(metrics?.data?.[0]?.errors_last_3days * 100) / 100 ||
                0}
              %
            </p>
            <p>Average: 0,11%</p>
          </div>
        </div>
        <div className={PanelStyles.first__grid}>
          <img src={online} alt="" />
          <div className={PanelStyles.first__gridContent}>
            <p>
              Zeroes:{" "}
              {Math.round(metrics?.data?.[0]?.zeroes_last_3days * 100) / 100 ||
                0}
              %
            </p>
            <p>Average: 0,11%</p>
          </div>
        </div>
        <div className={PanelStyles.first__grid}>
          <img src={online} alt="" />
          <div className={PanelStyles.first__gridContent}>
            <p>
              Timeouts:{" "}
              {Math.round(metrics?.data?.[0]?.timeout_last_3days * 100) / 100 ||
                0}
              %
            </p>
            <p>Average: 0,11%</p>
          </div>
        </div>
      </div>

      <div className={PanelStyles.errorGrid}>
        {metrics?.errors_last_3days?.map((error) => (
          <p>
            {error?.code ? `Error ${error?.code}` : "Others"}: {error?.count}
          </p>
        ))}
      </div>
    </>
  )
}

export default Three
