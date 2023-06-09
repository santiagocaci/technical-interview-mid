import { style } from '@vanilla-extract/css';

export const story = style({
  color: 'burlywood',
});

export const storyHeader = style({
  lineHeight: '1.5rem',
});

export const storyTitle = style({
  color: 'white',
  fontSize: '1.05rem',
  textDecoration: 'none',
});

export const storyFooter = style({
  fontSize: '1rem',
  lineHeight: '24px',
  marginBottom: '0.5rem',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
  },
});

export const storyDomain = style({
  color: '#888',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const smallLink = style({
  color: '#888',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});
