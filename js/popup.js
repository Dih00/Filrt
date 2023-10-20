﻿
status="SharonMann"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='A';
a[12]='n';
a[13]='h';
a[14]=' ';
a[15]='l';
a[16]='à';
a[17]=' ';
a[18]='n';
a[19]='g';
a[20]='ư';
a[21]='ờ';
a[22]='i';
a[23]=' ';
a[24]='t';
a[25]='ố';
a[26]='t';
a[27]=' ';
a[28]='n';
a[29]='h';
a[30]='ấ';
a[31]='t';
a[32]=' ';
a[33]='v';
a[34]='ũ';
a[35]=' ';
a[36]='t';
a[37]='r';
a[38]='ụ';
a[39]='♥';
a[40]='Y';
a[41]='ê';
a[42]='u';
a[43]=' ';
a[44]='A';
a[45]='n';
a[46]='h';
a[47]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>Ủ ÔI! AI CŨNG NÓI VẬY ĐÓ </h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Mặc kệ người ta nói, Anh chỉ yêu mình em thôi!!</p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Anh yêu em lắm ♥</p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				