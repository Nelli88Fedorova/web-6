window.addEventListener('DOMContentLoaded', function (event) 
{	let pricelist={
		t1:100,
		t2:{rb1:120, rb2:130},
		t3:{sv1:160, sv2:170}
	};
let divr=document.getElementById('rad');
let divch=document.getElementById('chek');
let r = document.getElementById("price");
 document.querySelector('#tipes').addEventListener("change", function()
{
  if (this.value == "z1") {r.innerHTML = pricelist.t1; divr.style.display='none';divch.style.display='none';}
  else if (this.value == "z2")
  {   divr.style.display='block';
      divch.style.display='none';
      let contact = document.querySelectorAll('input[name="r"]');          
    for (let i = 0; i < contact.length; i++)
    {
     contact[i].addEventListener("change", function() 
	 {
     if (this.value == "r1") {r.innerHTML = pricelist.t2.rb1; }
     else if (this.value == "r2"){r.innerHTML = pricelist.t2.rb2; }	
     });
	}
  }
  else if (this.value == "z3")
  { divr.style.display='none';
    divch.style.display='block';
    let ch = document.querySelectorAll('input[name="c"]');          
    for (let i = 0; i < ch.length; i++)
    {
     ch[i].addEventListener("click", function() 
	 {
     if (this.value == "c1") {r.innerHTML = pricelist.t3.sv1; }
     else if (this.value == "c2"){r.innerHTML = pricelist.t3.sv2; }	
     });
	}
  }
});
let b = document.getElementById("butt");
b.onclick = function()		
{	
let p = document.getElementById("price");
let kol = document.getElementById("kol");
let f = document.getElementById("result");
let koll=Number(kol.value);
let price=Number(p.innerHTML);	
if(koll<0 || isNaN(koll) || price==0)
{alert("Некорректные данные");}
else {f.innerHTML = price * koll;}
return false;
}
});
