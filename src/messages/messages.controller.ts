import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'This action returns all messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
