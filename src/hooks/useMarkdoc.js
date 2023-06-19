import Markdoc from '@markdoc/markdoc';
import * as React from "react"
import { useState, useEffect } from 'react'

const useMarkdoc = (fileName) => {
    const [contentMarkDown, setContentMarkDown] = useState(null)

    useEffect(() => {
        //This dynamically imports the file 
        import(`../markdoc/${fileName}.md`)
            .then(res => {
                fetch(res.default)
                    .then(mdFile => mdFile.text())
                    .then(text => {
                        const ast = Markdoc.parse(text)
                        const content = Markdoc.transform(ast, {})
                        const markdocRender = Markdoc.renderers.react(content, React)
                        setContentMarkDown(markdocRender)
                    })
            })
            
    }, []); 

    return contentMarkDown
}

export default useMarkdoc
