function toggleMode() {
  const var_html = document.documentElement
  var_html.classList.toggle("light")

  //pegar a tag Image
  const var_img = document.querySelector("#profile img")
  //substituir a imagem
  if (var_html.classList.contains("light")) {
    //se tiver ligth mode
    var_img.setAttribute("src", "./assets/avatar_dark.png")
    var_img.setAttribute(
      "alt",
      "Avatar de Matheus Martim de camisa preta, casaco marrom e fundo escuro"
    )
  } else {
    //se não tiver light mode
    var_img.setAttribute("src", "./assets/avatar_light.png")
    var_img.setAttribute(
      "alt",
      "Avatar de Matheus Martim de camisa preta, casaco marrom e fundo claro"
    )
  }
}
