export enum MessageType {
    Info = "info",
    Warning = "warning",
    Error = "error",
    Fatal = "fatal",
}

export interface Message {

    readonly text: string;
    readonly type: MessageType;
}
