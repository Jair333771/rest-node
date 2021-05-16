"use strict";
var FileType;
(function (FileType) {
    FileType["video"] = "mp4";
    FileType["images"] = "jpg";
    FileType["audio"] = "mp3";
    FileType["others"] = "*";
})(FileType || (FileType = {}));
const getFileType = (ext) => {
    if (ext === FileType.audio)
        return FileType.audio;
    return FileType.others;
};
console.log(getFileType('mp4'));
