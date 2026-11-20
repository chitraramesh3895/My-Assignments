function result (number){
    if(number<0){
    return "negative"
    }
    else if (number>0){
    return "positive"
    }
    else {
    return "neutral"
    }
    }
    let i= -1;
    let j= 5;
    let k= 0;
    
    console.log(result(i));
    console.log(result(j));
    console.log(result(k));