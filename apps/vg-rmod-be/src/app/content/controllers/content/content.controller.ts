import { Controller, Get, Param } from '@nestjs/common';
import { ContentService } from '../../services/content/content.service';

@Controller('content')
export class ContentController {

    constructor(private readonly contentService: ContentService) {}

    @Get(':pageId')
    async getTexts(@Param('pageId') pageId: string) {
        return await this.contentService.getTextsByPageId(pageId);
    }
    
}
