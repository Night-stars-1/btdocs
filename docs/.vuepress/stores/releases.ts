import { defineStore } from 'pinia';
// import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

export const useReleasesStore = defineStore('releases', () => {
  const tagName = ref(import.meta.env.VITE_TAG_NAME || '0.23.126');
  const isRefreshed = ref(true);

  // useFetch<string>('/api/version').then(({ data }) => {
  //   tagName.value =
  //     JSON.parse(data.value as any).data.tag_name || tagName.value;
  //   isRefreshed.value = true;
  // });

  return { tagName, isRefreshed };
});
