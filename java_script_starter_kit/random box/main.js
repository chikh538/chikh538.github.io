var myarray = new Array("box1", "box2", "box3", "box4", "box5");

function GetValue()
{
    var myarray= new Array("box1", "box2", "box3", "box4", "box5");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}
