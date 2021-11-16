window.addEventListener('DOMContentLoaded', function (event) 
{	let pricelist={
		t1:100,
		t2:{rb1:120, rb2:130},
		t3:{sv1:160, sv2:170}
	};
let divr=document.getElementById('rad');
let divch=document.getElementById('chek');
let r = document.getElementById("price");
let rad1 = document.getElementById("r1");
let rad2 = document.getElementById("r2");
let box1 = document.getElementById("m1");
let box2 = document.getElementById("m2");
let f = document.getElementById("result");
let kol = document.getElementById("kol");
 document.querySelector('#tipes').addEventListener("change", function()
{
	if (this.value == "z0")
		{r.innerHTML = 0; divr.style.display='none';divch.style.display='none'; f.innerHTML=0; kol.value=1;}
  else if (this.value == "z1")
	  {r.innerHTML = pricelist.t1; divr.style.display='none';divch.style.display='none'; count();}
  else if (this.value == "z2")
  {   divr.style.display='block';
      divch.style.display='none';
	  r.innerHTML = pricelist.t2.rb1;
	  count();
      let contact = document.querySelectorAll('input[name="r"]');          
    for (let i = 0; i < contact.length; i++)
    {
     contact[i].addEventListener("change", function() 
	 {
     if (this.value == "r1") {rad2.checked = false; r.innerHTML = pricelist.t2.rb1; count();}
     else if (this.value == "r2"){rad1.checked = false; r.innerHTML = pricelist.t2.rb2; count();}	
     });
	}
  }
  else if (this.value == "z3")
  { divr.style.display='none';
    divch.style.display='block';
    let ch = document.querySelectorAll('input[name="c"]');          
    for (let i = 0; i < ch.length; i++)
    {
     ch[i].addEventListener("change", function() 
	 {
     if (this.value == "c1") 
	 {
		 if(box2.checked == true && box1.checked == true)
		 { r.innerHTML = pricelist.t3.sv1+pricelist.t3.sv2;
        	 count();}
		else if(box2.checked == false && box1.checked == true)
			 {r.innerHTML = pricelist.t3.sv1; 
		      count();
			  }  
		  
		 
		 }
     else if (this.value == "c2")
	 {
		 if(box2.checked == true && box1.checked == true)
	 { 
r.innerHTML = pricelist.t3.sv1+pricelist.t3.sv2;
       count();
     } 
		else
			if(box2.checked == true && box1.checked == false)
      {
		  r.innerHTML = pricelist.t3.sv2; 
       count();
      } 	  
    }	
     });
	}
  }
});
function count()		
{	
let p = document.getElementById("price");
let koll=Number(kol.value);
let price=Number(p.innerHTML);	
if(koll<0 || isNaN(koll) || price==0)
{alert("Некорректные данные");}
else {f.innerHTML = price * koll;}
return false;
}
});
