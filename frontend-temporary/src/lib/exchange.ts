export async function getUSDRate(): Promise<number> {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 3600 }, // cache 1 hora
    });
    const data = await res.json();
    return data.rates?.MXN ?? 17.5;
  } catch {
    return 17.5;
  }
}

export function formatUSD(mxn: number, rate: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Math.round(mxn / rate));
}
