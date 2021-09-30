


// part 1
function computeForce() {
    // code
    var m = document.getElementById("mass").value;
    var a = document.getElementById("acceleration").value;
    var f = m * a;
    document.getElementById("display").innerHTML= f +"N";
}


// part 2
function computeAvgVelocity() {
  var v = document.getElementById("velocity").value;
  var t = document.getElementById("time").value;
  var a = document.getElementById("acceleration1").value;
  var d = (v*t) - (1/2) * (a*t^2);
  document.getElementById("display1").innerHTML= d +" meter(s)";
    // code

}


// part 3
function computePrincipal() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var dis = b * b - 4 * a * c;
  var s = 0;
  var s1 = 0;
    if(dis < 0) {
      document.getElementById("display2").innerHTML = "No solution";
      document.getElementById("display2a").innerHTML = "No solution";
    }
    else if(dis === 0) {
      s = (-1*b)/(2*a);
      document.getElementById("display2").innerHTML = "x = " + s;
    }
    else {
      s = (-1 * b - Math.pow(dis, 0.5))/(2*a);
      s1 = (-1 * b + Math.pow(dis,0.5))/(2*a);
      document.getElementById("display2").innerHTML = "x = " + s;
      document.getElementById("display2a").innerHTML = "x = " + s1;
    }

    // code

}

// part 4
function computePresentValue() {
  var pmt = document.getElementById("PMT").value;
  var r = document.getElementById("r").value;
  var n = document.getElementById("n").value;
  var rpn = Math.pow(1+r,n)
  var ans = (pmt * (1 - (1/rpn))/r);
  document.getElementById("display3").innerHTML = "Present value is: " + ans;

    // code

}
