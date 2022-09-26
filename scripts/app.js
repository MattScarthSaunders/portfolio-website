let divNames = ['Home', 'Projects', 'Resume', 'Contact'];

function showHide(target) {
    let div = document.getElementById(target);
    for (let e of divNames) {
        if (e === target) {
            div.classList.add('show');
            div.classList.remove('hidden');
        } else {
            document.getElementById(e).classList.add('hidden');
            document.getElementById(e).classList.remove('show');
        }
    }
}