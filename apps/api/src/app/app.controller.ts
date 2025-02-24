import { Controller, Get, Sse, MessageEvent, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { fromEvent, map, Observable } from 'rxjs';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly eventEmitter: EventEmitter2) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  createData() {
    this.eventEmitter.emit('create', { data: 'data', time: new Date().getTime() });
    return this.appService.createData();
  }

  @OnEvent('create')
  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitter, 'create').pipe(
      map((data: string) => {
        return { data };
      })
    );
  }
}
