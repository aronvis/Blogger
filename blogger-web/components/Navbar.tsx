import Link from 'next/link'

function NavBar() {
    const user = null;
    const username = true;

    return (
        <nav className = "navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
                {
                    username && (
                        <>
                            <li className="push-left">
                                <Link href="/admin">
                                    <button className="btn-blue">Write Posts</button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/${username}">
                                    <img src= {user?.photoURL} >
                                    </img>
                                </Link>
                            </li>
                        </>
                    )
                }
                {
                    !username && (
                        <Link href="/enter">
                             <button className="btn-blue">Log in</button>
                        </Link>
                    )
                }
            </ul>
        </nav>
    )
}

export {
    NavBar
}