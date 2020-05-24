document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

const createContact = () => {
  axios.post('api/contact', {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  }) 
}

document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();
  createContact()
  document.getElementById('contactForm').reset()
});