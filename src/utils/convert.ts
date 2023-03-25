export function convertRatesToJson(input?: string) {
  if (!input) {
    return [];
  }

  // split the input into lines and remove the first two lines
  let lines = input.split('\n').slice(2);

  // check if the last line is empty and remove it
  if (lines[lines.length - 1].trim().length === 0) {
    lines = lines.slice(0, -1);
  }

  return lines.map(line => {
    const [country, currency, amount, code, rate] = line.split('|');

    return {
      country,
      currency,
      amount: Number(amount),
      code,
      rate: Number(rate),
    };
  });
}
