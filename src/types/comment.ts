import {TUser} from '.';

export type TComment = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: TUser;
}
