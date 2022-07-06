import { EachProject } from './EachProject';
import { FolderProject } from './FolderProject';
import './Projects.css'

export const Projects = () => {
    let isLeft = true;
    let projects = [
        {
            projectImage: require('../assets/projects/Aurora.jpg'),
            projectTitle: 'Aurora',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['Flutter', 'NodeJS', 'Express', 'MongoDB', 'Mongoose', 'Hive', 'Wave'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/CovidTracker.jpg'),
            projectTitle: 'Covid Tracker',
            projectDescription: 'A feature rich telegram bot to help ease some tasks on telegram. It has features like web-screen, QR generator, covid stat tracker, Crypto price checker and much more.',
            projectTechStack: ['NodeJS', 'Telegram Bot API', 'Dicebear Avatars', 'Coingecko API'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://t.me/DreamIntelligence/63'
        },
        {
            projectImage: require('../assets/projects/OutOfPocket.jpg'),
            projectTitle: 'Out Of Pocket',
            projectDescription: 'An aesthetic minimal expense tracker helping you manage your budget along with expenses. It has graphs to visualize your spending and much more helpful features.',
            projectTechStack: ['Flutter', 'Hive', 'Flutter Icons', 'Flutter Draw Graphs'],  
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/MenenArts.jpg'),
            projectTitle: 'Menen Arts',
            projectDescription: 'A fashion illustration app rich with essential features to design, color, and export custom fashion clothings along with lots of presets to get your design started. Made for Menen Arts Start Up.',
            projectTechStack: ['Flutter', 'Painter', 'Intl', 'AdMob', 'Font Awesome', 'IonIcons'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/Jacosta.jpg'),
            projectTitle: 'Jacosta Bot',
            projectDescription: 'A feature rich telegram bot to help ease some tasks on telegram. It has features like web-screen, QR generator, covid stat tracker, Crypto price checker and much more.',
            projectTechStack: ['NodeJS', 'Telegram Bot API', 'Dicebear Avatars', 'Coingecko API'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/DoloresAbernathy.jpg'),
            projectTitle: 'Dolores Abernathy',
            projectDescription: 'A feature rich telegram bot to help ease some tasks on telegram. It has features like web-screen, QR generator, covid stat tracker, Crypto price checker and much more.',
            projectTechStack: ['NodeJS', 'Telegram Bot API', 'Dicebear Avatars', 'Coingecko API'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://t.me/DoloresAbernathy7'
        },
        {
            projectImage: require('../assets/projects/EthioDatasets.png'),
            projectTitle: 'EthioDatasets',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['ReactJS', 'React Hooks', 'TMDB API', 'Vercel'],
            githubRepo: ' ',
            otherLink: ' '
        },
        {
            projectImage: require('../assets/projects/WordsOfStrangers.png'),
            projectTitle: 'Words Of Strangers',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Mongoose', 'Vercel'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/TMDB.png'),
            projectTitle: 'The Movie Database',
            projectDescription: 'A new modern aesthetic multipurpose all-in-one social media. Equipped with a built in music player, crypto wallet and so much more everyday use apps. All integrated seamlessly.',
            projectTechStack: ['ReactJS', 'React Hooks', 'TMDB API', 'Vercel'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/BoxSimulation.jpg'),
            projectTitle: 'Boxes Simulation',
            projectDescription: 'A fashion illustration app rich with essential features to design, color, and export custom fashion clothings along with lots of presets to get your design started. Made for Menen Arts Start Up.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            projectImage: require('../assets/projects/IAmNinja.jpg'),
            projectTitle: 'I Am Ninja',
            projectDescription: 'A zombie killing 2D survival game built using my own game engine. Complete with animations, music, sounds and randomly spawning zombies out to get your brain.',
            projectTechStack: ['Python', 'Eunoia'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
    ]
    let folderProjects = [
        {
            // projectImage: require('../assets/projects/OutOfPocket.png'),
            projectTitle: 'Astrophile',
            projectDescription: 'A minimal mobile app for space and photograph enthusiasts to search and browse through NASA\'s Astronomy Picture Of The Day gallery along with a brief explanation written by a professional astronomer. ',
            projectTechStack: ['Flutter', 'APOD API'],
            githubRepo: 'https://github.com/dagmawibabi/Astrophile',
            otherLink: 'https://t.me/DreamIntelligence/72'
        },
        {
            // projectImage: require('../assets/projects/Aurora.png'),
            projectTitle: 'Lexicon',
            projectDescription: 'An aesthetic minimal offline English dictionary based on the Webster Dictionary dataset. With word suggestions and different filters of searching for a specific word.',
            projectTechStack: ['Flutter', 'Webster Word Dataset'],
            githubRepo: 'https://github.com/dagmawibabi/Lexicon',
            otherLink: 'https://t.me/DreamIntelligence/99'
        },
        {
            // projectImage: require('../assets/projects/WordsOfStrangers.png'),
            projectTitle: 'Cyberpunk Chat',
            projectDescription: 'A unique futuristic cyberpunk themed chat app with a news feed populated entirely by bots scraping content from different sub-reddits and APIs complete with a crypto price trackers.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/CyberpunkChat',
            otherLink: 'https://t.me/DreamIntelligence/87'
        },
        {
            // projectImage: require('../assets/projects/Jacosta.png'),
            projectTitle: 'Beautiful OS',
            projectDescription: 'A feature rich telegram bot to help ease some tasks on telegram. It has features like web-screen, QR generator, covid stat tracker, Crypto price checker and much more.',
            projectTechStack: ['Flutter', 'NodeJS', 'MongoDB'],
            githubRepo: 'https://github.com/dagmawibabi/portfolio',
            otherLink: 'https://tmdb-dagmawibabi.vercel.app/'
        },
        {
            // projectImage: require('../assets/projects/MenenArts.png'),
            projectTitle: 'Crypto Wallet UI',
            projectDescription: 'A modern cryptocurrency wallet UI with a functional built in crypto price tracker and a QR scanner, complete with both light and dark mode.',
            projectTechStack: ['Flutter', 'QR Scanner'],
            githubRepo: 'https://github.com/dagmawibabi/CryptoExchangeWallet',
            otherLink: 'https://t.me/DreamIntelligence/117'
        },
        {
            // projectImage: require('../assets/projects/MenenArts.png'),
            projectTitle: 'Eunoia',
            projectDescription: 'A 2D game engine built on top of pygame. With features like sound, animation and particle system.',
            projectTechStack: ['Python', 'Pygame'],
            githubRepo: 'https://github.com/dagmawibabi/PythonGameEngine',
            otherLink: ' '
        },
        
    ]
    return (
        <div id='projects' className='sectionContainer projectContainer'>
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <h2 className='sectionTitle' style={{marginRight: '40px'}}> <span className='linkText'> 03. </span> Projects </h2>
                <div className='horizontalLine' style={{width: '60%'}}></div>
            </div>
            <br></br>
            <div>
                {
                    projects.map((project, index) => {
                        isLeft = !isLeft;
                        return <EachProject projectALignment={isLeft} projectImage={project.projectImage} projectTitle={project.projectTitle} projectDescription={project.projectDescription} projectTechStack={project.projectTechStack} projectGithubRepo={project.githubRepo} projectOtherLink={project.otherLink} key={index} />
                    })
                }
            </div>
            <div className='folderProjects'>
                <h1 style={{color: 'var(--gentle-blue)', marginBottom: '20px', marginLeft: '-55px'}}> Other Noteworthy Projects </h1>
                {/* <span className='linkText' style={{fontFamily: "'Fira Code', monospace"}}> View the archive </span> */}
                <div className='folderProjectsGrid'>
                    {
                        folderProjects.map((project, index) => {
                            return <FolderProject projectImage={project.projectImage} projectTitle={project.projectTitle} projectDescription={project.projectDescription} projectTechStack={project.projectTechStack} projectGithubRepo={project.githubRepo} projectOtherLink={project.otherLink} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}