(function () {
  var passwords = document.getElementById('password');
  var string = '';
  //table est un objet pas un tableau parce que des valeur sont associés àdes données
  var table = {
    'aragorn_pw' : {name : 'aragorn', url:'./img/aragorn.jpg'},
    'boromir_pw' : {name : 'boromir', url:'./img/boromir.jpg'},
    'frodo_pw' : {name : 'frodo', url:'./img/frodo.jpg'},
    'gandalf_pw' : {name : 'gandalf', url:'./img/gandalf.jpg'},
    'gimli_pw' : {name : 'gimli', url:'./img/gimli.jpg'},
    'legolas_pw' : {name : 'legolas', url:'./img/legolas.jpg'},
    'merry_pw' : {name : 'merry', url:'./img/merry.jpg'},
    'pippin_pw' : {name : 'pippin', url:'./img/pippin.jpg'},
    'sam_pw' : {name : 'sam', url:'./img/sam.jpg'}
  }

  passwords.addEventListener('click', function( event ) {
    event.target.classList.add('active');
    event.stopPropagation();
  });

  var bodies = document.body;
  bodies.addEventListener('click',  function( event ) {
    passwords.classList.remove('active');
  });

  document.addEventListener('keyup', function(event) {
    if(passwords.classList.contains('active')) {

      //on met enter au début pour être sur de ne pas faire d'erreur, genre mettre 1 seul =, ça planterai direct
      if('Enter' == event.code){
        if(table[string] != undefined){

          img = document.createElement('img')
          divPhoto = document.getElementById('photo');
          names = document.getElementById('name');
          img.setAttribute('src', table[string].url);
          divPhoto.innerHTML='';
          divPhoto.appendChild(img);
          names.innerHTML= table[string].name;
          passwords.innerHTML='';
          string = '';
        } else {
          passwords.innerHTML='';
          string = '';
        }
      } else {
        if('Backspace' == event.code){
          passwords.innerHTML='';
          string = '';
        }else {
          passwords.innerHTML += '*';
          string += event.key;
        }
      }
    }
  });


}
)()
