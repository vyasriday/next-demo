import Script from "next/script";
import "@rhds/elements/rh-table/rh-table-lightdom.css";

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
					id="import-map-imports"
					type="importmap"
					strategy="beforeInteractive"
				>
          {
            `
            "imports": {
              "@rhds/elements/": "https://www.redhatstatic.com/dssf-001/v2/@rhds/elements@3.1.0/elements/"
            },
            "scopes": {
              "https://www.redhatstatic.com/dssf-001/v2/": {
                "@floating-ui/core": "https://www.redhatstatic.com/dssf-001/v2/@floating-ui/core@1.7.1/dist/floating-ui.core.mjs",
                "@floating-ui/dom": "https://www.redhatstatic.com/dssf-001/v2/@floating-ui/dom@1.7.1/dist/floating-ui.dom.mjs",
                "@floating-ui/utils": "https://www.redhatstatic.com/dssf-001/v2/@floating-ui/utils@0.2.9/dist/floating-ui.utils.mjs",
                "@floating-ui/utils/dom": "https://www.redhatstatic.com/dssf-001/v2/@floating-ui/utils@0.2.9/dist/floating-ui.utils.dom.mjs",
                "@lit/context": "https://www.redhatstatic.com/dssf-001/v2/@lit/context@1.1.5/development/index.js",
                "@lit/reactive-element": "https://www.redhatstatic.com/dssf-001/v2/@lit/reactive-element@2.1.0/reactive-element.js",
                "@lit/reactive-element/decorators/": "https://www.redhatstatic.com/dssf-001/v2/@lit/reactive-element@2.1.0/decorators/",
                "@patternfly/pfe-core": "https://www.redhatstatic.com/dssf-001/v2/@patternfly/pfe-core@5.0.3/core.js",
                "@patternfly/pfe-core/": "https://www.redhatstatic.com/dssf-001/v2/@patternfly/pfe-core@5.0.3/",
                "@rhds/elements/lib/": "https://www.redhatstatic.com/dssf-001/v2/@rhds/elements@3.1.0/lib/",
                "@rhds/icons": "https://www.redhatstatic.com/dssf-001/v2/@rhds/icons@1.3.1/icons.js",
                "@rhds/icons/": "https://www.redhatstatic.com/dssf-001/v2/@rhds/icons@1.3.1/",
                "@rhds/tokens/media.js": "https://www.redhatstatic.com/dssf-001/v2/@rhds/tokens@3.0.1/js/media.js",
                "@rhds/tokens/": "https://www.redhatstatic.com/dssf-001/v2/@rhds/tokens@3.0.1/",
                "lit": "https://www.redhatstatic.com/dssf-001/v2/lit@3.3.0/index.js",
                "lit/": "https://www.redhatstatic.com/dssf-001/v2/lit@3.3.0/",
                "lit-element/lit-element.js": "https://www.redhatstatic.com/dssf-001/v2/lit-element@4.2.0/lit-element.js",
                "lit-html": "https://www.redhatstatic.com/dssf-001/v2/lit-html@3.3.0/lit-html.js",
                "lit-html/": "https://www.redhatstatic.com/dssf-001/v2/lit-html@3.3.0/",
                "tslib": "https://www.redhatstatic.com/dssf-001/v2/tslib@2.8.1/tslib.es6.mjs"
              }
            }
          `}
				</Script>
				<Script id="import-map-modules" type="module">
					{`
            import '@rhds/elements/rh-table/rh-table.js';
          `}
				</Script>
      </head>
      <body>{children}</body>
    </html>
  )
}