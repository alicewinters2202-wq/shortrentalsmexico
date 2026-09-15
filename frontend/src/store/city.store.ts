import { create } from 'zustand';

interface CityStore {
  city: string | null;
  setCity: (city: string | null) => void;
}

// Used only to bridge a property detail page's city (known server-side)
// to the globally-rendered WhatsAppButton, which can't see page props
// directly. Deliberately NOT used for the listings page — that page's
// city is already available in the URL, which WhatsAppButton reads
// directly, so there's no staleness risk there.
export const useCityStore = create<CityStore>((set) => ({
  city: null,
  setCity: (city) => set({ city }),
}));
