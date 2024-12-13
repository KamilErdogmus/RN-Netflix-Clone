export const Routes = {
  WELCOME: 'WELCOME',
  HOMESCREEN: 'HOMESCREEN',
  MOVIELIST: 'MOVIELIST',
  ADDNEWLIST: 'ADDNEWLIST',
  MAIN: 'MAIN',
  HOME: 'HOME',
  NEWHOT: 'NEWHOT',
  SEARCH: 'SEARCH',
  DOWNLOADS: 'DOWNLOADS',
} as const;

export type RouteName = keyof typeof Routes;
