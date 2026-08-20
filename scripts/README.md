# generate-reviews.py

Reusable generator for the static review data in `frontend/src/lib/seedReviews.ts`
(and the identical copy in `frontend-temporary/src/lib/seedReviews.ts`).

## When to re-run this
When new properties are added to the backend's Excel source files, re-run this
script to generate reviews for them. It reads the same property data (city,
price, amenities, parking, pet-friendly, balcony) that the live backend uses.

## What it guarantees
- No review text repeats anywhere on the site (checked, not assumed)
- No single topic/sentence is reused more than 4 times site-wide
- No property repeats the same topic across its own reviews
- Price/value language matches the property's real price tier (budget/mid/upper/luxury)
- Never references shared-building amenities (elevator, "the building has security",
  "the building is quiet") since some properties are houses, not apartments

## How to use
1. Update `all_properties_v2.json` — export fresh property data (id, slug, city,
   address, pricePerMonth, bedrooms, parkingSpots, amenities, balcony, petFriendly)
   from the backend's current Excel files, same shape as before.
2. Run the script — it outputs `generated_reviews_v9.json`.
3. Convert that JSON into the `SEED_REVIEWS` TypeScript object (id, name, rating,
   comment, createdAt) and write it into `frontend/src/lib/seedReviews.ts`.
4. Copy the same file to `frontend-temporary/src/lib/seedReviews.ts`.
5. Re-run the independent audit checks before pushing (exact duplicate check,
   fragment-reuse check, price-tier check) — don't just trust the script's own
   internal assertions, verify against the actual written file.

## Known manual overrides
If specific properties need custom treatment (e.g. flagship properties that should
only get 5-star reviews), apply those directly to the generated JSON before
converting to TypeScript, or hardcode them separately — the script itself has no
built-in concept of "pinned" properties yet.
