var List=[];
var can = document.getElementById("myCanvas");
var ctx=can.getContext("2d");

var circ1=new circle(300,200,25,"B","green",100);
var circ2=new circle(200,200,25,"A","red",100);
var circ3=new circle(400,200,25,"C","black",100);
var circ4=new circle(200,300,25,"D","yellow",100);
List=[circ1, circ2,circ3,circ4 ];
var ctr=new mouseCtrl([1,2]);

observer.collusionDetct(List,
                        function(circle1, circle2){
                        console.log(circle1.name);
                         },
                        function(circle1, circle2){

 });

setInterval(function(){
      ctx.clearRect(0, 0, can.width, can.height);
      for(var i=0;i<List.length;i++){
      List[i].draw();
      }
},100);