import type { NextPage } from "next"
import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import HomeStyles from "../styles/Home.module.scss"
import PanelStyles from "../styles/Panel.module.scss"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { MetricData } from "../data/Data"
import online from "../assets/images/check-on.svg"
import Hour from "../components/Hour/Hour"
import Today from "../components/Today/Today"
import Yesterday from "../components/Yesterday/Yesterday"
import Three from "../components/Three/Three"

const tabOptions = [
  {
    id: 1,
    title: "Last Hour",
    component: "",
  },
  {
    id: 2,
    title: "Today",
    component: "",
  },
  {
    id: 3,
    title: "Yesterday",
    component: "",
  },
  {
    id: 4,
    title: "Last 3 days",
    component: "",
  },
]

const metrics = MetricData

const Home: NextPage = () => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className={HomeStyles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={HomeStyles.home__content}>
        <p className={HomeStyles.home__contentHeader}>Main metrics</p>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(tabIndex) => setTabIndex(tabIndex)}
          className={HomeStyles.tabContainer}
          selectedTabClassName={HomeStyles.tab__Selected}
          selectedTabPanelClassName={HomeStyles.panel__Selected}
        >
          <TabList className={HomeStyles.tab__list}>
            <Tab className={HomeStyles.tablistItem}>Last Hour</Tab>
            <Tab className={HomeStyles.tablistItem}>Today</Tab>
            <Tab className={HomeStyles.tablistItem}>Yesterday</Tab>
            <Tab className={HomeStyles.tablistItem}>Last 3 days</Tab>
          </TabList>
          <TabPanel>
            <Hour />
          </TabPanel>
          <TabPanel>
            <Today />
          </TabPanel>
          <TabPanel>
            <Yesterday />
          </TabPanel>
          <TabPanel>
            <Three />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Home
