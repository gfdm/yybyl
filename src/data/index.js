import images from './images'

export default [
  {
    src: images.STEP_HEALTH,
    threshold: 40
  },
  {
    src: images.STEP_WARNING,
    threshold: 20
  },
  {
    src: images.STEP_WARNING,
    threshold: 1
  },
  {
    src: images.STEP_DYING,
    threshold: -Infinity
  }
]
