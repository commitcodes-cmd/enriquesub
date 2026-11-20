function log(msg) {
  const san = document.querySelector(".san-list")
  console.log(msg)
  const p = document.createElement("p")
  p.textContent = msg
  san.appendChild(p)
}
log("start.")