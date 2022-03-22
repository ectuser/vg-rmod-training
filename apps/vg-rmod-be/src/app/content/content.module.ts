import { Module } from '@nestjs/common';
import { ContentController } from './controllers/content/content.controller';
import { ContentService } from './services/content/content.service';

@Module({
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
