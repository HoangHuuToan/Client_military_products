import { createRouter, createWebHistory } from 'vue-router';
import { getToken, setToken, removeToken } from 'utilities/auth';
import { useAuthStore } from 'stores/auth-store';
import { useAppStore } from 'stores/app-store';
import AuthService from 'services/auth.service';
import OBSService from 'services/obs.service';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
});

router.beforeEach(async (to, from, next) => {
  const { isLoggedIn, role, signIn } = useAuthStore();
  const { setPlant } = useAppStore();
  if (to.meta.noRequiredAuth) {
    if (!to.meta.beforeName) {
      next();
      return;
    }
  }
  if (!isLoggedIn) {
    const token = getToken();
    const plantCode = sessionStorage.getItem('plantCode');
    try {
      const data = await AuthService.check(token);
      const plant = OBSService.getPlant(plantCode);
      if (plant) setPlant(plant);
      if (data) {
        signIn(data);
        setToken(data.token);
        next();
        return;
      }
      throw new Error();
    } catch {
      removeToken();
      next({
        name: 'login',
      });
      return;
    }
  }
  if (role && to.meta.role) {
    const webRole = to.meta.role;
    const found = webRole.some((r) => role === r);
    if (!found) {
      next({ name: 'main-menu' });
      return;
    }
  }
  next();
});

export default router;
