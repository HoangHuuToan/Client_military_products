import { defineStore } from 'pinia';
import { Loading, QSpinnerPie } from 'quasar';
import { computed, ref } from 'vue';

const gettxtsearchname = () => {
  const data = document.getElementById('txtsearching');
  return data;
};

export const useAppStore = defineStore('appStore', () => {
  const plant = ref(null);
  const theme = ref(null);
  const datasearchname = ref(gettxtsearchname());

  const setPlant = (data) => {
    sessionStorage.setItem('plantCode', data.code);
    plant.value = data;
  };
  const setTheme = (data) => {
    sessionStorage.setItem('themeName', data);
    theme.value = data;
  };

  const getdatasearch = computed(() => datasearchname.value);

  const updatedatasearchname = (data) => {
    datasearchname.value = data;
  };

  const pocMode = computed(() => plant.value?.type === 'P');

  const plantCode = computed(() => plant.value?.code);

  const isMultiLoading = ref(false);

  const setMultiLoading = (flg) => {
    isMultiLoading.value = flg;
  };

  const showLoading = () => {
    Loading.show({
      spinnerSize: 50,
      spinnerColor: 'primary',
      spinner: QSpinnerPie,
    });
  };

  const hideLoading = () => {
    Loading.hide();
  };

  return {
    isMultiLoading, setMultiLoading, hideLoading, showLoading, plant, setPlant, pocMode, plantCode, setTheme, getdatasearch, updatedatasearchname,
  };
});
