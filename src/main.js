// import animateTitle from './features/animateTitle'
// import createBadge from './features/createBasge'
import './styles/style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
// import feature from './features/featureTest'

console.log('Welcome to the new Webflow workflow - Working From local')

// createBadge()
// animateTitle()

// feature()

const animation = gsap.to('.ball', {
  x: '50vw',
  borderRadius: '0%',
  marginBottom: '2rem',
  stagger: 0.5,
  ease: 'ease',
  yoyo: true,
  repeat: -1,
  paused: false,
  // scrollTrigger: {
  //   markers: true,
  //   trigger: '.stream-wrapper',
  // },
  onComplete: () => {
    console.log('completed')
  },
})

const playButton = document.querySelector('[fs-element="play"]')

const pauseButton = document.querySelector('[fs-element="pause"]')

playButton.addEventListener('click', () => {
  animation.play()
})
pauseButton.addEventListener('click', () => {
  animation.pause()
})
