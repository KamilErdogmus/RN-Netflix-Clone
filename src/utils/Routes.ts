export const Routes = {
  WELCOME: 'WELCOME',
  HOMESCREEN: 'HOMESCREEN',
  MOVIELIST: 'MOVIELIST',
  ADDNEWLIST: 'ADDNEWLIST',
} as const;

export type RouteName = keyof typeof Routes;
