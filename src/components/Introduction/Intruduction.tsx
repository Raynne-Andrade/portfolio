import SocialButton from '../Molecules/SocialButton';

const Introduction = () => {
    const avatar = require('../../assets/avatar.png') 
    return (
        <section>
            <div className='flex items-center mt-10 justify-center font-sans flex-col-reverse sm:flex-row'>
                <div className="my-12">
                    <img src={avatar} width='250px' />
                </div>
                <div className="m-6">
                    <p className='text-xl text-neutral-800 dark:text-white'> Olá, sou a </p>
                    <p className='typewriter text-4xl text-neutral-800 dark:text-white my-3'>  Raynne Andrade </p>
                    <p className='text-xl text-neutral-800 dark:text-white'> Desenvolvedora Front-End </p>
                    <div className='mt-12'> 
                        <SocialButton name="LinkedIn" url="#"/>
                        <SocialButton name="GitHub" url="#"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Introduction;