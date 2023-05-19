import { ILogger, Level, log_props } from "lib/interfaces/logger";
import { TransportFactory } from "./helpers/transportFactory";
import { AbstractTransport } from "lib/interfaces/transport";

export class Logger implements ILogger {

    /* Private */

    private min_level: Level;
    private readonly transport: AbstractTransport;
    private static readonly factory: TransportFactory = TransportFactory.getFactory();

    private constructor(public log_instructions: log_props) {
        this.min_level = log_instructions.level;
        this.transport = Logger.factory.create(this.log_instructions);
    }

    /* Public */
    
    public static get_logger({ include_time, transport, format, level }: log_props): Logger {
        return new Logger({ include_time, transport, format, level });
    }
    
    public error(msg: string, err?: Error | undefined): void {
        this.transport.error(msg, err);
    }

    public warn(...args: any): void {
        if(this.min_level > Level.Warn) return;

        this.transport.warn(args);
    }

    public debug(...args: any): void {
        if(this.min_level > Level.Debug) return;

        this.transport.debug(args);
    }

    public set_level(new_level: number): void {
        this.min_level = new_level;
    }
}