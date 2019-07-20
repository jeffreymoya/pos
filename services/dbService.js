import RxDB from 'rxdb';

/**
 * creates the database
 */
async function _create() {
  console.log('creating database..');
  const db = await RxDB.create({
    name: 'pos',
    adapter: '',
    queryChangeDetection: true,
  });
  console.log('created database');

  // create collections
  //await Promise.all(collections.map(colData => db.collection(colData)));

  db.collections.table.preInsert(() => {
    // add hooks
  });

  // sync with server
  await db.pos.sync({
    remote: ''
  });

  return db;
}

let DB_INSTANCE;

export async function initDatabase() {
  console.log('initDatabase()');
  DB_INSTANCE = await _create();
}

export class DbService {
  get db() {
    return DB_INSTANCE;
  }
}
