export const getDaysAgo = (initialTime: string, currentTime: number) => {
  const firstDate = new Date(initialTime)
  let daysAgo = currentTime - firstDate.getTime() 
  daysAgo = parseInt(daysAgo / 1000 / 60 / 60 / 24)

  if(daysAgo > 30){
    return `Updated on ${firstDate.getDate()} ${firstDate.toLocaleString('default', {month: 'short'})}`
  }

  return `updated ${daysAgo} days ago`
}