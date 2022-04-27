import React from "react"
import { MetricData } from "../../data/Data"
import PanelStyles from "../../styles/Panel.module.scss"
import online from "../../assets/images/check-on.svg"
import search from "../../assets/images/search-on.svg"
import sales from "../../assets/images/sales-on.svg"
import click from "../../assets/images/click-off.svg"

const metrics = MetricData

function Hour() {
  return (
    <>
      <div className={PanelStyles.firstGrids}>
        <div className={PanelStyles.first__grid}>
          <img src={online} alt="" />
          <div className={PanelStyles.first__gridContent}>
            <p>Errors: {metrics?.data?.[0].errors_last_hour || 0}% </p>
            <p>Average: 0,11%</p>
          </div>
        </div>
        <div className={PanelStyles.first__grid}>
          <img src={online} alt="" />
          <div className={PanelStyles.first__gridContent}>
            <p>Zeroes: {metrics?.data?.[0].zeroes_last_hour || 0}% </p>
            <p>Average: 0,11%</p>
          </div>
        </div>
        <div className={PanelStyles.first__grid}>
          <img src={online} alt="" />
          <div className={PanelStyles.first__gridContent}>
            <p>Timeouts: {metrics?.data?.[0].timeout_last_hour || 0}%</p>
            <p>Average: 0,11%</p>
          </div>
        </div>
      </div>

      <div className={PanelStyles.errorGrid}>
        {metrics?.errors_last_hour?.map((error) => (
          <p>
            {error?.code ? `Error ${error?.code}` : "Others"}: {error?.count}
          </p>
        ))}
      </div>

      <div>
        <div>
          <div className={PanelStyles.searchInfo}>
            <div
              style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
            >
              <img
                src={search}
                alt=""
                style={{ width: "48px", marginTop: "10px" }}
              />
              <div className={PanelStyles.search__det}>
                <h3>
                  Searches <span>+5%</span>
                </h3>
                <h2>
                  {metrics?.data[0]?.searches_current_last_hour}
                  <span>Last Hour</span>
                </h2>
                <p>
                  {metrics?.data[0]?.searches_previous_last_hour}
                  <span>Last Friday</span>
                </p>
              </div>
            </div>

            <div className={PanelStyles.traffic__info}>
              <h3>Mobile traffic: 100%</h3>
              <h3>Web traffic: 100%</h3>
              <p>You get 100% traffic on mobile and desktop devices.</p>
              <p className={PanelStyles.traffic__tags}>
                Help: <span>Searches, Pessimisation</span>
              </p>
            </div>
          </div>

          <div className={PanelStyles.clickInfo}>
            <div
              style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
            >
              <img
                src={click}
                alt=""
                style={{ width: "48px", marginTop: "10px" }}
              />
              <div className={PanelStyles.click__det}>
                <h3>
                  Clicks <span>-13%</span>
                </h3>
                <h2>
                  243 <span>Last Hour</span>
                </h2>
                <p>
                  29344 <span>Last Friday</span>
                </p>
              </div>
            </div>

            <div className={PanelStyles.click__info}>
              <h3>CTR: 0.04%</h3>
              <p>Conversion from searches to clicks on all devices.</p>
              <p className={PanelStyles.click__tags}>
                Help: <span>CTR, Cliks</span>
              </p>
            </div>
          </div>

          <div className={PanelStyles.searchInfo}>
            <div
              style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
            >
              <img
                src={sales}
                alt=""
                style={{ width: "48px", marginTop: "10px" }}
              />
              <div className={PanelStyles.search__det}>
                <h3>
                  Sales
                  {/* <span>+5%</span> */}
                </h3>
                <h2>
                  29344 <span>Last Hour</span>
                </h2>
                <p>
                  29344 <span>Last Friday</span>
                </p>
              </div>
            </div>

            <div className={PanelStyles.traffic__info}>
              <h3>STR: 6.2% </h3>
              <h3>Avg. Check: 8 90</h3>
              <p>Conversion from cliks to bookings on all devices.</p>
              <p className={PanelStyles.traffic__tags}>
                Help: <span>STR, Bookings, Avg. Check</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hour
