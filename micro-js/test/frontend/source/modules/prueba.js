let module1 = function() {
  initialize = () => {
    console.log("Hola Mundo")
  }
  return {
    init: initialize
  }
}

module1().init();
