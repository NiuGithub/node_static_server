const path = require('path');

const mimeTypes = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};
const downloadTypes = {
    "css": false,
    "gif": false,
    "html": false,
    "ico": false,
    "jpeg": false,
    "jpg": false,
    "js": false,
    "json": true,
    "pdf": false,
    "png": false,
    "svg": false,
    "swf": false,
    "tiff": false,
    "txt": true,
    "wav": false,
    "wma": false,
    "wmv": false,
    "xml": false
};

const download = (pathName) => {
    let ext = path.extname(pathName);
    ext = ext.split('.').pop();
    return downloadTypes[ext];
}

const lookup = (pathName) => {
    let ext = path.extname(pathName);
    ext = ext.split('.').pop();
    return mimeTypes[ext] || mimeTypes['txt'];
}

module.exports = {
    lookup,download
};
