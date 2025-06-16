import * as focusTrap from 'focus-trap';
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';

export function useFocusTrap(element: Ref<HTMLElement | null>) {
  interface Trap {
    active: boolean;
    activate(): void;
    deactivate(): void;
  }

  let trap: Trap | null = null;
  onMounted(() => {
    if (element.value) {
      trap = focusTrap.createFocusTrap(element.value, {
        allowOutsideClick: true,
        preventScroll: true,
      });
    }
  });

  return {
    activate: () => {
      if (trap !== null && !trap.active) {
        trap.activate();
      }
    },
    deactivate: () => {
      if (trap !== null && trap.active) {
        trap.deactivate();
      }
    },
  };
}
