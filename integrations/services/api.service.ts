import { Service, ServiceBroker } from 'moleculer';
import ApiGateway from 'moleculer-web';

export default class ApiService extends Service {
  public constructor(broker: ServiceBroker) {
    super(broker);
    // @ts-ignore
    this.parseServiceSchema({
      name: 'api',
      mixins: [ApiGateway],
      // More info about settings: https://moleculer.services/docs/0.14/moleculer-web.html
      settings: {
        port: process.env.PORT || 3000,

        routes: [{
          path: '/api',
          whitelist: [
            // Access to any actions in all services under "/api" URL
            '**',
          ],
        }],
      },
    });
  }
}
