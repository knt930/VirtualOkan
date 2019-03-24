var _selectedFood = ['たまねぎ']
var _zubora = true
var _superZubora = false

window.onload = function(){
  init()
}

function init(){
  _selectedFood.forEach(function(food){
    document.getElementById(food).classList.add('selected')
  })
  showSelectedFood()
  addBadge()
  if(_superZubora){
    document.getElementById('superZubora').classList.add('selected')
  }

  if(_zubora){
    document.getElementById('zubora').classList.add('selected')
  }
}

function modalOpen(){
  document.getElementById('modal').classList.add('shown')
}

function modalClose(){
  document.getElementById('modal').classList.remove('shown')
}

function selectFood(self){
  if(_selectedFood.indexOf(self.id) != -1){
    self.classList.remove('selected')
    _selectedFood = _selectedFood.filter(function(food){return food!=self.id})
   
  } else if(_selectedFood.length < 3) {
    _selectedFood.push(self.id)
    self.classList.add('selected')
  }
  addBadge()
}

function decideFood(){
  showSelectedFood()
  modalClose()
}

function showSelectedFood(){
  var foodEle = ''
  var length = _selectedFood.length
  for(var i=0; i<3; i++){
    foodEle += '<div>'+ (i < length ? _selectedFood[i] : '?') +'</div>'
  }
  document.getElementById('selectedFood').innerHTML=foodEle
}

function onZubora(){
  if(_zubora){
    document.getElementById('zubora').classList.remove('selected')
  } else {
    document.getElementById('zubora').classList.add('selected')
  }
  _zubora=!_zubora
}

function onSuperZubora(){
  if(_superZubora){
    document.getElementById('superZubora').classList.remove('selected')
  } else {
    document.getElementById('superZubora').classList.add('selected')
  }
  _superZubora=!_superZubora
}

function addBadge(){
  var elements = document.getElementsByClassName('badge')
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML=''
  }
  _selectedFood.forEach(function(food,key){
    document.querySelector('#'+food+' .badge').innerHTML = '<img src="./img/check'+(key+1)+'.png">'
  })
}

function search(){
  location.href='/index.html?'+
  'ingredient1=' + _selectedFood[0] + '&' +
  'ingredient2=' + _selectedFood[1] + '&' +
  'ingredient3=' + _selectedFood[2] + '&' +
  'superZubora=' + _superZubora + '&' +
  'zubora=' + _zubora
}