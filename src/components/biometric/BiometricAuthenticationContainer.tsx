import React, { Component } from 'react'
import BiometricAuthenticator from './BiometricAuthenticator'
import BiometricAuthenticationUI from './BiometricAuthenticationUI'

class BiometricAuthenticationContainer extends Component {
  handleBiometricLogin = async (): Promise<void> => {
    try {
      const isSupported = await BiometricAuthenticator.isSupported()
      if (isSupported) {
        const isSuccess = await BiometricAuthenticator.authenticate()
        if (isSuccess) {
          // Biometric authentication succeeded
        }
      }
    } catch (error) {
      // Handle authentication error
    }
  }

  render(): JSX.Element {
    return (
      <BiometricAuthenticationUI
        handleBiometricLogin={this.handleBiometricLogin}
      />
    )
  }
}

export default BiometricAuthenticationContainer
