export function formatPhone(phone: string) {
  const clean = phone.replace(/\D/g, "");
  if (clean.startsWith("55") && clean.length === 13)
    return `+${clean.substring(0, 2)} (${clean.substring(
      2,
      4
    )}) ${clean.substring(4, 9)}-${clean.substring(9)}`;
  if (clean.length === 11)
    return `+55 (${clean.substring(0, 2)}) ${clean.substring(
      2,
      7
    )}-${clean.substring(7)}`;
  return phone;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
