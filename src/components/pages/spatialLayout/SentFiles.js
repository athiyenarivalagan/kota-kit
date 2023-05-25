const SentFiles = ( {sentFiles} ) => {
    if (!sentFiles.length) {
        return null
    }
    return(
        <>
            <div>Files sent:</div>
            {sentFiles.map(item => {
                return(
                    <div><a href={item.file.url}>{item.name}</a> | Date sent: {item.dateUploaded.slice(0,10)}</div>
                    
                )
            })}
        </>
    )
}

export default SentFiles