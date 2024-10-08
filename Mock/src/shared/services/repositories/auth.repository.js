import BaseRepository from 'repositories/base/base.repository';

export default class AuthRepository extends BaseRepository {
  constructor() {
    super('auth');
  }

  login(data) {
    return this.client.post('/login', data);
  }

  logout() { }

  check(token) {
    return this.client.get('/me', token);
  }
}
