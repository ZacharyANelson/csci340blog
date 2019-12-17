$("document").ready( function(){
  var state = 0;

  let change = function(){
    switch (state) {
      case 0:
        $("#box1").addClass("black");
        $("#box3").removeClass("black");
        break;
      case 1:
        $("#box3").addClass("black");
        $("#box2").removeClass("black");
        break;
      case 2:
        $("#box2").addClass("black");
        $("#box1").removeClass("black");
        break;
    }
    state=(state+1)%3;
  }

    $("#box1").click(change);
      $("#box2").click(change);
        $("#box3").click(change);

});
