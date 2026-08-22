export default function Loading() {
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="mb-10 space-y-3">
          <div className="h-3 w-24 rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
          <div className="h-12 w-72 rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
          <div className="h-4 w-40 rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i}>
              <div className="aspect-[4/3] rounded-2xl animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
              <div className="mt-4 space-y-2">
                <div className="h-6 w-3/4 rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
                <div className="h-4 w-1/2 rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
