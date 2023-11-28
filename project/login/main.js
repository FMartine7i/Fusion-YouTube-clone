const openEyes = document.querySelectorAll('.open_eye');
const eyeBlinks = document.querySelectorAll('.eye_blink');
const passwordInput = document.querySelector('.password_sign input')
const confirmInput = document.querySelector('.confirm_sign input')
const login = document.querySelector('.registered span');
const signUp = document.querySelector('.no_acc span');
const sendBtnSignUp = document.querySelector('.btn__sign_up');
const birthDateInput = document.getElementById('birth_date')


openEyes.forEach(openEye => {
  openEye.addEventListener('click', () => {
    // Ocultar el openEye clicked
    openEye.style.display = 'none'
    
    // Mostrar el eyeBlink hermano
    openEye.parentElement.querySelector('.eye_blink').style.display = 'block';

    if(passwordInput.type === 'text') {
        passwordInput.type = 'password'
    } else {
        passwordInput.type = 'text'
    }
  });
})

eyeBlinks.forEach(eyeBlink => {
  eyeBlink.addEventListener('click', () => {
    // Ocultar el eyeBlink clicked
    eyeBlink.style.display = 'none'

    // Mostrar el openEye hermano 
    eyeBlink.parentElement.querySelector('.open_eye').style.display = 'block'

    if(passwordInput.type === 'password') {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
  }); 
})

sendBtnSignUp.addEventListener('click', () => {
  let Bday = new Date(birthDateInput.value)
  let now = new Date()
  let age = now.getFullYear() - Bday.getFullYear() 

  if(passwordInput.value.length < 8) {
    return alert('La contraseña debe tener al menos 8 caracteres')
  }
  else if(passwordInput.value.length > 30) {
    return alert('La contraseña no debe superar los 30 caracteres')
  }
  else if(passwordInput.value!== confirmInput.value) {
    return alert('Las contraseñas no coinciden')
  }
  else if(age < 13){
    return alert('El usuario debe ser mayor de 13') 
  }
  else{
    
  }
})

function toggleForm(){
  const loginForm = document.querySelector('.login')
  const signUpForm = document.querySelector('.sign_up')

  signUpForm.classList.toggle('active')
  loginForm.classList.toggle('active')
}
