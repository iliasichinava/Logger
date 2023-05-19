import EventEmitter from "events";
import { Format } from "./logger";
import { Tokenizer } from "lib/classes/helpers/tokenizer";

export abstract class AbstractTransport {
    
    private readonly event_handler: EventEmitter;
    private tokenizer: Tokenizer;

    public constructor(has_time: boolean, format_pattern: Format) {
        this.tokenizer = new Tokenizer(has_time, format_pattern);
        this.event_handler = new EventEmitter();
        this.register_handlers();
    }

    public register_handlers(): void {
        this.event_handler.on("debug", this.debug);
        this.event_handler.on("warn", this.warn);
        this.event_handler.on("error", this.error);
    }

    public emit_event(event_name: string, ...args: any): void {
        process.stdout.write(this.tokenizer.format(event_name, ...args));
    }

    public abstract debug(msg: string): void;
    public abstract warn(msg: string): void;
    public abstract error(msg: string, err?: Error | undefined): void;  
}