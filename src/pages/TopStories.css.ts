import { style } from '@vanilla-extract/css';

export const body = style({
  maxWidth: '768px',
  margin: '2rem auto',
  padding: '0 2rem',
});

export const buttonMore = style({
  backgroundColor: 'violet',
  color: '#242424',
  padding: '8px 16px',
  fontWeight: '700',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
});
