import ReduxProvider from '../state/redux/ReduxProvider'
import { combineProviders } from '../common/utilities/combineProviders'
import React from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import environment from '../relay/environment'

const RelayDefaultEnvProvider = (props: { children?: React.ReactNode }) => (
  <RelayEnvironmentProvider environment={environment}>
    {props.children}
  </RelayEnvironmentProvider>
)

export default ({ children }: { children: React.ReactNode }) =>
  combineProviders([ReduxProvider, RelayDefaultEnvProvider], children)
