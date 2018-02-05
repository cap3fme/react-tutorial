export enum MessageType {
    Info,
    Warning,
    Error,
    Fatal,
}

export interface Message {

    readonly text: string;
    readonly type: MessageType;
}
