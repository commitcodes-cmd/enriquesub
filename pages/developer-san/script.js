const san = document.getElementsByClassName("san-list")
function log(msg) {
  console.log(msg)
  const p = document.createElement("p")
  p.textContent = msg
  san.appendChild(p)
}