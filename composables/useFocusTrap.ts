import * as focusTrap from 'focus-trap';
import { onMounted, ref, watchEffect, nextTick } from 'vue';
import type { Ref } from 'vue';

export type Params = {
  clickOutsideDeactivates?: boolean;
  ref?: Ref<boolean>;
};

export function useFocusTrap(element: Ref<HTMLElement | null>, params?: Params) {
  interface Trap {
    active: boolean;
    activate(): void;
    deactivate(): void;
  }

  const isActive = params?.ref ?? ref(false);

  let trap: Trap | null = null;
  onMounted(() => {
    if (element.value) {
      trap = focusTrap.createFocusTrap(element.value, {
        preventScroll: true,
        allowOutsideClick: true,
        escapeDeactivates: false,
        clickOutsideDeactivates: params?.clickOutsideDeactivates ?? false,
        onActivate: () => {
          isActive.value = true;
        },
        onDeactivate: () => {
          isActive.value = false
        },
      });

      if (isActive.value) {
        trap.activate();
      }
    }
  });

  watchEffect(async () => {
    if (isActive.value) {
      await nextTick();
      trap?.activate();
    } else {
      trap?.deactivate();
    }
  })

  return {
    isActive,
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
