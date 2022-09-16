import type { AppProps } from 'next/app'

function Loader( { show }: AppProps) {
    return show ? <div className ="loader"></div> : null;
}

export {
    Loader
}

