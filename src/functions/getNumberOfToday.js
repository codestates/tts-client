export function getNumberOfToday() {
  const today = new Date().getDay();
  if (today === 0) {
    return 7;
  }
  return today;
}
