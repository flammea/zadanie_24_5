const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
  const finalScore = distancePoints + stylePoints + windFactor + gateFactor;
  return Math.round((finalScore)*10)/10;
}

module.exports = calculateTotalPoints;