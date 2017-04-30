let module = function {
  initialize = () => {
    console.log("Hola Mundo")
  }
  return {
    init: initialize
  }
}

module().init();
