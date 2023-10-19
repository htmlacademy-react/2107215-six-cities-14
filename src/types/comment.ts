export type Comment = [
  {
    comment: string,
    date: Date,
    id: number,
    rating: number,
    user: {
      avatarUrl: string,
      id: number,
      isPro: boolean,
      name: string
   }
  }
]
