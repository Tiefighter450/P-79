menuListArray = ["Three Cheese Pizza", "Vegetable Pizza", "Extra Thick Crust Pizza", "Mushroom and Spinach Pizza", "Cheese Crust Pizza"];
function getMenu() {
   var htmldata;
   htmldata = "<ol class='menulist'>";
   menuListArray.sort();
   for(var i = 0; i<menuListArray.length;i++) {
       htmldata = htmldata + "<li>" + menuListArray[i] + "</li>"
   }
   htmldata = htmldata + "</ol>"
   document.getElementById("menuList").innerHTML = htmldata;
}
function addItem() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menuListArray.push(item);
    menuListArray.sort();
    htmldata = "<section class='cards'>"
    for(var i = 0;i<menuListArray.length;i++) {
        htmldata = htmldata + "<div class='card'>" + "<img src='pizzaImg.png'/>" + menuListArray[i] + "</div>"
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}