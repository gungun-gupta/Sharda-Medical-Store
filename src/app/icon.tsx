import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#2A7A9D',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '25%', // rounded-xl equivalent for 32x32 icon
          fontWeight: 900,
          fontFamily: 'sans-serif',
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
