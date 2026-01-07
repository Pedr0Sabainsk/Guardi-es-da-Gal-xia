
const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0
const images = document.getElementById('images')
const menu = document.getElementById('menu')
const navigation = document.getElementById('navigation')
const memberName = document.getElementById('member_name')

  function changeStatusButtons() {

    let prev = document.getElementById('button_prev')


    let next = document.getElementById('button_next')

    prev.disabled = activeMember === 0;
    next.disabled = activeMember === members.length - 1;
      
}

changeStatusButtons();

function changeMember(memberId){
  activeMember = memberId
  const member = members[activeMember]

  images.style.transform = `translateY(${-100 * activeMember}vh)`;
  memberName.classList = member.id

  changeName(member.name);
  changeStatusButtons();
}

function navigationMember(direction) {
  changeMember(activeMember + direction);

}

function changeMenu() {
 menu.classList.toggle('active');
 navigation.classList.toggle('active');
}

function setMember(memberId) {
  changeMember(memberId);
  changeMenu();
}