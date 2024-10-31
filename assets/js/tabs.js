const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
console.log(document.querySelector('.header'));

tabs.forEach(tab => tab.addEventListener('click', event => {
  const tabsTitleTarget = event.target.getAttribute('data-tab');
  tabs.forEach(element => element.classList.remove('active'));
  tabContents.forEach(element => element.classList.add('hidden'));
  tab.classList.add('active');
  document.getElementById(tabsTitleTarget).classList.remove('hidden');
}))