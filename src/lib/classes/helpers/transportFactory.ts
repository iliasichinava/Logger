import { Transport, log_props } from "lib/interfaces/logger";

import { Console } from "../transports/console";
import { Udp } from "../transports/udp";
import { Tcp } from "../transports/tcp";
import { AbstractTransport } from "lib/interfaces/transport";

export class TransportFactory {
    
    private static instance: TransportFactory;

    private constructor() { }

    public static getFactory() {
        if(!TransportFactory.instance) {
            TransportFactory.instance = new TransportFactory();
        }

        return TransportFactory.instance;
    }

    public create(type: log_props): AbstractTransport {
        switch(type.transport) {
            case undefined:
            case Transport.Console:
                return new Console(type.include_time, type.format);
            case Transport.UDP:
                return new Udp(type.include_time, type.format);
            case Transport.TCP:
                return new Tcp(type.include_time, type.format);
            default:
                return new Console(type.include_time, type.format);    
        }
    }
}