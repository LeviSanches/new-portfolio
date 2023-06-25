let main = document.getElementById('main');
let portfolio = document.getElementById('portfolio');
let about = document.getElementById('about');
let skills = document.getElementById('skills');
let navMobile = document.getElementById('nav-mobile')

function showSection(sectionId) {
    let sections = document.getElementsByTagName('section');

    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];

        if (section.id === sectionId) {            
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }
}

function buttonNav() {
    if (navMobile.style.display === 'block') {
      navMobile.style.display = 'none';
    } else {
      navMobile.style.display = 'block';
    }
  }