import '../styles/globals.scss'
import MainProvider from "../app/providers/MainProvider";

// @ts-ignore
function MyApp({Component, pageProps}) {
    return <MainProvider>
        <Component {...pageProps} />
    </MainProvider>
}

export default MyApp
