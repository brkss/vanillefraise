

export const validateEmail = (email: string): boolean => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const formatUsername = (username: string): string => {
  return username.toUpperCase().trim();
}

export const validateUsername = (username: string): boolean => {
  const res = /^[a-z0-9_\.]+$/.exec(username);
  const valid = !!res;
  return valid;
};
