export const phoneMask = (value: string) => {
  if (!value) return;

  if (value[0] === '0') value = value.slice(1);

  const newValue = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1)$2')
    .replace(/(\d{4})(\d)/, '$1-$2');

  return newValue;
};
