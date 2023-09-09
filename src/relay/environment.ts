import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

type FetchQueryFunction = (
  url: string,
  query: string,
  variables: Record<string, any>
) => Promise<Response>

class RelayEnvironment {
  private readonly environment: Environment

  constructor(fetchQueryFn: FetchQueryFunction) {
    this.environment = this.setupEnvironment(fetchQueryFn)
  }

  setupEnvironment(fetchQueryFn: FetchQueryFunction): Environment {
    const fetchQuery: FetchFunction = async (operation, variables) => {
      const response = await fetchQueryFn(
        'your-graphql-endpoint',
        operation?.text ?? '',
        variables
      )
      return await response.json()
    }

    return new Environment({
      network: Network.create(fetchQuery),
      store: new Store(new RecordSource()),
    })
  }

  getEnvironment(): Environment {
    return this.environment
  }
}

const customFetchQuery: FetchQueryFunction = async (
  url: string,
  query: string,
  variables: Record<string, any>
) =>
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

const environment: RelayEnvironment = new RelayEnvironment(customFetchQuery)
export default environment.getEnvironment()
