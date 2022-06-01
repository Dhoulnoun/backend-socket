import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Foo', text: 'Bar' }];
  clientToUser = {};
  create(createMessageDto: CreateMessageDto, clientId: string) {
    const message = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text,
    };
    console.log('dto = ', createMessageDto);
    console.log('name = ', createMessageDto.name);
    console.log('text = ', createMessageDto.text);
    console.log('message = ', message);
    this.messages.push(message);
    return message;
  }

  findAll() {
    return this.messages;
  }

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;

    console.log(Object.values(this.clientToUser));
    return Object.values(this.clientToUser);
  }

  getClientByName(clientId: string) {
    return this.clientToUser[clientId];
  }
}
