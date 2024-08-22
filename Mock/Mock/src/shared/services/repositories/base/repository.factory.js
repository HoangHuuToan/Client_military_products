import AuthRepository from 'repositories/auth.repository';
import AccountRepository from 'repositories/account.repository';

class RepositoryFactory {
  getRepository(serviceName) {
    switch (serviceName) {
      case 'auth':
        return new AuthRepository();
      case 'account':
        return new AccountRepository();
      default:
        throw Error('Invalid param');
    }
  }
}

export default new RepositoryFactory();
