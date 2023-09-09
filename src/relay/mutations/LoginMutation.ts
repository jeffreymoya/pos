import { commitMutation, graphql } from 'react-relay'
import environment from '../environment'

const mutation = graphql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        username
      }
    }
  }
`

function commit(
  username: string,
  password: string,
  onCompleted: () => void,
  onError: (error: Error) => void
) {
  const variables = {
    input: {
      username,
      password,
    },
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  })
}

export default commit
