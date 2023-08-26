import ReduxProvider from './state/redux/ReduxProvider'
import { combineProviders } from './common/utilities/combineProviders'
import React from 'react'

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => combineProviders([ReduxProvider], children)
