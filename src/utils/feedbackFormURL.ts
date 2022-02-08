export const feedbackFormURL = (
  cameFrom: 'deploy' | 'stoned-banny',
  projectHandle?: string,
  userAddress?: string,
) => {
  let url = `https://auditor.typeform.com/to/REMUTIbQ#`
  if (projectHandle) {
    url += `project=${projectHandle}&`
  }
  if (userAddress) {
    url += `address=${userAddress}&`
  }
  if (cameFrom) {
    url += `came_from=${cameFrom}&`
  }
  url += `resolution=${window.innerWidth}x${window.innerHeight}`
  return url
}
