import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { BooksModule } from './books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`mongodb+srv://app:${process.env.DATABASE_PASSWORD}@my-books.wl3um.mongodb.net/main`),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
