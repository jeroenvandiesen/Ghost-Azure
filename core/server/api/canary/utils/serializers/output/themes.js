const debug = require('ghost-ignition').debug('api:canary:utils:serializers:output:themes');

module.exports = {
    browse(themes, apiConfig, frame) {
        debug('browse');

        frame.response = themes;

        debug(frame.response);
    },

    upload() {
        debug('upload');
        this.browse(...arguments);
    },

    activate() {
        debug('activate');
        this.browse(...arguments);
    },

    download(fn, apiConfig, frame) {
        debug('download');

        frame.response = fn;

        debug(frame.response);
    }
};
