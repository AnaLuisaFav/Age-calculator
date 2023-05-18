// Função de limitar caracteres dos campos
function limitarCaracteres(input, maxCaracteres) {
  if (input.value.length > maxCaracteres) {
    input.value = input.value.slice(0, maxCaracteres);
  }
}

// Função de validar data inválida 
function isDateValid(day, month, year) {

  var dia = parseInt(day)
  var mes = parseInt(month)
  var ano = parseInt(year)

  if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
    return false;
  }

  // Verificar se o ano é bissexto (fevereiro possui 29 dias)
  if (mes === 2) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      if (dia > 29) {
        return false;
      }
    } else if (dia > 28) {
      return false;
    }
  }

  return true;
}

// Enter 

var dayInput = document.querySelector('.day');
var monthInput = document.querySelector('.month');
var yearInput = document.querySelector('.year');

dayInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

monthInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

yearInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

document.querySelector('.meio').addEventListener('click', function() {
  
      var dayError = document.querySelector('.erro-day');
      var monthError = document.querySelector('.erro-month');
      var yearError = document.querySelector('.erro-year');
      var h1Day = document.querySelector('.h1-day');
      var h1Month = document.querySelector('.h1-month');
      var h1Year = document.querySelector('.h1-year');
      var birthDay = parseInt(dayInput.value) - 1;
      var birthMonth = parseInt(monthInput.value);
      var birthYear = parseInt(yearInput.value);
      var today = new Date();
      var currentYear = today.getFullYear();
      var currentMonth = today.getMonth() + 1;
      var currentDay = today.getDate();
      var isFormValid = true;

      // Resetar mensagens de erro
      dayError.textContent = '';
      monthError.textContent = '';
      yearError.textContent = '';

      // Resetar inputs de erro
      dayInput.classList.remove('erro-input')
      monthInput.classList.remove('erro-input')
      yearInput.classList.remove('erro-input')

      // Resetar h1 de erro
      h1Day.classList.remove('erro-h1')
      h1Month.classList.remove('erro-h1')
      h1Year.classList.remove('erro-h1')

      // Validar dia vazio
      if (dayInput.value === '') {
        isFormValid = false;
        dayError.textContent = 'This field is required';
        dayInput.classList.add('erro-input')
        h1Day.classList.add('erro-h1')
      }

      // Validar mês vazio
      if (monthInput.value === '') {
        isFormValid = false;
        monthError.textContent = 'This field is required';
        monthInput.classList.add('erro-input')
        h1Month.classList.add('erro-h1')
      }

      // Validar ano vazio
      if (yearInput.value === '') {
        isFormValid = false;
        yearError.textContent = 'This field is required';
        yearInput.classList.add('erro-input')
        h1Year.classList.add('erro-h1')
      }

      // Validar erro de dia inválido
      else if (dayInput.value < 1 || dayInput.value > 31) {
        isFormValid = false
        dayError.textContent = 'Must be a valid day'
        dayInput.classList.add('erro-input')
        h1Day.classList.add('erro-h1')
      }

      // Validar erro de mês inválido
      else if (monthInput.value < 1 || monthInput.value > 12) {
        isFormValid = false
        monthError.textContent = 'Must be a valid month'
        monthInput.classList.add('erro-input')
        h1Month.classList.add('erro-h1')
      }

      // Validar erro de ano no futuro
      else if (yearInput.value > currentYear) {
        isFormValid = false
        yearError.textContent = 'Must be in the past'
        yearInput.classList.add('erro-input')
        h1Year.classList.add('erro-h1')
      }

      // Validar erro de data inválida
      else if (isDateValid(dayInput.value, monthInput.value, yearInput.value) == false) {
        isFormValid = false
        dayError.textContent = 'Must be a valid date'
        dayInput.classList.add('erro-input')
        monthInput.classList.add('erro-input')
        yearInput.classList.add('erro-input')
        h1Day.classList.add('erro-h1')
        h1Month.classList.add('erro-h1')
        h1Year.classList.add('erro-h1')
      }

      // cálculo
      if (isFormValid == true) {
        var years = currentYear - birthYear;
        var months = currentMonth - birthMonth;
        var days = currentDay - birthDay;
        
        if (months < 0 || (months === 0 && days < 0)) {
          years--;
          months += 12;
        }
        
        if (days < 0) {
          months--;
          
          var lastDayOfMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
          days += lastDayOfMonth;
        }
        
        document.querySelector('.year h1 span').textContent = years;
        document.querySelector('.months h1 span').textContent = months;
        document.querySelector('.days h1 span').textContent = days;
        }

        else {
          document.querySelector('.year h1 span').textContent = '--';
          document.querySelector('.months h1 span').textContent = '--';
          document.querySelector('.days h1 span').textContent = '--';
        }

    });

