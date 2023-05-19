import { Level } from "lib/interfaces/logger";
import { AbstractTransport } from "../../interfaces/transport";

export class Console extends AbstractTransport {

    public override debug(...args: any): void {
        this.emit_event("debug", args);
    }

    public override warn(...args: any): void {
        this.emit_event("warn", args);
    }

    public override error(args: any, err?: Error | undefined): void {
        this.emit_event("error", args);
        if(err) throw err;
    }

}