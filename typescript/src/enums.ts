enum FileType {
    video = "mp4", images = "jpg", audio = "mp3", others = "*"
}

const getFileType = (ext: string) : FileType => {
    if (ext === FileType.audio) 
        return FileType.audio;
    return FileType.others;
}

console.log(getFileType('mp4'));