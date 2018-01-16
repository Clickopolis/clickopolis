const isDev = (process.env.NODE_ENV === 'dev');

export const logger = {
    log(...args:any[]) {
        if (isDev) console.log(args);
    },
    error(...args:any[]) {
        if (isDev) console.error(args);
    }
};