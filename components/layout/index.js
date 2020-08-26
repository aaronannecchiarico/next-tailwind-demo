import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <React.Fragment>
        <Head>
            <title>thegaesty</title>
        </Head>
            <div>{children}</div>
        </React.Fragment>

    )
}

export default Layout;