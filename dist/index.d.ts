/**
 * Simple log written in TypeScript.
 * @copyright 2021 Sampsa Lohi (https://github.com/sam-19)
 * @license MIT
 */
import { SimpleLogType, ValidLevel } from './index.d';
/**
 * A static logger for application events.
 *
 * All events are recorded, but only events of sufficient importance
 * are printed directly to console.
 *
 * Includes levels for debug (0), info (1), warning (2), and error (3) messages.
 *
 * @example
 * import SimpleLog from './log'
 * SimpleLog.setLevel(2) // Only log warnings (= 2) and errors (= 3) to console
 * SimpleLog.info('Application loading') // Does not print to console (info = 1)
 * SimpleLog.warn('Disabling log printing to console') // Prints to console (warning = 2)
 * SimpleLog.setLevel(4) // Don't print anything
 */
declare class SimpleLog implements SimpleLogType {
    /**
     * Verbosity of the logger (what messages end up in the console)
     * ```
     * 0 = log everything
     * 1 = log info messages and above
     * 2 = log warning and errors
     * 3 = log only errors
     * 4 = disable logging
     * ```
     */
    static readonly LEVELS: {
        [name: string]: ValidLevel;
    };
    static events: LogEvent[];
    static level: ValidLevel;
    static prevTimestamp: number | null;
    /**
     * Add a new message to the log at the given level.
     * @param level SimpleLog.LEVEL
     * @param message
     */
    static add(level: ValidLevel, message: string): void;
    /**
     * Add a message at debug level to the log
     * @param message
     */
    static debug(message: string): void;
    /**
     * Add a message at error level to the log
     * @param message
     */
    static error(message: string): void;
    /**
     * Get current logging level
     */
    static getLevel(): ValidLevel;
    /**
     * Add a message at info level to the log
     * @param message
     */
    static info(message: string): void;
    /**
     * Print a log event's message to console
     * @param logEvent
     */
    static print(logEvent: LogEvent): void;
    /**
     * Set the level of logging events to display in console.
     * @param level new logging level
     */
    static setLevel(level: ValidLevel): void;
    /**
     * Add a message at warning level to the log
     * @param message
     */
    static warn(message: string): void;
}
/**
 * A single event in the game log.
 */
declare class LogEvent {
    level: number;
    message: string;
    printed: boolean;
    scope: string | undefined;
    time: LogTimestamp;
    constructor(level: number, message: string, scope?: string);
}
/**
 * SimpleLog event timestamp.
 */
declare class LogTimestamp {
    date: Date;
    delta: number | null;
    constructor();
    /**
     * Get a standard length datetime string from this timestamp
     * @param utc return as UTC time (default false)
     * @return YYYY-MM-DD hh:mm:ss
     */
    toString(utc?: boolean): string;
    /**
     * Return timestamp as milliseconds
     */
    toTime(): number;
}
export default SimpleLog;
