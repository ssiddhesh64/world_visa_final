import React from 'react'
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer'

const PdfFileGenerator = (props) => {

    const { response } = props
    return (
        <Document>
            <Page>
                <Text>{response.key}</Text>
            </Page>
        </Document>
    )
}

export { PdfFileGenerator }