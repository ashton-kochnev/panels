window.addEventListener('DOMContentLoaded', () => {

    const column = document.querySelectorAll('.column');

    column.forEach(item => {
        item.addEventListener('click', function(){
          for(let i = 0; i < column.length; i++) {
            column[i].classList.remove('active-column');
            column[i].classList.remove('active-text');
          }
          this.classList.add('active-column');
          this.classList.add('active-text');
        });
    });
});