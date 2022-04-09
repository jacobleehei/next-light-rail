
export function roundToTwoDecimal(number) {
   return Math.round(number * 100) / 100
}

export function minDistancePoints({
   targetPoint,
   comparePoints,
}) {
   function dist(p1, p2) {
      let x0 = p1.latitude - p2.latitude;
      let y0 = p1.longitude - p2.longitude;
      return x0 * x0 + y0 * y0;
   }
   comparePoints.sort((a, b) => {
      return dist(a, targetPoint) - dist(b, targetPoint)
   })

   return comparePoints;
}