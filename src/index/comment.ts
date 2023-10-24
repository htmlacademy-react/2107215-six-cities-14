type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type Comment = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: User;
}
