import { AbstractTransport } from "lib/interfaces/transport";

export class Udp extends AbstractTransport {
    public debug(msg: string): void {
        throw new Error("Method not implemented.");
    }
    public warn(msg: string): void {
        throw new Error("Method not implemented.");
    }
    public error(msg: string, err?: Error | undefined): void {
        throw new Error("Method not implemented.");
    }
}