export const localizedNumbers = (input: string): string => {
  return input.replace(/[۰-۹٠-٩]/g, (digit) =>
    String.fromCharCode(digit.charCodeAt(0) - (digit >= "۰" ? 1728 : 1584))
  );
};
