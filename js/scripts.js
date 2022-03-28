$(document).ready(function() {
  $("#shopping-list").submit(function(event) {
    event.preventDefault();
    const list1 = $("#item1").val();
    const list2 = $("#item2").val();
    const list3 = $("#item3").val();

    let fullList = [list1, list2, list3];
    fullList.sort();
    let upperList = [];
    
    fullList.forEach(function(element) {
      upperList.push(element.toUpperCase());
    });

    upperList.forEach(function(element) {
      $("#list-display").append("<li>" + element + "</li>");
      $("#shopping-list").hide();
    });
  });
});