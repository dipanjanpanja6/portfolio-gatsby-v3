/** @jsx jsx */
import { jsx, Link, useThemeUI } from "theme-ui"
import { readableColor } from "polished"
import { siteMetadata } from "../../../../gatsby-config"

const Footer = ({ bg }) => {
  const { siteTitle } = siteMetadata
  const { theme } = useThemeUI()

  const text = readableColor(
    bg,
    theme?.colors?.textMuted,
    theme?.colors?.textMutedLight || undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.wide],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {` `}
        <Link aria-label="Link to the theme author's website" href="https://dipanjanpanja.in">
          {siteTitle}.
        </Link>
      </div>
      <div>
        Say
        {` `}
        <Link aria-label="Link to the author's email" href="mailto:hello@dipanjanpanja.in">
          hello@dipanjanpanja.in
        </Link>
      </div>
    </footer>
  )
}

export default Footer