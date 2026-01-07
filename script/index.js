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
const allImages = document.querySelectorAll('#images img') // Nova variável

function changeStatusButtons() {
    let prev = document.getElementById('button_prev')
    let next = document.getElementById('button_next')
    prev.disabled = activeMember === 0;
    next.disabled = activeMember === members.length - 1;
}

function changeMember(memberId) {
    activeMember = memberId
    const member = members[activeMember]

    // OPÇÃO B: Método com opacity
    // Remove 'active' de todas as imagens
    allImages.forEach(img => img.classList.remove('active'));
    
    // Adiciona 'active' na imagem atual
    allImages[activeMember].classList.add('active');
    
    // Atualiza nome e estilo
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

// Inicializa
document.addEventListener('DOMContentLoaded', function() {
    changeStatusButtons();
    // Garante que a primeira imagem está ativa
    if (allImages.length > 0) {
        allImages[0].classList.add('active');
    }
});