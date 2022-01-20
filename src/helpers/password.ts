import { hash, compare } from 'bcrypt';

export const generateHash = async (stringToHash: string): Promise<string> => {
  return hash(stringToHash, 8);
};

export const compareHash = async (
  hashedString: string | undefined,
  nonHashedString: string,
): Promise<boolean> => {
  if (!hashedString) return false;

  return compare(nonHashedString, hashedString);
};
