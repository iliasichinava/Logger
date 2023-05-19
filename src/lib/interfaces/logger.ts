export enum Level { Debug, Warn, Error }
export enum Transport { Console, UDP, TCP };
export enum Format { Uppercase, Lowercase, CapitalCase }

export interface log_props {
    include_time: boolean;
    transport?: Transport;
    format: Format;
    level: Level;
}

export interface ILogger {
    error(msg: string, err?: Error): void;
    warn(msg: string): void;
    debug(msg: string): void;
}