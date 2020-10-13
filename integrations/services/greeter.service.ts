import {Service, Context, ServiceBroker} from 'moleculer';
import HttpClientService from 'moleculer-http-client';

export default class GreeterService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'greeter',
      mixins: [HttpClientService],
      settings: {
        httpClient: { includeMethods: ['get', 'post'] },
      },
      actions: {
        /**
		 *
		 * Say a 'Hello' action.
		 *
		 */
        hello: {
          rest: {
            method: 'GET',
            path: '/hello',
          },
          async handler(): Promise<string> {
            return this.actions.get({
              url: 'https://httpbin.org/json',
              opt: { responseType: 'json' },
            }).then((r) => {
              debugger;
              return r.body;
            });
          },
        },

        /**
				 * Welcome, a username
				 */
        welcome: {
          rest: '/welcome',
          params: {
            name: 'string',
          },
          async handler(ctx: Context<{name: string}>): Promise<string> {
            return this.ActionWelcome(ctx.params.name);
          },
        },
      },
    });
  }

  // Action
  public ActionHello(): string {
    return 'Hello Moleculer';
  }

  public ActionWelcome(name: string): string {
    return `Welcome, ${name}`;
  }
}
