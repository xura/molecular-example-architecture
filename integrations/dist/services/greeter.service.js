"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_1 = require("moleculer");
const moleculer_http_client_1 = __importDefault(require("moleculer-http-client"));
class GreeterService extends moleculer_1.Service {
    constructor(broker) {
        super(broker);
        this.broker = broker;
        this.parseServiceSchema({
            name: "greeter",
            mixins: [moleculer_http_client_1.default],
            settings: {
                httpClient: { includeMethods: ["get", "post"] }
            },
            actions: {
                hello: {
                    rest: {
                        method: "GET",
                        path: "/hello"
                    },
                    handler() {
                        return __awaiter(this, void 0, void 0, function* () {
                            return this.actions.get({
                                url: "https://httpbin.org/get",
                                opt: { responseType: "json" }
                            }).then((res) => res);
                        });
                    },
                },
                welcome: {
                    rest: "/welcome",
                    params: {
                        name: "string",
                    },
                    handler(ctx) {
                        return __awaiter(this, void 0, void 0, function* () {
                            return this.ActionWelcome(ctx.params.name);
                        });
                    },
                },
            },
        });
    }
    ActionHello() {
        return "Hello Moleculer";
    }
    ActionWelcome(name) {
        return `Welcome, ${name}`;
    }
}
exports.default = GreeterService;
//# sourceMappingURL=greeter.service.js.map