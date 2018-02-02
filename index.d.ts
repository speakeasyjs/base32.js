import './base32';

declare module 'base32.js/browser' {
    import './base32-browser';
    export * from './base32';
}

declare module 'base32.js/node' {
    import './base32-node';
    export * from './base32';
}
