import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Dynamic Apple Touch Icon generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: 'linear-gradient(135deg, #2A7A9D 0%, #174256 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '38px',
          fontWeight: 900,
          fontFamily: 'sans-serif',
          boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.2)',
        }}
      >
        +
      </div>
    ),
    {
      ...size,
    }
  );
}
