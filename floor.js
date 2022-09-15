import {
    getCustomProperty,
    incrementCustomProperty,
    setCustomProperty,
  } from "./updateCustomProperty.js"
  
  const SPEED = 0.05
  const floorElems = document.querySelectorAll("[data-floor]")
  
  export function setupFloor() {
    setCustomProperty(floorElems[0], "--left", 0)
    setCustomProperty(floorElems[1], "--left", 300)
  }
  
  export function updateFloor(delta, speedScale) {
    floorElems.forEach(floor => {
      incrementCustomProperty(floor, "--left", delta * speedScale * SPEED * -1)
  
      if (getCustomProperty(floor, "--left") <= -300) {
        incrementCustomProperty(floor, "--left", 600)
      }
    })
  }
  