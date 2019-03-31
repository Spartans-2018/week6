

setInterval(secondsTickHandler, 1000);

/**
 * Scales a number to a rotation degree based on the scale provided.
 * 
 * @param {*} seconds 
 * @param {*} scale 
 */
function convertToRotateDegrees(seconds, scale) {
    return (seconds / scale * 360);
}

function secondsTickHandler() {
    const date = new Date();

    rotateElement(date.getSeconds(), 60, '.second-hand');
    rotateElement(date.getMinutes(), 60, ".minute-hand");
    rotateElement(date.getHours(), 12, ".hour-hand");
}

function rotateElement(timeSegment, rotationScale, elementCSSSelector) {
    const degrees = convertToRotateDegrees(timeSegment, rotationScale);
    document.querySelector(elementCSSSelector)
        .style.transform = `rotate(${degrees + 90}deg)`;
}
