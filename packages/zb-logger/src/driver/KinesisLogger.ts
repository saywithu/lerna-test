import {ZBLoggingSettings, ZBLogDriver, ZBLogLevel} from "../ZBLogger";

export class KinesisLogger implements ZBLogDriver
{
    public initialize(loggingSettings: ZBLoggingSettings): void
    {

    }

    public createLogger(loggerName: string, loggingSettings?: any, params?: []): any
    {

    }

    public log(msg: string, logLevel: ZBLogLevel): void
    {

    }
}
