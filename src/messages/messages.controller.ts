import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return 'This action returns all messages';
    }

    @Post()
    createMessage() {
        return 'This action creates a message';
    }

    @Get(':id')
    getMessage() {
        return 'This action returns a message';
    }
}
