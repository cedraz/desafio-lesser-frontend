import { writable, get } from 'svelte/store';

export const countdown = writable(15);
export const isActive = writable(false);
export const challengeIniciated = writable(false);
export const formValues = writable({
  name: '',
  email: '',
  phone: '',
})

let intervalId: ReturnType<typeof setInterval> | null;

export function startCountdown() {
  if (get(isActive) || intervalId) {
    return;
  }

  challengeIniciated.set(true);
  isActive.set(true);
  intervalId = setInterval(() => {
    countdown.update(value => {
      if (value > 0) {
        return value - 1;
      } else {
        clearInterval(intervalId as ReturnType<typeof setInterval>);
        isActive.set(false);
        intervalId = null;
        return value;
      }
    });
  }, 1000);
}

export function stopCountdown() {
  isActive.set(false);
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}