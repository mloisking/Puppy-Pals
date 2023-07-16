import puppyimage from './puppypicture.jpeg'
import puppyimage1 from './cutepup.jpeg'
import puppyimage2 from './cutepup2.jpeg'
import puppyimage3 from './brownpuppy.jpeg'
import puppyimage4 from './Daschundpuppy.jpeg'
import puppyimage5 from './PlayfulPup.jpeg'
import puppyimage6 from './PlayfulPup2.jpeg'

export const puppyList = [
  {
    id: 1,
    name: "Sir Waggington",
    email: "sir-wag@email.com",
    isCute: true,
    age: 5,
    ownerId: 1,
    tricks: [
      { id: 2, title: "Lay Down" },
      { id: 3, title: "Jump through flaming hoop" },
    ],
    puppyimage: puppyimage
  },
  {
    id: 2,
    name: "Fiona Penny Pickles",
    email: "pick-your-pennies@email.com",
    isCute: true,
    age: 6,
    ownerId: 1,
    tricks: [],
    puppyimage: puppyimage1
  },
  {
    id: 3,
    name: "Professor Wagglesworth",
    email: "waggie@email.com",
    isCute: true,
    age: 6,
    ownerId: 2,
    tricks: [{ id: 1, title: "Sit" }],
   puppyimage: puppyimage2
  },
  {
    id: 4,
    name: "Sergeant Barkowitz",
    email: "the-sarge@email.com",
    isCute: true,
    age: 4,
    ownerId: 2,
    tricks: [{ id: 2, title: "Lay Down" }],
  puppyimage: puppyimage3
  },
  {
    id: 5,
    name: "Captain Sniffer",
    email: "capn-sniff@email.com",
    isCute: true,
    age: 7,
    ownerId: 3,
    tricks: [],
    puppyimage: puppyimage4
  },
  {
    id: 6,
    name: "Miss Furbulous",
    email: "miss-furby@email.com",
    isCute: true,
    age: 1,
    ownerId: 3,
    tricks: [],
    puppyimage:puppyimage5
  },
  {
    id: 7,
    name: "Alfred von Wigglebottom",
    email: "alfie@email.com",
    isCute: true,
    age: 2,
    ownerId: 3,
    tricks: [],
    puppyimage: puppyimage6
  },
];