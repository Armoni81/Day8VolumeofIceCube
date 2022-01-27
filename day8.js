
/*Write a function iceBrickVolume that will accept these parameters:

radius - bottle's radius (always > 0);
bottleLength - total bottle length (always > 0);
rimLength - length from bottle top to brick (always < bottleLength);
And return volume of ice brick that magician managed to put into a bottle. */

function iceBrickVolume(radius, bottleLength, rimLength) {
    var brickLength = bottleLength - rimLength;
    var brickDepth = radius*2;
    var brickHeight = radius; 
    
    return brickLength * brickDepth * brickHeight;
    
    }