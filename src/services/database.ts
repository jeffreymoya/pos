import RxDB, { RxDatabase, RxReplicationState } from 'rxdb'
import { DATABASE_NAME, DATABASE_REMOTE_SERVER } from '../common/rxdb'
import { Order } from '../state/redux/slices/orders'
import collections from './collections'
import testItems from './testitems'

export default class DatabaseService {
  private rxdb: RxDatabase

  public syncOrders() {
    return this.rxdb.orders.sync({ remote: DATABASE_REMOTE_SERVER })
  }

  public getAllItems() {
    return this.toJSON(this.rxdb.items.find().exec())
  }

  public getAllOrders() {
    return this.rxdb.orders.find().exec()
  }

  public insertOrder(order: Order) {
    return this.rxdb.orders.insert(order)
  }

  private toJSON(promise) {
    return promise.then((items) => items.map((item) => item.toJSON()))
  }

  public async init() {
    if (this.rxdb) {
      return
    }

    console.log('creating database..')

    RxDB.plugin(require('pouchdb-adapter-asyncstorage'))
    RxDB.plugin(require('pouchdb-adapter-http'))

    this.rxdb = await RxDB.create({
      name: DATABASE_NAME,
      adapter: 'asyncstorage',
      queryChangeDetection: true,
      multiInstance: false,
    })
    console.log('created database')

    // create collections
    await Promise.all(
      collections.map((colData) => this.rxdb.collection(colData))
    )

    this.rxdb.collections.items.postInsert((data) => {
      console.dir(data)
    }, true)

    testItems.forEach((i) => this.rxdb.items.insert(i))

    console.log('syncing..')
    // sync with server
    const replicationState: RxReplicationState = this.rxdb.orders.sync({
      remote: DATABASE_REMOTE_SERVER,
    })

    replicationState.error$.subscribe((error) => console.dir(error))
  }
}
