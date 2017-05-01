let module2 = function() {
  initialize = () => {
    console.log("Hola Mundo 2")
  }
  return {
    init: initialize
  }
}

module2().init();
