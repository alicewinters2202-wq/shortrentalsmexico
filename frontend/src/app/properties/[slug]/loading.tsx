export default function Loading() {
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="space-y-3 mb-6">
          <div className="h-3 w-32 rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
          <div className="h-10 w-80 rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
        </div>
        <div className="aspect-[16/9] rounded-2xl animate-pulse mb-8" style={{ backgroundColor: 'var(--card)' }} />
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
          <div className="space-y-4">
            <div className="h-4 w-full rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
            <div className="h-4 w-5/6 rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
            <div className="h-4 w-2/3 rounded animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
          </div>
          <div className="h-64 rounded-2xl animate-pulse" style={{ backgroundColor: 'var(--card)' }} />
        </div>
      </div>
    </div>
  );
}
