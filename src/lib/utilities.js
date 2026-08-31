export function formatDate(isoString, options = {}) {
  try {
    const date = new Date(isoString);
    const formatter = new Intl.DateTimeFormat('it-IT', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      ...options
    });
    return formatter.format(date);
  } catch (e) {
    return isoString;
  }
}

export default {
  formatDate
};
