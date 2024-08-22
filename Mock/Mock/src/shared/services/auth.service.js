import { useAuthStore } from 'stores/auth-store';
import BaseService from 'services/base.service';
import { setToken, removeToken } from 'utilities/auth';
import { useDataStore } from 'stores/data-store';

class AuthService extends BaseService {
  async login(data) {
    const { signIn } = useAuthStore();
    const { getUser } = useDataStore();
    const result = getUser({ initial: data.initial, password: data.password });
    if (result) {
      signIn(result);
      setToken(result.token);
      return true;
    }
    return false;
  }

  async logout() {
    const { signOut } = useAuthStore();
    try {
      /* empty */
    } catch {
      /* empty */
    } finally {
      removeToken();
      signOut();
    }
  }

  async check(token) {
    const { getUser } = useDataStore();
    return getUser({ token });
  }
}
export default new AuthService('auth');
