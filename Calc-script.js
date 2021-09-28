var numbers = [{ key : '7', fun : "print('7')"},{ key : '8', fun : "print('8')"},{ key : '9', fun : "print('9')"},{ key : '4', fun : "print('4')"},{ key : '5', fun : "print('5')"},{ key : '6', fun : "print('6')"},{ key : '1', fun : "print('1')"},{ key : '2', fun : "print('2')"},{ key : '3', fun : "print('3')"},{ key : '00', fun : "print('00')"},{ key : '0', fun : "print('0')"},{ key : '.', fun : "print('.')"}]
var basicOperators = [{ key : 'C', fun : "clearT('C')"}, { key : 'CE', fun : "clearT('CE')"}, { key : 'DEG', fun : "angle(this)"}, { key : '÷', fun : "print('÷')"}, { key : '*', fun : "print('*')"}, { key : '-', fun : "print('-')"}, { key : '+', fun : "print('+')"}, { key : '%', fun : "print('%')"}, { key : '=', fun : "solve()"}]
var advancedOperators = [{ key : 'INV', fun : "inv(this)"},{ key : '(', fun : "print('(')"},{ key : ')', fun : "print(')')"},{ key : 'sin', fun : "print('sin(')"}, { key : 'cos', fun : "print('cos(')"}, { key : 'tan', fun : "print('tan(')"}, { key : '√', fun : "print('√(')"}, {key : '^', fun : "print('^')"}, {key : 'abs', fun : "print('abs(')"}, {key : 'log', fun : "print('log(')"}, {key : 'ln', fun : "print('ln(')"}, {key : 'round', fun : "print('round(')"},  {key : 'π', fun : "print('π')"}, {key : 'e', fun : "print('exp(1)')"},{key : 'φ', fun : "print('φ')"}]
var advancedOperatorsINV = [{ key : 'INV', fun : "inv(this)"},{ key : '(', fun : "print('(')"},{ key : ')', fun : "print(')')"},{ key : 'asin', fun : "print('asin(')"}, { key : 'acos', fun : "print('acos(')"}, { key : 'atan', fun : "print('atan(')"}, { key : 'x<sup>2</sup>', fun : "print('^2')"}, {key : '^', fun : "print('^')"}, {key : 'abs', fun : "print('abs(')"}, {key : '10<sup>x</sup>', fun : "print('10^(')"}, {key : 'e<sup>x</sup>', fun : "print('exp(')"}, {key : 'round', fun : "print('round(')"},  {key : 'π', fun : "print('π')"}, {key : 'e', fun : "print('exp(1)')"},{key : 'φ', fun : "print('φ')"}]

var mobNums = [{ key : '7', fun : "print('7')"},{ key : '8', fun : "print('8')"},{ key : '9', fun : "print('9')"},{ key : '4', fun : "print('4')"},{ key : '5', fun : "print('5')"},{ key : '6', fun : "print('6')"},{ key : '1', fun : "print('1')"},{ key : '2', fun : "print('2')"},{ key : '3', fun : "print('3')"},{ key : '.', fun : "print('.')"},{ key : '0', fun : "print('0')"}, { key : '=', fun : "solve()"}]
var mobBo = [{ key : "<img src='arrow.svg'/>", fun : "clearT('C')"},{ key : '÷', fun : "print('÷')"}, { key : '*', fun : "print('*')"}, { key : '-', fun : "print('-')"}, { key : '+', fun : "print('+')"}]
var mobAo = [{ key : 'INV', fun : "inv(this)"},{ key : 'DEG', fun : "angle(this)"},{key : 'abs', fun : "print('abs(')"},{ key : 'sin', fun : "print('sin(')"}, { key : 'cos', fun : "print('cos(')"}, { key : 'tan', fun : "print('tan(')"}, { key : '√', fun : "print('√(')"}, {key : '^', fun : "print('^')"}, {key : 'log', fun : "print('log(')"}, {key : 'ln', fun : "print('ln(')"}, {key : 'π', fun : "print('π')"}, {key : 'e', fun : "print('exp(1)')"},{key : 'φ', fun : "print('φ')"},{ key : '(', fun : "print('(')"},{ key : ')', fun : "print(')')"}]
var mobAoINV = [{ key : 'INV', fun : "inv(this)"},{ key : 'DEG', fun : "angle(this)"},{key : 'abs', fun : "print('abs(')"},{ key : 'asin', fun : "print('asin(')"}, { key : 'acos', fun : "print('acos(')"}, { key : 'atan', fun : "print('atan(')"}, { key : 'x<sup>2</sup>', fun : "print('^2')"}, {key : '^', fun : "print('^')"}, {key : '10<sup>x</sup>', fun : "print('10^(')"}, {key : 'e<sup>x</sup>', fun : "print('exp(')"}, {key : 'π', fun : "print('π')"}, {key : 'e', fun : "print('exp(1)')"},{key : 'φ', fun : "print('φ')"}, { key : '(', fun : "print('(')"},{ key : ')', fun : "print(')')"}]

var mapper = [{key : '÷', val : '/'}, {key : 'log', val : 'Math.log10'}, {key : 'ln', val : 'Math.log'}, {key : 'abs', val : 'Math.abs'}, {key : '^', val : '**'}, {key : '√', val : 'Math.sqrt'}, {key : 'round', val : 'Math.round'}, {key : 'π', val : 'Math.PI'}, {key : 'φ', val : '((1+Math.sqrt(5))/2)'},{key : 'exp', val : 'Math.exp'}]
//document.addEventListener('contextmenu', event => event.preventDefault());
var ang = 'DEG';
var Err = false;
var op = null;
var mob = false;
function dc(c, i){
    i = i||0;
    return document.getElementsByClassName(c)[i];
}

function er(m){
    console.log(m);
}
function animate({timing, draw, duration}) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction)
        draw(progress);
        if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
}

window.addEventListener('keydown', (event) =>{
    if(event.key == 'Enter'){
        solve();
    }else if(event.keyCode >= 48 && event.keyCode <= 105){
        if(Err){
            dc('answer-column').value = '';
            Err = false;
        }
    }
});





window.addEventListener('resize', function(){
    renderCalc(this.innerWidth);
});
//numbers
document.addEventListener('DOMContentLoaded', function(){
    renderCalc(window.innerWidth);
}, true);

function renderCalc(width){
    var keys = dc('keys');
    keys.innerHTML = "";
    keys.innerHTML += `<div class='numbers'></div><div class='basicOperators'></div><div class = 'advancedOperators'></div>`;

    var nums = dc("numbers");
    var bo = dc("basicOperators");
    ao = dc('advancedOperators');
    nums.innerHTML = "";
    bo.innerHTML = "";
    ao.innerHTML = "";
    if(width>600){
        mob = false;
        for(var i = 0; i<4; i++){
            nums.innerHTML += `<div class='row-nums r-n${i}'></div>`;
            for(var j=0; j<3; j++){
                dc(`r-n${i}`).innerHTML += `<div class='col c${j}' onclick="${numbers[3*i + j].fun}"><p class="btn">${numbers[3*i + j].key}</p></div>`;
            }
        }
        for(var i = 0; i<3; i++){
            bo.innerHTML += `<div class='row-bo r-bo${i}'></div>`;
            for(var j=0; j<3; j++){
                dc(`r-bo${i}`).innerHTML += `<div class='col c${j}' onclick="${basicOperators[3*i + j].fun}"><p class="btn">${basicOperators[3*i + j].key}</p></div>`;
            }
        }
        for(var i = 0; i<5; i++){
            ao.innerHTML += `<div class='row-ao r-ao${i}'></div>`;
            for(var j=0; j<3; j++){
                dc(`r-ao${i}`).innerHTML += `<div class='col c${j}' onclick="${advancedOperators[3*i + j].fun}"><p class="btn">${advancedOperators[3*i + j].key}</p></div>`;
            }
        }
        with (dc('answer-column')) {
            onblur = function(e) {
                var elm = e.target;
                setTimeout(function(){elm.focus()});
            }
            onkeydown = function(e) {
                var key = e.which || e.keyCode;
                if (key == 9) e.preventDefault();
            }
        }
    }else{
        mob = true;
        for(var i = 0; i<4; i++){
            nums.innerHTML += `<div class='row-nums r-n${i}'></row>`;
            for(var j=0; j<3; j++){
                dc(`r-n${i}`).innerHTML += `<div class='col c${j}' onclick="${mobNums[3*i + j].fun}"><p class="btn">${mobNums[3*i + j].key}</p></div>`;
            }
        }
        for(var i = 0; i<5; i++){
            bo.innerHTML += `<div class='r-bo r-bo${i}'><div class='col-bo' onclick="${mobBo[i].fun}"><p class="btn">${mobBo[i].key}</p></div></div>`;
        }
        for(var i = 0; i<5; i++){
            ao.innerHTML += `<div class='row-ao r-ao${i}'></div>`;
            for(var j=0; j<3; j++){
                dc(`r-ao${i}`).innerHTML += `<div class='col c${j}' onclick="${mobAo[3*i + j].fun}"><p class="btn">${mobAo[3*i + j].key}</p></div>`;
            }
        }
        ao.style.right = `${-dc('keys').offsetWidth*0.68}px`;
        //crazy shift logic
        var startX;
        var deltaX;
        var prevX;
        var maxX = Math.round(-dc('keys').offsetWidth*0.68);

        ao.addEventListener('touchstart', touchStart);
        ao.addEventListener('touchmove', touchMove);
        ao.addEventListener('touchend', touchend);
        bo.addEventListener('touchstart', touchStart);
        bo.addEventListener('touchmove', touchMove);
        bo.addEventListener('touchend', touchend);
        function touchMove(e){
            var aoRight = Math.round(parseFloat(ao.style.right.substring(0, ao.style.right.lastIndexOf('px'))));
            deltaX = prevX - e.touches[0].clientX;
            prevX = e.touches[0].clientX;
           
            if((aoRight+deltaX)<=0 && (aoRight+deltaX)>=maxX){
                ao.style.right = `${aoRight + deltaX}px`;
            }
        }
        function touchStart(e){
            startX = e.touches[0].clientX;
            prevX = startX;
        }
        function touchend(e){
            if(Math.abs(startX - e.changedTouches[0].clientX)>0){
                var direction = (startX - e.changedTouches[0].clientX)>=0 ? 'left' : 'right';
               
                var aoRight = Math.round(parseFloat(ao.style.right.substring(0, ao.style.right.lastIndexOf('px'))));
                var diff = (direction == 'left')? (0-aoRight) : (maxX - aoRight);
                var opac = (direction == 'left')? -0.4 : 0.4;
                if(direction == 'left'){
                    nums.addEventListener('touchstart', touchStart);
                    nums.addEventListener('touchmove', touchMove);
                    nums.addEventListener('touchend', touchend);
                }else{
                    nums.removeEventListener('touchstart', touchStart);
                    nums.removeEventListener('touchmove', touchMove);
                    nums.removeEventListener('touchend', touchend);
                }
                var currOpacity = parseFloat(nums.style.opacity) || 1;
                er(opac)
                animate({
                    duration: 1000,
                    timing: function(timeFraction) {
                        return val = (1/(1+Math.exp(-(30*timeFraction-5))));
                    },
                    draw: function(progress){
                        ao.style.right = `${aoRight + (diff*progress)}px`;
                        bo.style.opacity = currOpacity + (progress*opac);
                        nums.style.opacity = currOpacity + (progress*opac);
                    }});
        }
        
    }
    }
    var timer;
    dc('r-bo0').childNodes[0].addEventListener('touchstart', function(){
        timer = setTimeout(function(){
            clearT('CE');
            if(navigator.vibrate){
                window.navigator.vibrate(100);
            }
        }, 500);
    });
    dc('r-bo0').childNodes[0].addEventListener('touchend', function(){
        if(timer){
            clearTimeout(timer);
        }
    });

}


// disable gboard
(function hideKeyboard(element) {
    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    setTimeout(function() {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
})(dc('answer-column'));

function print(val){
    op = val;
    if(Err){
        dc('answer-column').value=val;
        Err = false;
    }
    else{
        er(dc('answer-column').value);
        dc('answer-column').value+=val;
    }
}
function clearT(t){
    let text = dc('answer-column').value;
    if(t == 'C'){
        dc('answer-column').value = text.substring(0, text.lastIndexOf(op));
        text = dc('answer-column').value;
        op = text.substring(text.length - 1);
    }
    else{
        dc('answer-column').value = '';
    }
}
function inv(self){
    
    var invSel = (self.style.backgroundColor == 'rgb(44, 57, 75)'); //selected
    ao = dc('advancedOperators');
    ao.innerHTML = '';
    var aop = (mob)? mobAo : advancedOperators;
    var aopi = (mob)? mobAoINV : advancedOperatorsINV;
    if(invSel){
    for(var i = 0; i<5; i++){
        ao.innerHTML += `<div class='row-ao r-ao${i}'></row>`;
        for(var j=0; j<3; j++){
            dc(`r-ao${i}`).innerHTML += `<div class='col c${j}' onclick="${aop[3*i + j].fun}"><p class="btn">${aop[3*i + j].key}</p></div>`;
        }
    }}else{
        for(var i = 0; i<5; i++){
            ao.innerHTML += `<div class='row-ao r-ao${i}'></row>`;
            for(var j=0; j<3; j++){
                dc(`r-ao${i}`).innerHTML += `<div class='col c${j}' onclick="${aopi[3*i + j].fun}"><p class="btn">${aopi[3*i + j].key}</p></div>`;
            }
        }
    }
    dc('r-ao0').getElementsByClassName('c0')[0].style.backgroundColor = (self.style.backgroundColor == 'rgb(44, 57, 75)')? ((mob)? '#055052' : '#152D35') : 'rgb(44, 57, 75)'; //if INV not selected
}


function angle(){
    ang = (ang == 'DEG')? 'RAD' : 'DEG';
    dc(mob?'r-ao0':'r-bo0').getElementsByClassName(mob?'c1':'c2')[0].childNodes[0].innerHTML = ang;
}
function sin(a){
    return (ang == 'DEG')? Math.sin(a*Math.PI/180) : Math.sin(a);
}
function cos(a){
    return (ang == 'DEG')? Math.cos(a*Math.PI/180) : Math.cos(a);
}
function tan(a){
    return sin(a)/cos(a)
}
function asin(a){
    return (ang == 'DEG')? Math.asin(a)*180/Math.PI : Math.asin(a);
}
function acos(a){
    return (ang == 'DEG')? Math.acos(a)*180/Math.PI : Math.acos(a);
}
function atan(a){
    return (ang == 'DEG')? Math.atan(a)*180/Math.PI : Math.atan(a);
}

function solve(){
    try{
        var solution = dc('answer-column').value;
        for(var i = 0; i< mapper.length; i++){
            solution = solution.replaceAll(mapper[i].key, mapper[i].val);
        }
        er(solution)
        solution = parseFloat(eval(solution));
        
        solution = solution.toString().includes('e')? parseFloat(solution.toString().substring(0, solution.toString().indexOf('e'))).toFixed(4).toString().replace(/\.?0+$/,"") + solution.toString().substring(solution.toString().indexOf('e')) : solution.toFixed(4).toString().replace(/\.?0+$/,"");
        dc('answer-column').value =solution;
        op = solution;
    }
    catch(error){
        Err = true;
        dc('answer-column').value = ('Syntax Error');
    }
}

