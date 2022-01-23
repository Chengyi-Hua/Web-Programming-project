import { writable } from 'svelte/store'

export const Kummerkasten = writable([
  {
    id: 1,
    rating: 2,
    text: 'Meine Ex hat Schluss gemacht. Was soll ich tun?',
  },
  {
    id: 2,
    rating: 9,
    text: 'Ich habe im Lotto gewonnen, weiß aber nicht, welches NFT ich mir kaufen soll.',
  },
  {
    id: 3,
    rating: 4,
    text: 'Ich wurde verhaftet. Gibt es hier auch gute Anwälte?',
  },
])