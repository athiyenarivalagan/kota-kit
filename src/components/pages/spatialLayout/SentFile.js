import { Spin } from "antd"
const SentFile = ( {file} ) => {
    if (!file) {
        return null
    }
    console.log("This is reached from within SentFile", file)
    return(
        <>
            <div>File sent:</div>
            <div><a href={file.file}>{file.name}</a> | isSent: {file.isSent ? file.dateSent.slice(0,10): <Spin />}</div>
        </>
    )
}

export default SentFile

