import Course from 'types/api/Course'

export const Courses: Course[] = [
  {
    id: 11,
    category_id: 1,
    name: 'Aprendendo HTML',
    short_description: 'Etiam cursus varius blandit. Vivamus efficitur condimentum porta. Morbi rutrum eros a fermentum dignissim. Etiam sed lorem viverra libero malesuada consequat. Fusce vitae lacinia lacus.',
    author: 'Matt Murdock',
    user_rate: '4.7',
    description: '1/11.md',
    reviews: '456.765',
    banner: '1/111.jpg',
    feature: false
  },
  {
    id: 12,
    category_id: 1,
    name: 'CSS3 do básico ao avançado',
    short_description: 'Donec semper porta venenatis. Duis vulputate elit massa, ac luctus libero dictum vel. Suspendisse vitae quam aliquam, fringilla urna.',
    author: 'Karen Page',
    user_rate: '4.9',
    description: '1/12.md',
    reviews: '348.193',
    banner: '1/112.jpg',
    feature: true
  },
  {
    id: 13,
    category_id: 1,
    name: 'Aprenda Javascript do iniciante ao avançado',
    short_description: 'Phasellus fringilla, est ac faucibus gravida, orci nisi pulvinar tellus, vel dapibus leo est sed tortor.',
    author: 'Franklin "Foggy" Nelson',
    user_rate: '4.3',
    description: '1/13.md',
    reviews: '725.102',
    banner: '1/113.jpg',
    feature: true
  },
  {
    id: 14,
    category_id: 1,
    name: 'Evoluindo para o Typescript (2023)',
    short_description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc a dictum sem. Aliquam aliquet, erat a maximus mattis, odio metus porttitor ipsum, id elementum metus felis in turpis. Phasellus pharetra quis.',
    author: 'Kirsten McDuffie',
    user_rate: '3.8',
    description: '1/14.md',
    reviews: '230.080',
    banner: '1/114.jpg',
    feature: false
  },
  {
    id: 21,
    category_id: 2,
    name: 'Arquitetura de software',
    short_description: 'Cras tempor eget diam vitae blandit. Duis cursus dignissim justo, sit amet facilisis turpis scelerisque non.',
    author: 'Wilson Fisk',
    user_rate: '4.9',
    description: '2/21.md',
    reviews: '230.080',
    banner: '2/221.jpg',
    feature: true
  },
  {
    id: 22,
    category_id: 2,
    name: 'Banco de Dados relacionais',
    short_description: 'Phasellus imperdiet a libero non fringilla. Mauris congue efficitur ullamcorper. Sed sit amet blandit nisi, eu sagittis risus. Ut.',
    author: 'Peter Parker',
    user_rate: '4.9',
    description: '2/22.md',
    reviews: '980.713',
    banner: '2/222.jpg',
    feature: true
  },
  {
    id: 23,
    category_id: 2,
    name: 'Teoremas do MongoDB',
    short_description: 'Aliquam vehicula neque leo, ac facilisis nulla varius id. Curabitur sit amet nisi metus. Nulla facilisi.',
    author: 'Peter Parker',
    user_rate: '4.3',
    description: '2/23.md',
    reviews: '120.353',
    banner: '2/223.jpg',
    feature: false
  },
  {
    id: 24,
    category_id: 2,
    name: 'Java para profisisonais de TI',
    short_description: 'Aliquam vehicula neque leo, ac facilisis nulla varius id. Curabitur sit amet nisi metus. Nulla facilisi.',
    author: 'Miles Morales',
    user_rate: '5.0',
    description: '2/24.md',
    reviews: '120.353',
    banner: '2/224.jpg',
    feature: false
  },
  {
    id: 31,
    category_id: 3,
    name: 'Fundamentos de DevOps',
    short_description: 'Integer molestie augue non mi elementum dignissim. Aliquam sit amet ante rutrum, condimentum nulla id, vestibulum metus. Suspendisse nec.',
    author: 'Miles Morales',
    user_rate: '4.7',
    description: '3/31.md',
    reviews: '116.453',
    banner: '3/331.jpg',
    feature: true
  },
  {
    id: 32,
    category_id: 3,
    name: 'DevOps Avançado sem complicações',
    short_description: 'Vivamus cursus diam in vulputate semper. Cras pellentesque dui id purus pulvinar dignissim. Donec sed sollicitudin justo. Nunc euismod diam quis gravida pellentesque.',
    author: 'Miles Morales',
    user_rate: '4.3',
    description: '3/32.md',
    reviews: '217.922',
    banner: '3/332.jpg',
    feature: false
  },
  {
    id: 33,
    category_id: 3,
    name: 'Dominando VueJs com Nuxt3',
    short_description: 'Donec sed sollicitudin justo. Nunc euismod diam quis gravida pellentesque. Etiam nec est a sapien varius lobortis. Nam consequat posuere dolor, ut.',
    author: 'Kitty Pride',
    user_rate: '4.5',
    description: '3/33.md',
    reviews: '836.120',
    banner: '3/333.jpg',
    feature: true
  },
  {
    id: 34,
    category_id: 3,
    name: 'AWS na prática (2023)',
    short_description: 'Praesent ultrices tristique tellus eu rhoncus. Maecenas mattis, mauris sit amet finibus commodo, erat orci.',
    author: 'Norman Osborn',
    user_rate: '3.2',
    description: '3/34.md',
    reviews: '16.980',
    banner: '3/334.jpg',
    feature: false
  },
  {
    id: 41,
    category_id: 4,
    name: 'Introdução à segurança da Informação',
    short_description: 'Nam sed efficitur quam, eu cursus ipsum. Sed condimentum, velit dapibus ultrices luctus, leo enim tincidunt neque, sed tincidunt velit mi eu mi.',
    author: 'Reed Richards',
    user_rate: '5.0',
    description: '4/41.md',
    reviews: '816.381',
    banner: '4/441.jpg',
    feature: true
  },
  {
    id: 42,
    category_id: 4,
    name: 'Pentest na prática - Stealth Mode',
    short_description: 'Nunc varius, orci eleifend convallis rutrum, odio nulla finibus dui, a commodo massa augue non diam.',
    author: 'Sue Storm Richards',
    user_rate: '5.0',
    description: '4/42.md',
    reviews: '693.911',
    banner: '4/442.jpg',
    feature: true
  },
  {
    id: 43,
    category_id: 4,
    name: 'Criando uma infraestrutura robusta',
    short_description: 'Integer vestibulum sed quam sed lacinia. Nullam sagittis tristique tellus at tempor. Duis vitae erat maximus, aliquam tortor varius, condimentum ipsum. Curabitur ut scelerisque metus.',
    author: 'Ben Grimm',
    user_rate: '4.5',
    description: '4/43.md',
    reviews: '390.120',
    banner: '4/443.jpg',
    feature: true
  },
  {
    id: 44,
    category_id: 4,
    name: 'Firewalls e IA - Futuro',
    short_description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce volutpat lectus sed ultrices fermentum. Curabitur ultrices leo eu velit sagittis, in bibendum tortor consequat.',
    author: 'Jhonny Storm',
    user_rate: '4.1',
    description: '4/44.md',
    reviews: '162.900',
    banner: '4/444.jpg',
    feature: true
  }
]
