import { Injectable, NotFoundException } from '@nestjs/common';
import { contentTexts } from '../../consts/texts';

@Injectable()
export class ContentService {
    async getTextsByPageId(pageId: string) {
        if (contentTexts[pageId]) {
            return contentTexts[pageId];
        } else {
            throw new NotFoundException();
        }
    }
}
