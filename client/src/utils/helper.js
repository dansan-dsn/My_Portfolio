export const validatePhoneNumber = (phone) => {
  // Simple validation for XXX-XXX-XXXX format

  const regex = /^\d{3}\d{3}\d{4}$/;
  return regex.test(phone);
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
