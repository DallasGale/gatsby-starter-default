const breakpoints = [768, 970, 1170, 1499];

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

export default mq;