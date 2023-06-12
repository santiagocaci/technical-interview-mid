import { style } from '@vanilla-extract/css';

export const header = style({
  maxWidth: '768px',
  margin: '0 auto',
  padding: '1rem 2rem',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyItems: 'center',
  borderBottom: '1px solid violet',
});

export const link = style({
  color: 'white',
  borderBottom: 'none',
  textDecoration: 'none',
  ':hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});
