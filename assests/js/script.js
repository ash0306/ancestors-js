function generation(x,y){
    if(x==0){
        document.write("me!");
        return;
    }
    if(y=="m"){
        switch(x){
            case 1:
                document.write("son");
                break;
            case 2:
                document.write("grandson");
                break;
            case 3:
                document.write("great grandson");
                break;
            case -1:
                document.write("father");
                break;
            case -2:
                document.write("grandfather");
                break;
            case -3:
                document.write("great grandfather");
                break;
        }
        return;
    }
    else{
        switch(x){
            case 1:
                document.write("daughter");
                break;
            case 2:
                document.write("granddaughter");
                break;
            case 3:
                document.write("great granddaughter");
                break;
            case -1:
                document.write("mother");
                break;
            case -2:
                document.write("grandmother");
                break;
            case -3:
                document.write("great grandmother");
                break;
        }
        return;
    }
};

generation(2, "f");
document.write("<br>");
generation(-3, "m");