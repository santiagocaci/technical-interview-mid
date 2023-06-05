import { style } from '@vanilla-extract/css';

export const header = style({
  padding: '1rem 2rem',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  borderBottom: '1px solid violet',
});

export const link = style({
  textUnderlineOffset: '.2rem',
  ':hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});
