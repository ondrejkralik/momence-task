export function convertRates(input?: string) {
  if (!input) {
    return {
      date: new Date(),
      rates: [],
    };
  }

  let lines = input.split('\n');

  // check if the last line is empty and remove it
  if (lines[lines.length - 1].trim().length === 0) {
    lines = lines.slice(0, -1);
  }

  const date = new Date(lines[0].split('#')[0]);

  const rates = lines.slice(2).map(line => {
    const [country, currency, amount, code, rate] = line.split('|');

    return {
      country,
      currency,
      amount: Number(amount),
      code,
      rate: Number(rate),
    };
  });

  return {
    date,
    rates,
  };
}
