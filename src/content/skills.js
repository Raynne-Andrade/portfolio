import { 
  FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaWordpress, FaFigma, FaSass, FaLaravel, 
  FaSearch, FaLaptopCode 
} from "react-icons/fa";
import tailwind from "../assets/Tailwind.png";
import nuxt from '../assets/nuxt.png'
import storybook from '../assets/storybook.png'


const skills = [
  {
    id: "react",
    label: "React",
    icon: <FaReact size={50} color="#73D8FF" />,
    description: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
  },
  {
    id: "vuejs",
    label: "Vue.js",
    icon: <FaVuejs size={50} color="#2D862E" />,
    description: "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única."
  },
  {
    id: "html",
    label: "HTML",
    icon: <FaHtml5 size={50} color="#FF5722" />,
    description: "O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website."
  },
   {
    id: "nuxt",
    label: "NuxtJs",
    icon: <img src={nuxt} width={50} alt='NuxtJs' />,
    description: "O Nuxt.js é um framework baseado em Vue.js que facilita a criação de aplicações web modernas, rápidas e escaláveis. Ele oferece recursos como renderização no lado do servidor (SSR), Static Site Generation (SSG) e organização estruturada do projeto, tornando o desenvolvimento mais ágil e com melhor performance. Ideal para criar sites otimizados para SEO e com ótima experiência do usuário."
  },
  {
    id: "storybook",
    label: "StoryBook",
    icon: <img src={storybook} width={50} alt='storybook' />,
    description: "O Storybook é uma ferramenta para desenvolver e documentar componentes de interface de forma isolada. Ele permite criar, testar e visualizar componentes sem depender da aplicação inteira, acelerando o desenvolvimento e garantindo maior consistência no design. Também funciona como uma biblioteca de componentes interativa, perfeita para equipes que prezam por padronização e escalabilidade no frontend."
  },
  {
    id: "css",
    label: "CSS",
    icon: <FaCss3Alt size={50} color="#1273DE" />,
    description: "O CSS ajuda a editar, alinhar, remover e trabalhar no espaço entre elementos de uma página."
  },
  {
    id: "javascript",
    label: "JavaScript",
    icon: <FaJsSquare size={50} color="#FB9E00" />,
    description: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
  },
  {
    id: "wordpress",
    label: "WordPress",
    icon: <FaWordpress size={50} color="#207196" />,
    description: "WordPress é o CMS mais usado no mundo, flexível, gratuito e com várias vantagens em relação a outros CMS."
  },
  {
    id: "figma",
    label: "Figma",
    icon: <FaFigma size={50} color="#000" />,
    description: "Figma é um editor online de design gráfico focado na criação de interfaces gráficas e experiência de usuário com ênfase colaborativa."
  },
  {
    id: "sass",
    label: "Sass",
    icon: <FaSass size={50} color="#C76395" />,
    description: "Sass é uma linguagem de extensão do CSS que adiciona recursos como variáveis, mixins, funções e operações."
  },
  {
    id: "tailwind",
    label: "Tailwind",
    icon: <img src={tailwind} width={50} alt='tailwind'/>,
    description: "Tailwind é um framework CSS utility-first que fornece classes utilitárias para agilizar a estilização."
  },
  {
    id: "blade",
    label: "Blade",
    icon: <FaLaravel size={50} color="#eb4d43" />,
    description: "Blade é o engine de templates do Laravel que possibilita reuso de código e simplifica a inserção de PHP em HTML."
  },
  {
    id: "seo",
    label: "SEO",
    icon: <FaSearch size={50} color="#1273DE" />,
    description: "SEO é o conjunto de técnicas para alcançar bom posicionamento de páginas no Google e gerar tráfego orgânico."
  },
  {
    id: "responsividade",
    label: "Responsividade",
    icon: <FaLaptopCode size={50} color="#FB9E00" />,
    description: "Um site responsivo adapta sua estrutura e conteúdo de acordo com o tamanho da tela do usuário."
  }
];

export default skills;
