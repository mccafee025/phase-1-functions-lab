const scuberHq = 42;
function distanceFromHqInBlocks(street){
    if ( street > scuberHq ){
        return street - scuberHq
    }
    else if (street < scuberHq){
        return scuberHq - street
    }
}
function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street)*264
}
function distanceTravelledInFeet(start, finish){
    if (start < finish){
        return  (finish - start) * 264; 
    }
    else if (finish < start){
        return (start - finish)* 264;
    }
}
function calculatesFarePrice(start, finish){
    if (distanceTravelledInFeet(start, finish) <= 400){
        return 0;
    }
    else if (distanceTravelledInFeet(start, finish) > 2500){
        return 'cannot travel that far';
    }
    else if (distanceTravelledInFeet(start, finish) > 2000){
        return 25
    }
    else if (distanceTravelledInFeet(start, finish) > 400){
        return 0.02 * (distanceTravelledInFeet(start, finish) - 400);
}
}
