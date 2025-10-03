const AboutMe = () => {

    const raynne = require("../assets/Raynne.png")

    return (
        <section className="flex justify-center bg-pink-100 dark:bg-neutral-800 p-5" id="aboutMe">
            <div className="flex content-center gap-4 overflow-hidden flex-wrap md:flex-nowrap">
                <div>
                    <img src={raynne} width={"300px"} />
                </div>
                <div className="text-neutral-700 dark:text-white self-center text-lg font-normal
                  max-w-4xl leading-7">
                    <h3 className="text-3xl font-bold text-neutral-800 mb-4 dark:text-white ">
                        Frontend e backend para soluções digitais de qualidade. 
                    </h3>
                    <p> Eu crio sites para pequenas empresas e empreendedores que querem crescer e se destacar online. Sou especialista em Frontend, com domínio de 
                        <b className="text-pink-500 italic text-">  HTML, CSS e JavaScript </b>, além de 
                        <b className="text-pink-500 italic text-base"> experiência em React, Vue.js, TypeScript, Nuxt, Storybook, Web Components, design responsivo e web mobile </b>.
                    </p>
                    <p> Atualmente, estou expandindo meus conhecimentos em backend, explorando 
                        <b className="text-pink-500 italic text-base"> Java, Python e PHP </b>, para oferecer soluções ainda mais completas e robustas. 
                    </p>
                    <p> Sou entusiasta de tecnologia, sempre em busca de novas tendências que possam agregar valor aos projetos. Fora do código, adoro livros clichês, gatinhos fofos e café ☕🐱📚. </p>

                </div>
            </div>
        </section>
    )
}

export default AboutMe;
