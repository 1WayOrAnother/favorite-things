$(document).ready(function() {
  $("form#things").submit(function(event) {
    var favthing1 = $("input#fav1").val();
    var favthing2 = $("input#fav2").val();
    var favthing3 = $("input#fav3").val();
    var favthings = [favthing1, favthing2, favthing3];
    var favthings2 = [];

    favthings2.push(favthings[1], favthings[2], favthings[0]);
    //favthings2.toString();

    $("#list").show();
    $("#list1").text(favthings2[0]);
    $("#list2").text(favthings2[1]);
    $("#list3").text(favthings2[2]);

    event.preventDefault();
  });
});
