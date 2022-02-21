import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"

const model = new Promise((res) => new OBJLoader().load('/models/bag.obj', (o) => res(o)))

export default model