import { PerspectiveCamera } from "three"

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(65, 55, 100)

export default camera