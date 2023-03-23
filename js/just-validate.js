var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);


new JustValidate('.form', {
  colorWrong: '#ff5c00',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      minLength: 'Имя должно состоять минимум из 2 букв',
      maxLength: 'Имя должно состоять максимум из 30 букв',
      required: 'Это поле обязательно',
    },
    tel: {
      minLength: 'Телефон должен состоять из 10 цифр',
      required: 'Это поле обязательно',
    },
    email: {
      email: 'Вы не ввели e-mail',
      required: 'Это поле обязательно',
    }
  },

  focusWrongField: true,
})
