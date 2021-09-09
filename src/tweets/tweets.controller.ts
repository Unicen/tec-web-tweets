import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTweet } from './create_tweet.dto';
import { Tweet } from './tweet';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}
  @Get()
  getTweets(): Tweet[] {
    return this.tweetsService.getAllTweets();
  }

  @Get('deleted')
  getDeletedTweets(): Tweet[] {
    return this.tweetsService.getAllDeletedTweets();
  }

  @Post()
  createTweet(@Body() createDto: CreateTweet): Tweet {
    if (createDto.tweet && createDto.author)
      return this.tweetsService.createTweet(createDto);
    else
      throw new HttpException(
        'Missing Tweet or/and Author',
        HttpStatus.BAD_REQUEST,
      );
  }

  @Get(':id')
  getTweetById(@Param('id') id): Tweet {
    return this.tweetsService.getTweetById(id);
  }

  @Delete(':id')
  deleteTweetById(@Param('id') id): void {
    return this.tweetsService.deleteTweet(id);
  }

  @Put(':id')
  updateTweetById(@Param('id') id, @Body() createDto: CreateTweet): void {
    return this.tweetsService.updateTweet(id, createDto);
  }
}
