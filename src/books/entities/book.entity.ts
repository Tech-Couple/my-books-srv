import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  name: string;

  @Prop()
  cover: string;

  @Prop()
  pagesNo: number;

  @Prop()
  author: string;

  @Prop()
  description: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
