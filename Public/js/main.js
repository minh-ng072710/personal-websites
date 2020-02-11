$(document).ready(function() {
    var marquee = $('div.marquee');
    console.log(marquee);
    marquee.each(function() {
        var mar = $(this),indent = mar.width();
        mar.marquee = function() {
            indent--;
            mar.css('text-indent',indent);
            if (indent < -1 * mar.children('div.marquee-text').width()) {
                indent = mar.width();
            }
        };
        mar.data('interval',setInterval(mar.marquee,1000/60));
    });
});

function out(){
    document.getElementById("load").removeAttribute("class");
    document.getElementById("load").innerHTML=`
    `   
}
function expression(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    if (name == " " || name == "") {
        document.getElementById('errname').innerHTML = " "


    } else if (name.length < 5) {
        document.getElementById('errname').innerHTML = "Ho và Tên phải từ 5 kí tự bất kì trở lên"

    } else {
        document.getElementById('errname').innerHTML = ""
    }

    if (phone == "") {
        document.getElementById('errphone').innerHTML = ""
    } else {
        if (isNaN(phone)) {
            document.getElementById('errphone').innerHTML = "Chỉ được nhập số"
        } else if (isNaN(phone) || phone.length < 10 || phone.length > 11) {
            document.getElementById('errphone').innerHTML = "Giá trị nằm trong khoảng 10-11 số!"
        }
        else {
            document.getElementById('errphone').innerHTML = ""

        }

    }


    if (email == "") {
        document.getElementById('erremail').innerHTML = ""
    } else {
        if (email.indexOf('@') <= 0) {
            document.getElementById('erremail').innerHTML = "Vị trí @ không hợp lệ!";
        } else {
            document.getElementById('erremail').innerHTML = "";

        }
        if (email.charAt(email.length - 4) != '.' && email.charAt(email.length - 3) != '.') {
            document.getElementById('erremail').innerHTML = "Vị trí dấu . không hợp lệ!";

        }
    }
    


}