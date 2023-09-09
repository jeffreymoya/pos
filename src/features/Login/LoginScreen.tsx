// src/components/LoginScreen.tsx
import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
import { RootQuery } from './__generated__/RootQuery.graphql'
import LoginMutation from '../../relay/mutations/LoginMutation'

interface LoginScreenProps {
  login: RootQuery['login']
}

const LoginScreen: React.FC<LoginScreenProps> = ({ login }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    LoginMutation(
      username,
      password,
      () => {
        // Handle successful login
      },
      (error) => {
        // Handle login error
      }
    )
  }

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

export default createFragmentContainer(LoginScreen, {
  login: graphql`
      fragment LoginScreen_login on RootQuery {
          login(username: String!, password: String!) {
              token
              user {
                  id
                  username
              }
          }
      }
  `,
})
