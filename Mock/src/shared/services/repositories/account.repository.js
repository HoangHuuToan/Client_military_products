import BaseRepository from 'repositories/base/base.repository';

export default class AccountRepository extends BaseRepository {
  constructor() {
    super('accounts');
  }

  list(data) {
    return this.client.get('', data);
  }

  create(data) {
    return this.client.post('', data);
  }
}
