function log(msg) {
  const san = document.getElementsByClassName("san-list")
  console.log(msg)
  const p = document.createElement("p")
  p.textContent = msg
  san.appendChild(p)
}