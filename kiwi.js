import {
    incrementCustomProperty,
    setCustomProperty,
    getCustomProperty,
  } from "./updateCustomProperty.js"
  
  const kiwiElem = document.querySelector("[data-kiwi]")
  const JUMP_SPEED = 0.45
  const GRAVITY = 0.0015
  const KIWI_FRAME_COUNT = 2
  const FRAME_TIME = 100
  
  let isJumping
  let kiwiFrame
  let currentFrameTime
  let yVelocity
  export function setupKiwi() {
    isJumping = false
    kiwiFrame = 0
    currentFrameTime = 0
    yVelocity = 0
    setCustomProperty(kiwiElem, "--bottom", 0)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)
  }
  
  export function updateKiwi(delta, speedScale) {
    handleRun(delta, speedScale)
    handleJump(delta)
  }
  
  export function getKiwiRect() {
    return kiwiElem.getBoundingClientRect()
  }
  
  export function setKiwiLose() {
    kiwiElem.src = "imgs/kiwi-lose.png"
  }
  
  function handleRun(delta, speedScale) {
    if (isJumping) {
      kiwiElem.src = `imgs/kiwi-stationary.png`
      return
    }
  
    if (currentFrameTime >= FRAME_TIME) {
      kiwiFrame = (kiwiFrame + 1) % KIWI_FRAME_COUNT
      kiwiElem.src = `imgs/kiwi-run-${kiwiFrame}.png`
      currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += delta * speedScale
  }
  
  function handleJump(delta) {
    if (!isJumping) return
  
    incrementCustomProperty(kiwiElem, "--bottom", yVelocity * delta)
  
    if (getCustomProperty(kiwiElem, "--bottom") <= 0) {
      setCustomProperty(kiwiElem, "--bottom", 0)
      isJumping = false
    }
  
    yVelocity -= GRAVITY * delta
  }
  
  function onJump(e) {
    if (e.code !== "Space" || isJumping) return
  
    yVelocity = JUMP_SPEED
    isJumping = true
  }
  