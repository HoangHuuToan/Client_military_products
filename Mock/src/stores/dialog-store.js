import { defineStore } from 'pinia';
import { ref, shallowRef } from 'vue';

export const useDialogStore = defineStore('dialogStore', () => {
  const dialog = ref([]);
  const show = (titleVal, contentVal, configVal, typeVal) => new Promise((resolve) => {
    const item = {
      title: titleVal,
      content: contentVal,
      type: typeVal,
      config: configVal,
      show: true,
      close: resolve,
    };
    dialog.value.push(item);
  });
  const showContent = (title, content, config) => {
    const component = shallowRef(content);
    return show(title, component, config, 'content');
  };
  const showMessage = (title, content, config) => show(title, content, config, 'message');
  const showConfirm = (title, content, config) => show(title, content, config, 'confirm');
  const hide = (value) => {
    if (dialog.value.length === 0) return;
    const last = dialog.value[dialog.value.length - 1];
    last.show = false;

    setTimeout(() => {
      last.close(value);
      dialog.value.pop();
    }, 200);
  };
  return {
    dialog, showContent, showConfirm, showMessage, hide,
  };
});
