import {
    getCustomProperty,
    incrementCustomProperty,
    setCustomProperty,
  } from "./updateCustomProperty.js"
  
  const SPEED = 0.05
  // cvreate floor 
  const floorElems = document.querySelectorAll("[data-floor]")
  
  // sets up floor changes
  export function setupFloor() {
    setCustomProperty(floorElems[0], "--left", 0)
    setCustomProperty(floorElems[1], "--left", 300)
  }
  // the floor math movement calculation
  export function updateFloor(delta, speedScale) {
    floorElems.forEach(floor => {
      incrementCustomProperty(floor, "--left", delta * speedScale * SPEED * -1)
  
      if (getCustomProperty(floor, "--left") <= -300) {
        incrementCustomProperty(floor, "--left", 600)
      }
    })
  }
  