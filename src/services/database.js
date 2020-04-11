import RxDB from 'rxdb';
import { DATABASE_NAME, DATABASE_REMOTE_SERVER } from '../constants/rxdb';
import collections from './collections';
import testItems from './testitems';

/**
 * creates the database
 */
async function _create() {
  console.log('creating database..');

  RxDB.plugin(require('pouchdb-adapter-asyncstorage'));
  RxDB.plugin(require('pouchdb-adapter-http'));

  const db = await RxDB.create({
    name: DATABASE_NAME,
    adapter: 'asyncstorage',
    queryChangeDetection: true,
  });
  console.log('created database');

  // create collections
  await Promise.all(collections.map(colData => db.collection(colData)));

  testItems.forEach(i => db.items.insert(i));

  db.collections.orders.preInsert(() => {
    // add hooks
  });

  console.log('syncing..');
  // sync with server
  const replicationState = db.orders.sync({
    remote: DATABASE_REMOTE_SERVER,
  });

  replicationState.error$.subscribe(error => console.dir(error));

  return db;
}

let INSTANCE;

export async function initDB() {
  console.log('initDB()');
  INSTANCE = await _create();
}

export const db = { get: () => INSTANCE };
