type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type Comment = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: User;
}

export {type Comment};
