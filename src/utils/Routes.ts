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
  PROFILE: 'PROFILE',
} as const;

export type RouteName = keyof typeof Routes;
