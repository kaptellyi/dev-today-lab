import { BREAKPOINTS_VALUES } from '../constants';

export const definePaginateIndex = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= BREAKPOINTS_VALUES.lg) return 10;
  if (windowWidth >= BREAKPOINTS_VALUES.md) return 8;
  return 4;
};
