export const ALERT_SHOW = 'ALERT_SHOW';
export const ALERT_HIDE = 'ALERT_HIDE';

export function showAlert(message) {
  return {
    type: ALERT_SHOW,
    message,
  };
}

export function hideAlert() {
  return {
    type: ALERT_HIDE,
  };
}