const element = document.querySelector('.select')
const choices = new Choices(element, {
  searchEnabled: false,
  allowHTML: true,
  placeholderValue: 'Материал',
  itemSelectText: "",
})
