import {Log4jsLogger} from "./driver/Log4jsLogger";
import {KinesisLogger} from "./driver/KinesisLogger";

export enum ZBLogLevel
{
    None,
    Debug,
    Info,
    Warn,
    Error,
}

export interface Logger
{
    log(msg: string, logLevel: ZBLogLevel): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
}

export interface ZBLoggingSettings
{
    level: string;
}

export class ZBLogger implements Logger
{
    private static Driver: ZBLogDriver;
    private static LoggingSettings: ZBLoggingSettings;

    public static initialize(driver: string = null)
    {
        ZBLogger.LoggingSettings = { level: "info" };

        ZBLogger.Driver = LoggerDriverFactory.create(driver);
        ZBLogger.Driver.initialize(ZBLogger.LoggingSettings);
    }

    public createLogger(loggerName: string, params?: []): ZBLogDriver
    {
        return ZBLogger.Driver.createLogger(loggerName, ZBLogger.LoggingSettings, params);
    }

    public log(msg: string, logLevel: ZBLogLevel = ZBLogLevel.Info): void
    {
        ZBLogger.Driver.log(msg, logLevel);
    }

    public info(msg: string): void
    {
        this.log(msg, ZBLogLevel.Info);
    }

    public warn(msg: string): void
    {
        this.log(msg, ZBLogLevel.Warn);
    }

    public error(msg: string): void
    {
        this.log(msg, ZBLogLevel.Error);
    }
}

export interface ZBLogDriver
{
    initialize(loggingSettings: ZBLoggingSettings): void;
    createLogger(loggerName: string, loggingSettings?: ZBLoggingSettings, params?: []): ZBLogDriver;
    log(msg: string, logLevel: ZBLogLevel): void;
}

export class LoggerDriverFactory
{
    public static create(driverName: string): ZBLogDriver
    {
        if (!driverName)
        {
            driverName = "log4js";
        }
        switch (driverName.toLowerCase())
        {
            case "log4js":
                return new Log4jsLogger();
            case "kinesis":
            default:
                return new KinesisLogger();
        }
    }
}
