export const formatUsername = (username: string): string => {
  return username.toUpperCase().trim();
};
export const validateUsername = (username: string): boolean => {
  const res = /^[a-z0-9_\.]+$/.exec(username);
  const valid = !!res && !/(\.\.)/.exec(username);
  return valid;
};
