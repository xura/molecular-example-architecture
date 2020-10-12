import { Service, ServiceBroker } from 'moleculer';
import HttpClientService from 'moleculer-http-client';
import { INestjsService } from '@xura/shared';

export default class NestjsService extends Service implements INestjsService {
  public constructor(broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'nestjs-service',
      mixins: [HttpClientService],
      settings: {
        httpClient: { includeMethods: ['get', 'post'] },
      },
      actions: {
        helloWorld: {
          handler() {
            return this.actions.get('https://httpbin.org/get');
          },
        },
      },
    });
  }

  helloWorld = (message: string): Promise<string> => Promise.resolve(message)
}
