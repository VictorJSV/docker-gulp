let module = function {
  initialize = () => {
    console.log("Hola Mundo 2")
  }
  return {
    init: initialize
  }
}

module().init();
