// function loadjson(file,callback){
// 	var xhr=new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status=="200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null); 

// }
// loadjson("data.json",function(text){
// 	var data = JSON.parse(text);
// 	console.log(data);
// 	basic(data.details);
// 	careerinfo(data.careerobjective);
// 	education(data.educationalqualification);
// 	skills(data.technincalskills);
// }); 
function loadjson(file){
	return new Promise ((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}

		})
	})
}

var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
 	careerinfo(data.careerobjective);
 	education(data.educationalqualification);
	skills(data.technincalskills);
})

var child=document.querySelector(".child1");
function basic(det){
	var img=document.createElement("img");
	img.src=det.image;
	child.appendChild(img); 

	var name=document.createElement("h4");
	name.textContent = det.name;
	child.appendChild(name);

	var email=document.createElement("a");
	email.href="mailto:mohansumanth07@gmail.com";
	email.textContent=det.email;
	child.appendChild(email);
	child.appendChild(document.createElement("br"));
	child.appendChild(document.createElement("br"));

	var num=document.createElement("number");
	num.textContent = det.number;
	child.appendChild(num);

	var addr=document.createElement("h2");
	addr.textContent = det.Address;
	child.appendChild(addr);

	child.appendChild(document.createElement("hr"))


}

var child2=document.querySelector(".child2");

function careerinfo(info1){
	var heading1=document.createElement("h2");
	heading1.textContent="career  objective:";
	child2.appendChild(heading1);

	child2.appendChild(document.createElement("hr"));


	var heading2=document.createElement("p");
	heading2.textContent=info1.info;
	child2.appendChild(heading2);
}

function education(edu){
	var heading3=document.createElement("h2");
	heading3.textContent="Educational Qualification";
	child2.appendChild(heading3);

	child2.appendChild(document.createElement("hr"));

	var table1=document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);

	tabledata="";
	tabledata+="<tr><td><b>"+"Institute"+"</b></td><td><b>"+"Degree"+"</b></td><td><b>"+"Passout year"+"</b></td><td><b>"+"Percentage"+"</b></td></tr>";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";

	}
	table1.innerHTML=tabledata;

}

function skills(skillinfo){
	var heading4=document.createElement("h2");
	heading4.textContent="Technical Skills";
	child2.appendChild(heading4);

	child2.appendChild(document.createElement("hr"));

	for(i=0;i<skillinfo.length;i++){
		var title=document.createElement("h4");
		title.textContent=skillinfo[i].title;
		child2.appendChild(title);

		var skillul=document.createElement("ul");
		var skillli=document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul); 


	}

}
