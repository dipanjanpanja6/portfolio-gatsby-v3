export const itemListWrapperStyles = {
  ".item-list": {
    display: `grid`,
    gridAutoRows: `auto`,
  },
  ".item:nth-of-type(1)": {
    minHeight: `210px`,
  },
  "@media screen and (min-width: 40em)": {
    ".item-list": { gridTemplateColumns: `repeat(2, minmax(0, 1fr))` },
    ".item": {
      minHeight: `400px`,
    },
    ".item:nth-of-type(1)": {
      gridColumn: `auto / span 2`,
      minHeight: `244px`,
    },
  },
  "@media screen and (min-width: 1280px)": {
    ".item-list": { gridTemplateColumns: `repeat(3, minmax(0, 1fr))` },
    ".item:nth-of-type(1)": {
      gridColumn: `auto / span 3`,
    },

    ".item:nth-of-type(2)": {
      gridRow: `auto / span 2`,
    },
    ".item:nth-of-type(3),.item:nth-of-type(4)": {
      gridColumn: `auto / span 1`,
      minHeight: `400px`,
    },
    ".item:nth-of-type(5)": {
      gridColumn: `auto / span 2`,
      minHeight: `550px`,
    },
    ".item:nth-last-of-type(1)": {
      gridColumn: `auto / span 3`,
      minHeight: `200px`,
    },
  },
}

export const itemStyles = {
  minHeight: [`400px`, `650px`],
}
