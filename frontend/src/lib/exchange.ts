export type Rates = {
  MXN: number;
  EUR: number;
  CAD: number;
};

const FALLBACK_RATES: Rates = { MXN: 17.5, EUR: 0.92, CAD: 1.36 };

export async function getRates(): Promise<Rates> {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 3600 }, // cache 1 hora
    });
    const data = await res.json();
    return {
      MXN: data.rates?.MXN ?? FALLBACK_RATES.MXN,
      EUR: data.rates?.EUR ?? FALLBACK_RATES.EUR,
      CAD: data.rates?.CAD ?? FALLBACK_RATES.CAD,
    };
  } catch {
    return FALLBACK_RATES;
  }
}

// Kept for backwards compatibility with any existing callers.
export async function getUSDRate(): Promise<number> {
  const rates = await getRates();
  return rates.MXN;
}

export function formatUSD(mxn: number, usdRate: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Math.round(mxn / usdRate));
}

export function formatEUR(mxn: number, usdRate: number, eurRate: number): string {
  const usd = mxn / usdRate;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(Math.round(usd * eurRate));
}

export function formatCAD(mxn: number, usdRate: number, cadRate: number): string {
  const usd = mxn / usdRate;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(Math.round(usd * cadRate));
}
