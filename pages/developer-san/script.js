function log(msg) {
  const san = document.querySelector(".san-list")
  console.log(msg)
  const p = document.createElement("p")
  p.textContent = msg
  san.appendChild(p)
}
log("start.")
const date = new Date()
for (let i; i < 1000000; i++) {
  setTimeout(() => { log(date.toLocaleTimeString())}, 500)
}