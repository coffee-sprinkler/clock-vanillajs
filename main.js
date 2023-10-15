const clockContainer = document.querySelector('.clock')

function getTime() {
  const day = new Date()
  const hours = day.getHours() < 12 ? day.getHours() : `0${day.getHours() - 12}`
  const minutes = ('0' + day.getMinutes()).slice(-2)
  const seconds = ('0' + day.getSeconds()).slice(-2)
  const amPM = day.getHours() >= 12 ? 'PM' : 'AM'

  const fullTime = `${hours}:${minutes}:${seconds} ${amPM}`

  return fullTime
}

setInterval(() => {
  clockContainer.innerHTML = getTime()
}, 1000)
