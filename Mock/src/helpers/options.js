/* eslint-disable no-restricted-syntax */
/* eslint-disable quote-props */
import { ROLE_KBN, ACCOUNT_STATUS_KBN } from './enum';

const generateOptions = (enumKbn) => {
  const options = [];
  for (const [key, value] of Object.entries(enumKbn)) {
    options.push({
      label: key,
      value,
    });
  }

  return options;
};

// it is used for select box ( object to array)
export const ROLE_OPTIONS = generateOptions(ROLE_KBN);
export const ACCOUNT_STATUS_OPTIONS = generateOptions(ACCOUNT_STATUS_KBN);
