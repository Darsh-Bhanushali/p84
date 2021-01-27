canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1W = 100;
car1H = 90;

car2W = 100;
car2H = 90;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car1X = 10;
car1Y = 10;

car2_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car2X = 10;
car2Y = 10;


function add(){
    bg_canvas = new Image();
    bg_canvas.onload = uploadbackground;
    bg_canvas.src = background_image;

    bg_car1 = new Image();
    bg_car1.onload = uplodcar1;
    bg_car1.src = car1_image;

    bg_car2 = new Image();
    bg_car2.onload = uplodcar2;
    bg_car2.src = car2_image;

}

function uploadbackground(){
ctx.drawImage(bg_canvas,0,0,canvas.width,canvas.height);
}



function uploadcar1(){
    ctx.drawImage(bg_car1,car1X,car1Y,car1H,car1W);
 
}

function uploadcar2(){
    ctx.drawImage(bg_car2,car2X,car2Y,car2H,car2W);
 
}


window.addEventListener("keydown", keydown1);
function keydown1(e){
keypress = e.keyCode;
console.log(keypress);

if(keypress == '38') {
car1_up();
console.log("car1_up");

}

if(keypress == '40') {
    car1_down();
    console.log("car1_down");
    
    }

    if(keypress == '37') {
        car1_left();
        console.log("car1_left");
        
        }

        if(keypress == '39') {
            car1_right();
            console.log("car1_right");
            
            }   
            
            if(keypress == '87') {
                car2_up();
                console.log("car2_up");
                
                } 
                
                if(keypress == '83') {
                    car2_down();
                    console.log("car2_down");
                    
                    }

                    if(keypress == '65') {
                        car2_left();
                        console.log("car2_left");
                        
                        }

                        if(keypress == '68') {
                            car2_right();
                            console.log("car2_right");
                            
                            }   
                
                
                
    
}
