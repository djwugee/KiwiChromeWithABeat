import {
    setCustomProperty,
    incrementCustomProperty,
    getCustomProperty,
  } from "./updateCustomProperty.js"
  
  const SPEED = 0.05
  const FERN_INTERVAL_MIN = 500
  const FERN_INTERVAL_MAX = 3000
  const worldElem = document.querySelector("[data-world]")

/*let nextFernTime 

  export function setupFern() {
    nextFernTime = FERN_INTERVAL_MIN
    document.querySelectorAll("[data-fern]").forEach(fern => {
      fern.remove()
    })
  }
  
  function createFern() {
    const fern = document.createElement("img")
    fern.dataset.fern = true
    fern.src = "imgs/fern.png"
    fern.classList.add("fern")
    setCustomProperty(fern, "--left", 100)
    worldElem.append(fern)
  }
  */

  let nextFernTime

    // fetches 
  export function setupFern() {
    nextFernTime = FERN_INTERVAL_MIN
    document.querySelectorAll("[data-fern]").forEach(fern => {
      fern.remove()
    })
  }
    // fern position update
  export function updateFern(delta, speedScale) {
    document.querySelectorAll("[data-fern]").forEach(fern => {
      incrementCustomProperty(fern, "--left", delta * speedScale * SPEED * -1)
      if (getCustomProperty(fern, "--left") <= -100) {
        fern.remove()
      }
    })

    
  
    if (nextFernTime <= 0) {
      createFern()
      nextFernTime =
        randomNumberBetween(FERN_INTERVAL_MIN, FERN_INTERVAL_MAX) / speedScale
    }
    nextFernTime -= delta
  }
  
  export function getFernRects() {
    return [...document.querySelectorAll("[data-fern]")].map(fern => {
      return fern.getBoundingClientRect()
    })
  }
  
  function createFern() {
    const fern = document.createElement("img")
    fern.dataset.fern = true
    fern.src = "imgs/fern.png"
    fern.classList.add("fern")
    setCustomProperty(fern, "--left", 100)
    worldElem.append(fern)
  }

  
  function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  