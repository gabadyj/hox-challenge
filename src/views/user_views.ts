import User from '../models/User';

export interface IUserView {
  id: string;
  name?: string;
  email?: string;
  createdAt?: Date;
}

export const renderOne = (user: User): IUserView => ({
  id: user.id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
});

export const renderMany = (users: User[]): IUserView[] => {
  return users.map(user => renderOne(user));
};
