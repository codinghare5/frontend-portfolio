import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
    return(
        <Html className='dark'>
            <Head></Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}

export default Document