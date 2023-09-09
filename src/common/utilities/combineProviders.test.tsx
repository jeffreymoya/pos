import React from 'react'
import { combineProviders } from './combineProviders'
import '@testing-library/jest-dom'
import { render } from 'test-utils'

// Mock components for testing
const ProviderA: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div data-testid="provider-a"> {children}</div>
)

const ProviderB: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div data-testid="provider-b"> {children}</div>
)

describe('combineProviders', () => {
  it('combines multiple providers and wraps children', () => {
    const { getByTestId } = render(
      combineProviders(
        [ProviderA, ProviderB],
        <div data-testid="child"> Child </div>
      )
    )

    expect(getByTestId('provider-b')).toBeInTheDocument()
    expect(getByTestId('child')).toBeInTheDocument()
  })

  it('skips falsy providers and renders children', () => {
    const { getByTestId } = render(
      combineProviders(
        [ProviderA, false, undefined],
        <div data-testid="child"> Child </div>
      )
    )

    expect(getByTestId('provider-a')).toBeInTheDocument()
    expect(() => getByTestId('child')).not.toThrow() // Child should be rendered
  })
})
