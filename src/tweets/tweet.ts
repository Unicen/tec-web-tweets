export class Tweet {
  tweet: string;
  author: string;
  date: Date;

  constructor(tweet: string, author: string, date: Date) {
    this.tweet = tweet;
    this.author = author;
    this.date = date;
  }
}
