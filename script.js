//-----------------------HOME SECTION-----------------------//

var home = document.querySelector(".home");

var homediv = document.createElement("div");
homediv.setAttribute("class" , "home-text");

var homedivbtn = document.createElement("div");
homedivbtn.setAttribute("class" , "btn");

homediv.innerHTML = `<h1>${data.name}</h1>
                     <h3>${data.position}</h3>
                     <p>${data.homeabout}</p>
                     
                     <div class="btn">
                        <a href="${data.resume}" download="Methilesh(resume)" class="resume">Download CV</a>
                        <a href="mailto:${data.email}">Connect</a>
                    </div>`

home.append(homediv);

//-------------------------------ABOUT SECTION-------------------------//
var aboutsec = document.querySelector(".about");

var aboutdiv = document.createElement("div");
aboutdiv.setAttribute("class" , "about-text");

aboutdiv.innerHTML = `<h1>About Me</h1>
                        <p>${data.about}</p>`

var aboutdiv_img = document.createElement("div");
aboutdiv_img.setAttribute("class" , "about-img");

aboutdiv_img.innerHTML =  ` <img src="images/about-img.jpg" alt="">`

aboutsec.append(aboutdiv);
aboutsec.append(aboutdiv_img);

//--------------------------SKILLS SECTION------------------------//
var skillsection  = document.querySelector(".skills");
var skilltext = document.createElement("div");
skilltext.setAttribute("class" , "skills-text");
skilltext.innerHTML = `<h1>Skill</h1>
                        <p>${data.skills.description}</p>`



var skillscontainer = document.querySelector(".skills-container");
const slength = data.skills.skill.length;

for(var i = 0 ; i < slength ; i++){
    var skill = document.createElement("div");
    skill.setAttribute("class" , "skill");
    var img = document.createElement("img");
    img.src = data.skills.skill[i].src;
    img.alt = "";

    let skillcontent = document.createElement("div");
    skillcontent.setAttribute("class" , "skill-content");
    var h3 = document.createElement("h3");
    h3.setAttribute("class" , "skill-title");
    h3.textContent = data.skills.skill[i].title;

    var p = document.createElement("p");
    p.textContent = data.skills.skill[i].description;
    
    skillcontent.append(h3);
    skillcontent.append(p);

    skill.append(img);
    skill.append(skillcontent);
    skillscontainer.append(skill);
    
}
skillscontainer.append(skill);


skillsection.append(skilltext);
skillsection.append(skillscontainer);



//-----------------------------PROJECTS SECTION----------------------//
var myprojects = document.querySelector('.projects');
var h1 = document.createElement("h1");

h1.textContent = "My Projects";

var div = document.createElement("div");
div.setAttribute("class" , "projects-text");

var htmlcontent = `<p>`;
for(var i=0;i<data.projects.length;i++){
    htmlcontent += `<strong><i>${data.projects[i].name} : </i></strong> ${data.projects[i].description} <br><br>`;
}
htmlcontent += `</p>`;

div.innerHTML = htmlcontent;
myprojects.append(h1);
myprojects.append(div);


//-----------------------------------CONTACT SECTION---------------------//
var footersection = document.querySelector(".footer");

var titleElement = document.createElement("h1");
titleElement.textContent = data.contactdetails.title;

var descriptionElement = document.createElement("p");
descriptionElement.textContent = data.contactdetails.description;

var contactdiv = document.createElement("div");
contactdiv.setAttribute("class" , "contact");

var detailsdiv = document.createElement("div");
detailsdiv.setAttribute("class" , "details");

data.contactdetails.details.forEach(detail => {
    const detailspan = document.createElement("span");
    const detailicon = document.createElement("i");
    detailicon.className = `bx ${detail.icon}`;
    detailspan.append(detailicon);

    if(detail.link){
        const detailLink = document.createElement("a");
        detailLink.href = detail.link;
        detailLink.textContent = detail.text;
        detailLink.target = "_blank";
        detailspan.append(detailLink);
    }
    else{
        detailspan.textContent += detail.text;
    }

    detailsdiv.append(detailspan);
})


var socialdiv = document.createElement("div");
socialdiv.setAttribute("class" , "social");

data.contactdetails.social.forEach(social => {
    const socialspan = document.createElement("span");
    const socialLink = document.createElement('a');
    socialLink.href = social.link;
    socialLink.target = "_blank";
    const socialIcon = document.createElement('i');
    socialIcon.className = `bx ${social.icon}`;
    socialLink.append(socialIcon);
    socialLink.append(document.createTextNode(social.text));
    socialspan.append(socialLink);
    socialdiv.append(socialspan);
})

contactdiv.append(descriptionElement);
contactdiv.append(detailsdiv);
contactdiv.append(socialdiv);
footersection.append(titleElement);
footersection.append(contactdiv);

//----------------------------ANIMATION--------------------------//
const sections = document.querySelectorAll('section');

window.addEventListener('scroll' , checksections);
checksections();

function checksections(){
    const triggerbtn = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectiontop  = section.getBoundingClientRect().top;

        if(sectiontop < triggerbtn){
            section.classList.add('show');
        }
        else{
            section.classList.remove('show');
        }
    })
}