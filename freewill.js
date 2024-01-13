/* This declares an array of paths via const godspaths. Then via mypath function, you can call the function while inserting wich "path" (part of the array). Although you have the free will and choice to choose which path you take, God ultimately has declared your paths initially. */

const godsPaths = ["Path 1", "Path 2", "Path 3"];

function myPath(Route) {
  
  if (Route == 0) {
    console.log("Hospital");
    return "Path 1";
  }

  else if (Route == 1) {
    console.log("Work");
    return "Path 2";
  }

  else {
    console.log("Home");
    return "Path 3";
  }
}
myPath(0);