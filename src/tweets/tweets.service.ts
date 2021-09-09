import { Injectable } from '@nestjs/common';
import { CreateTweet } from './create_tweet.dto';
import { Tweet } from './tweet';

@Injectable()
export class TweetsService {
  tweets = [
    new Tweet('Este es un tweet', 'Nacho', new Date()),
    new Tweet('Este es Otro tweet', 'Ale', new Date()),
  ];

  deletedTweets = [];

  getAllDeletedTweets() {
    return this.deletedTweets;
  }

  getAllTweets() {
    return this.tweets;
  }

  getTweetById(id: number) {
    return this.tweets[id];
  }

  createTweet(createDto: CreateTweet) {
    const tweet = new Tweet(createDto.tweet, createDto.author, new Date());
    this.tweets.push(tweet);
    return tweet;
  }

  deleteTweet(id: number) {
    this.tweets.forEach((element, index) => {
      if (index == id) {
        this.deletedTweets.push(this.tweets[id]);
        this.tweets.splice(index, 1);
      }
    });
  }

  updateTweet(id: number, createDto: CreateTweet) {
    const tweet = this.tweets[id];
    tweet.tweet = createDto.tweet;
    tweet.author = createDto.author;
    this.tweets[id] = tweet;
  }
}
