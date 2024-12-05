const subscribe = document.querySelector('.subscribe')
const ventana = document.querySelector('.ventana')
const cerrarVentana = document.querySelector('.cerrar-ventana')
const email = document.querySelector('.form-control')
const input = document.querySelector('#user-email')

subscribe.addEventListener('click',() => {
    ventana.classList.add('mostrar-ventana')
})

cerrarVentana.addEventListener('click',() => {
    ventana.classList.remove('mostrar-ventana')
})

function validateEmail(){
                
	// Get our input reference.
	var emailField = document.getElementById('user-email');
	
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){
		return true;
	}else{
		alert('Email is invalid, skip form submission');
        const invalid = document.createElement('div')
        invalid.classList = "invalid-feedback"
        invalid.textContent = "Valid email required"
        input.appendChild = (invalid)
		return false;
	}
}

const successMessageEmail = document.querySelector('.ventana strong') 

subscribe.addEventListener('click', () => {
  ventana.classList.add('mostrar-ventana')

  
  successMessageEmail.textContent = input.value
})