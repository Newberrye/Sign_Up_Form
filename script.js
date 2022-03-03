var check = function () {
  if (document.getElementById('password').value ==
    document.getElementById('confirm').value) {
    document.getElementById('message').innerHTML = '';

    document.getElementById('password').style.border = '1px solid rgba(0, 0, 0, .3)'
    document.getElementById('confirm').style.border = '1px solid rgba(0, 0, 0, .3)'
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = '* Pass does not match';

    document.getElementById('password').style.border = '1px solid red'
    document.getElementById('confirm').style.border = '1px solid red'
  }
}