import { MenuKey } from "../routes"
import useDashboard from "../statistics/useDashboard"
import Page from "../components/Page"
import Grid from "../components/Grid"
import DashboardHeader from "./Dashboard/DashboardHeader"
import TopTrading from "./Dashboard/TopTrading"

const Dashboard = () => {
  const { dashboard } = useDashboard()

  return (
    <Page title={MenuKey.DASHBOARD}>
      <DashboardHeader {...dashboard} />

      <Grid>
        <TopTrading />
      </Grid>
    </Page>
  )
}

export default Dashboard
