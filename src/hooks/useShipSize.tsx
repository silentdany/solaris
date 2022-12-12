/* eslint-disable consistent-return */
export const useShipSize = (size) => {
  switch (size) {
    case 'xx-small':
      return 'xxs';
    case 'x-small':
      return 'xs';
    case 'small':
      return 's';
    case 'medium':
      return 'm';
    case 'large':
      return 'l';
    case 'capital':
      return 'cap';
    case 'commander':
      return 'com';
    case 'titan':
      return 't';
    default:
      return '?';
  }
};
