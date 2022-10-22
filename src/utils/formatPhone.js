export const formatPhone = (phone) => {
  return phone
      .replace(/\D/g, "")
      .replace(/^(\d)/, "($1")
      .replace(/^(\(\d{2})(\d)/, "$1) $2")
      .replace(/(\d{5})(\d{1,5})/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
};
