export default {
    repository: 'https://github.com/thepeerstack/docs',
    docsRepository: 'https://github.com/thepeerstack/docs',
    titleSuffix: ' – Thepeer Documentation',
    logo: (
        <>
            <img src="https://nigerialogos.com/logos/thepeer/thepeer.png" height="30" width="110"
                 className="mr-2 font-extrabold hidden md:inline"/>
            <span className="text-gray-600 font-normal hidden md:inline">
                Documentation
      </span>
        </>
    ),
    head: (
        <>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="Content-Language" content="en"/>
            <meta name="description" content="Thepeer Documentation"/>
            <meta name="og:description" content="Thepeer Documentation"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image" content="https://nigerialogos.com/logos/thepeer/thepeer.png"/>
            <meta name="twitter:site:domain" content="docs.thepeer.co"/>
            <meta name="twitter:url" content="https://twitter.com/thepeerHQ"/>
            <meta name="og:title" content="Thepeer Documentation"/>
            <meta name="og:image" content="https://nigerialogos.com/logos/thepeer/thepeer.png"/>
            <meta name="apple-mobile-web-app-title" content="Thepeer Documentation"/>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-icon-180x180.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/android-icon-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicon-96x96.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <meta name="msapplication-TileImage" content="/mstile-150x150"/>
        </>
    ),
    search: true,
    prevLinks: true,
    nextLinks: true,
    footer: true,
    footerEditOnGitHubLink: true,
    footerText: <>{new Date().getFullYear()} © Peerstack technologies LLC</>,
}
