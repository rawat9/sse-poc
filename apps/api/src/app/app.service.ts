import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  $state: string[] = []

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  createData() {
    this.$state.push('1')
  }
}
