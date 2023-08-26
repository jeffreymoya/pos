// rxdbConfig.ts
import RxDB from 'rxdb'

const dbConfig: RxDB.Configuration = {
  name: 'mydb',
  adapter: 'idb',
  // Use environment variables for configuration
  password: process.env.RXDB_PASSWORD,
  // Other RxDB configuration options
}

export default dbConfig
