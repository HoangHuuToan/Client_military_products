import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null);
  const isLoggedIn = computed(() => user.value?.id);
  const token = computed(() => user.value?.token);
  const role = computed(() => user.value?.roleKbn);
  const signIn = (userData) => {
    user.value = userData;
  };
  const signOut = () => {
    user.value = null;
  };
  return {
    isLoggedIn, token, role, signIn, signOut, user,
  };
});
