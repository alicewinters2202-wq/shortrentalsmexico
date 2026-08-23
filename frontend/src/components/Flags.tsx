// Inline SVG flags -- deliberately not Unicode flag emoji. Flag emoji rely on
// OS/browser font support that's inconsistent (notably Chrome on Windows falls
// back to plain "US"/"MX" text). SVGs render identically everywhere.

export function FlagUS({ style, width = 22, height = 15 }: { style?: React.CSSProperties; width?: number; height?: number }) {
  return (
    <svg viewBox="0 0 24 16" width={width} height={height} style={style} aria-hidden="true">
      <rect width="24" height="16" fill="#B22234" />
      {[1, 3, 5, 7, 9, 11, 13].map((y) => (
        <rect key={y} y={y} width="24" height="1.23" fill="#fff" />
      ))}
      <rect width="10.5" height="8.62" fill="#3C3B6E" />
    </svg>
  );
}

export function FlagMX({ style, width = 22, height = 15 }: { style?: React.CSSProperties; width?: number; height?: number }) {
  return (
    <svg viewBox="0 0 24 16" width={width} height={height} style={style} aria-hidden="true">
      <rect width="8" height="16" fill="#006847" />
      <rect x="8" width="8" height="16" fill="#fff" />
      <rect x="16" width="8" height="16" fill="#CE1126" />
      <circle cx="12" cy="8" r="2" fill="#8B5E34" />
    </svg>
  );
}

export function FlagFR({ style, width = 22, height = 15 }: { style?: React.CSSProperties; width?: number; height?: number }) {
  return (
    <svg viewBox="0 0 24 16" width={width} height={height} style={style} aria-hidden="true">
      <rect width="8" height="16" fill="#002395" />
      <rect x="8" width="8" height="16" fill="#fff" />
      <rect x="16" width="8" height="16" fill="#ED2939" />
    </svg>
  );
}

export const FLAG_MAP: Record<string, (props: { style?: React.CSSProperties; width?: number; height?: number }) => React.JSX.Element> = {
  MX: FlagMX,
  US: FlagUS,
  FR: FlagFR,
};
