# hillsHacks V

The source of the website powering hillsHack's fifth annual hackathon. Made with Next.js and Theme UI.

See the [source](https://github.com/googol88/hillshacks-iv) of last year's website

[next.js]: https://nextjs.org
[mdx]: https://mdxjs.com
[theme ui]: https://theme-ui.com

## Usage

1. Import this repo to your coding environment of choice. Download it, `git clone`, or use the GitHub import on CodeSandbox (or repl.it, Glitch, etc).
2. `yarn` to install dependencies.
3. `yarn dev` to start your server.
4. Start adding your own pages & components in their respective directories.

## Configuration

### Theme switcher

There’s an included example theme switcher component at `components/color-switcher.js`,
which is included on every page through its inclusion in `pages/_app.js`.
Feel free to change/remove it.

### Custom theme

By default, a theme inspired by the [Hack Club Theme](https://theme.hackclub.com) is included.
To edit the theme, head to `lib/theme.js`.

### Running at another port

Super easy: `yarn dev -p 5000`

### Dependency updates

The included Dependabot configuration file means you’ll automatically get PRs
every Monday with dependency updates. Delete `.github/dependabot.yml` to
disable.

### Meta tags

This template includes a `Meta` component for adding full meta tags.
To set the defaults, open `components/meta.js` & change the default props.

It’s included in `pages/_app.js` so all pages have the default tags without
anything per-page, but due to the `key`s included on each tag, if you render
the component multiple times (such as once in `_app` & again on an invidual page),
the last instance of each tag will be used, with duplicates.

If you don’t set a `description` or `image`, the relevant tags for those fields
will be omitted.

Here’s how you use `Meta` on a page:

```js
import Meta from '../components/meta'

const AboutPage = () => (
  <>
    <Meta
      title="About" // page title
      description="About our nonprofit." // page description
      image="https://yourdomain.com/special-card.png" // large summary card image URL
    />
    {/* … */}
  </>
)

export default Page
```

(The default props are included on the component instead of `_app.js` so you
don’t have to re-include all the props on each page.)

You can also pass children to `Meta` to quickly include custom tags inside the
[Next.js `Head`](https://nextjs.org/docs/api-reference/next/head).
