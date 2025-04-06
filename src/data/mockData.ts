import { TopicsData } from '../types';

export const topics: TopicsData = [
  {
    id: 'math',
    topic: 'Mathematics',
    level: 'Beginner',
    color: '#F85857',
    description:'',
    content: [
      {
        id: 'math-1',
        title: 'Algebra Basics',
        htmlContent: '<p>Algebra is the branch of mathematics that deals with symbols and the rules for manipulating these symbols. In elementary algebra, those symbols represent quantities without fixed values, known as variables.</p>'
      },
      {
        id: 'math-2',
        title: 'Geometry Fundamentals',
        htmlContent: '<p>Geometry is the branch of mathematics that deals with shapes, sizes, positions, and dimensions of things. It studies the properties and measurements of points, lines, angles, surfaces, and solids.</p>'
      },
      {
        id: 'math-3',
        title: 'Calculus Introduction',
        htmlContent: '<p>Calculus is the mathematical study of continuous change. The two major branches of calculus are differential calculus and integral calculus, which are related by the fundamental theorem of calculus.</p>'
      }
    ]
  },
  {
    id: 'science',
    topic: 'Science',
    description:'',
    level: 'Intermediate',
    color: '#01CFC9',
    content: [
      {
        id: 'science-1',
        title: 'Physics Laws',
        htmlContent: '<p>Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.</p>'
      },
      {
        id: 'science-2',
        title: 'Chemistry Elements',
        htmlContent: '<p>Chemistry is the scientific study of the properties and behavior of matter. It is a natural science that covers the elements that make up matter to the compounds made of atoms, molecules and ions.</p>'
      },
      {
        id: 'science-3',
        title: 'Biology Basics',
        htmlContent: '<p>Biology is the scientific study of life. It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field.</p>'
      }
    ]
  },
  {
    id: 'history',
    description:'',
    topic: 'History',
    level: 'Advanced',
    color: '#FDCA6F',
    content: [
      {
        id: 'history-1',
        title: 'Ancient Civilizations',
        htmlContent: '<p>Ancient civilizations refer to complex societies with developed urban centers, social stratification, symbolic communication forms, and a perceived separation from the natural environment.</p>'
      },
      {
        id: 'history-2',
        title: 'Middle Ages',
        htmlContent: '<p>The Middle Ages was the period of European history between the fall of the Roman Empire in the West and the Renaissance, characterized by feudal and manorial systems.</p>'
      },
      {
        id: 'history-3',
        title: 'Modern Era',
        htmlContent: '<p>The Modern Era is characterized by significant developments in science, politics, warfare, and technology. It includes the rise of nation-states, industrialization, and globalization.</p>'
      }
    ]
  },
  {
    id: 'language',
    description:'',
    topic: 'Languages',
    level: 'Beginner',
    color: '#01CFC9',
    content: [
      {
        id: 'language-1',
        title: 'English Grammar',
        htmlContent: '<p>English grammar is the way in which meanings are encoded into wordings in the English language. This includes the structure of words, phrases, clauses, and sentences.</p>'
      },
      {
        id: 'language-2',
        title: 'Spanish Basics',
        htmlContent: '<p>Spanish is a Romance language that originated in the Iberian Peninsula. Today, it is a global language with nearly 500 million native speakers, mainly in Spain and the Americas.</p>'
      },
      {
        id: 'language-3',
        title: 'Mandarin Introduction',
        htmlContent: '<p>Mandarin Chinese is the most widely spoken form of Chinese. It is the official language of mainland China, Taiwan, and Singapore, and one of the six official languages of the United Nations.</p>'
      }
    ]
  },
  {
    id: 'arts',
    description:'',
    topic: 'Arts & Music',
    level: 'Intermediate',
    color: '#F85857',
    content: [
      {
        id: 'arts-1',
        title: 'Drawing Techniques',
        htmlContent: '<p>Drawing is a form of visual art in which an artist uses instruments to mark paper or another two-dimensional surface. Drawing techniques include perspective, shading, and line work.</p>'
      },
      {
        id: 'arts-2',
        title: 'Music Theory',
        htmlContent: '<p>Music theory is the study of the practices and possibilities of music. It includes concepts like rhythm, harmony, melody, and form, as well as the analysis and composition of music.</p>'
      },
      {
        id: 'arts-3',
        title: 'Photography Basics',
        htmlContent: '<p>Photography is the art, application, and practice of creating durable images by recording light. It involves understanding composition, lighting, and camera settings.</p>'
      }
    ]
  }
];