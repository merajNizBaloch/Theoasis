export const currentGalleryImages = [
  {
    src: "/gallery/1000065066.webp",
    alt: "Teachers standing together in a classroom at The Oasis School",
    caption: "Teachers at The Oasis School",
    context: "School life",
  },
  {
    src: "/gallery/1000065062.webp",
    alt: "A student speaking into a microphone during a school programme",
    caption: "Student participation and public speaking",
    context: "Student life",
  },
  {
    src: "/gallery/1000065061.webp",
    alt: "A student speaking into a microphone during a school programme",
    caption: "Student voice and confidence",
    context: "Student life",
  },
  {
    src: "/gallery/1000065064.webp",
    alt: "Students and guests seated during an academic programme",
    caption: "An academic gathering at The Oasis",
    context: "School life",
  },
  {
    src: "/gallery/1000065059.webp",
    alt: "Students learning in a computer lab",
    caption: "Computer learning at The Oasis",
    context: "Academics",
  },
  {
    src: "/gallery/1000065063.webp",
    alt: "Students seated together during a school programme",
    caption: "The Oasis student community",
    context: "Student life",
  },
  {
    src: "/gallery/1000065057.webp",
    alt: "Students during an educational visit to the University of Makran Panjgur",
    caption: "Educational visit to the University of Makran Panjgur",
    context: "Educational visit",
  },
  {
    src: "/gallery/1000065055.webp",
    alt: "Students during an educational visit to the University of Makran Panjgur",
    caption: "Students at the University of Makran Panjgur",
    context: "Educational visit",
  },
  {
    src: "/gallery/1000065060.webp",
    alt: "Students browsing books in the school library",
    caption: "Reading and research in the school library",
    context: "Academics",
  },
  {
    src: "/gallery/1000065065.webp",
    alt: "A large outdoor gathering of students at The Oasis School",
    caption: "A large school gathering from The Oasis archive",
    context: "From the archive",
  },
] as const;

export type CurrentGalleryImage = (typeof currentGalleryImages)[number];
