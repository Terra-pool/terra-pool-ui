import Page from "../components/Page"
import { MenuKey } from "../routes"
import ConnectionRequired from "../containers/ConnectionRequired"
import { useWallet } from "../hooks"
import Grid from "../components/Grid"

const My = () => {
  const { address } = useWallet()

  return (
    <Page title={MenuKey.MY} noBreak>
      {!address ? (
        <ConnectionRequired />
      ) : (
        <>
        </>
      )}
    </Page>
  )
}

export default My
