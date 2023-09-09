import React, { FC } from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const BiometricButton = styled(Button)``

interface BiometricAuthenticationUIProps {
  handleBiometricLogin: () => void
}

const BiometricAuthenticationUI: FC<BiometricAuthenticationUIProps> = ({
  handleBiometricLogin,
}) => (
  <Container>
    <BiometricButton
      title="Login with Biometrics"
      onPress={handleBiometricLogin}
    />
  </Container>
)

export default BiometricAuthenticationUI
