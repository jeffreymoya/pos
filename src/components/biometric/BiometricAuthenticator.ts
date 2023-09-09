import TouchID from 'react-native-touch-id'

class BiometricAuthenticator {
  static async isSupported(): Promise<boolean> {
    return TouchID.isSupported()
  }

  static async authenticate(): Promise<boolean> {
    try {
      const biometricResult = await TouchID.authenticate(
        'Login with Biometrics'
      )
      return biometricResult.success
    } catch (error) {
      throw error
    }
  }
}

export default BiometricAuthenticator
