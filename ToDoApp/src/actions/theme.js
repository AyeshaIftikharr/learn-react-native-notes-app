import { CHANGE_PRIMARY_COLOR } from '../constants';

export const changePrimaryColor = color => ({
  type: CHANGE_PRIMARY_COLOR,
  color,
});
