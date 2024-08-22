import RepositoryFactory from 'repositories/base/repository.factory';

export default class BaseService {
  constructor(serviceName) {
    this.serviceName = serviceName;
    this.dao = RepositoryFactory.getRepository(serviceName);
  }
}
