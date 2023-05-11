(async () => {
  await printCurrentTime()
})()

async function printCurrentTime(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(new Date().toISOString())
  await new Promise(resolve => setTimeout(resolve, 1000))
  return printCurrentTime()
}
