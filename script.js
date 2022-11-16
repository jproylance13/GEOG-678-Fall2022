function findTopLeft(pointList) {  //max lat and long
	var maxLat = null;
	var minLon = null;
	
	pointList.data.forEach(
		point => {
			if (maxLat == null) { //first point
				maxLat = point.lat
				minLon = point.lon
			}
			else {
				if (point.lat > maxLat){   //max lat
					maxLat = point. lat
				}
				if (point.lon < minLon){  //min lon
					linLon = point.lon
				}
			}
		}
		)
		
	return {"poinId": 1, "lat": maxLat, "lon": minLon}
}


function findTopRight(pointList){   // Max Lat and Max lon
	var maxLat = null;
	var maxLon = null;
	
	pointList.data.forEach(
		point => {
			if (maxLat == null) {  // first point
				maxLat = point.lat
				maxLon = point.lon
			}
			else {
				if ( point.lat > maxLat){  // max lat
					maxLat = point.lat
				}
				if (point.lon > maxLon) {  //max long
					maxLon = point.lon
				}
			}
		}
		)
	return {"pointId": 2, "lat": maxLat, "lon": maxLon}
}


function findBottomLeft(pointList){  // Min Lat and Min Lon
	var minLat = null;
	var minLon = null;
	

	pointList.data.forEach(
		point => {
			if (minLat == null) { // first point
				minLat = point.lat
				minLon = point.lon
			}
			else {
				if (point.lat<minLat){ // min lat
					minLat = point.lat
				}
				if (point.lon < minLon) { //min lon
					minLon = point.lon
				}
			}
		}
		)
		
	return {"pointId":3, "lat": minLat, "lon": minLon}
}


function findBottomRight(pointList){ // Min Lat and Max lon
	var minLat = null;
	var maxLon = null;
	
	pointList.data.forEach(
		point => {
			if (minLat == null) {  // first point
				minLat = point.lat
				maxLon = point.lon
			}
			else {
				if (point.lat < minLat){  // max lat
					minLat = point.lat
				}
				if (point.lon > maxLon) {  //max long
					maxLon = point.lon
				}
			}
		}
		)
		
	return {"pointId": 4, "lat": minLat, "lon": maxLon}
}


function Run(){
	// corners created by functions that select from the data
	var topLeftPoint = findTopLeft(theJSON);
	var topRightPoint = findTopRight(theJSON);
	var bottomLeftPoint = findBottomLeft(theJSON);
	var bottomRightPoint = findBottomRight(theJSON);
	
	var boundingBox = {
		topLeft: topLeftPoint,
		topRight: topRightPoint,
		bottomLeft: bottomLeftPoint,
		BottomRight: bottomRightPoint
	}
	
	console.log("bounding box computed for jp_roylance@tamu.edu: ");
	console.log(boundingBox);
}