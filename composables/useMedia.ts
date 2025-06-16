import { ref, onMounted, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';

type Params = {
  initial?: boolean;
};

export function useMedia(media: string, params?: Params): Ref<boolean> {
  const matches = ref(params?.initial ?? false);

  let mediaQuery: MediaQueryList | null = null;
  let mediaQueryListener: ((event: MediaQueryListEvent) => void) | null = null;

  onMounted(() => {
    mediaQuery = window.matchMedia(media);
    matches.value = mediaQuery.matches;

    mediaQueryListener = (event) => {
      matches.value = event.matches;
    };
    mediaQuery.addEventListener('change', mediaQueryListener);
  });

  onBeforeUnmount(() => {
    if (mediaQuery !== null && mediaQueryListener !== null) {
      mediaQuery.removeEventListener('change', mediaQueryListener);
    }
  });

  return matches;
}
