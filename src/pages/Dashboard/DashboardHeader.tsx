import { UUSD } from "../../constants"
import Tooltip from "../../lang/Tooltip.json"
import { div } from "../../libs/math"
import { percent } from "../../libs/num"
import { format } from "../../libs/parse"
import { useContract, useContractsAddress } from "../../hooks"
import { PriceKey } from "../../hooks/contractKeys"
import Grid from "../../components/Grid"
import Card from "../../components/Card"
import Dl from "../../components/Dl"
import Summary from "../../components/Summary"
import Count from "../../components/Count"
import { TooltipIcon } from "../../components/Tooltip"

const DashboardHeader = (props: Partial<Dashboard>) => {
  const { latest24h, totalValueLocked } = props

  return (
    <>
      <Grid>
        <Dl
          list={[
            {
              title: "Transactions (24hrs)",
              content: (
                <TooltipIcon content={Tooltip.Dashboard.Transactions}>
                  <Count integer>{latest24h?.transactions}</Count>
                </TooltipIcon>
              ),
            },
            {
              title: "Fee (24hrs)",
              content: (
                <TooltipIcon content={Tooltip.Dashboard.Fee}>
                  <Count symbol={UUSD} integer>
                    {latest24h?.feeVolume}
                  </Count>
                </TooltipIcon>
              ),
            },
          ]}
        />
      </Grid>

      <Grid>
        <Card>
          <Summary
            title={
              <TooltipIcon content={Tooltip.Dashboard.TVL}>
                Total Value Locked
              </TooltipIcon>
            }
          >
            <Count symbol={UUSD} integer>
              {totalValueLocked}
            </Count>
          </Summary>
        </Card>
      </Grid>
    </>
  )
}

export default DashboardHeader
