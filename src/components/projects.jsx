import ProjectImage1 from '@/images/projects/COD_Mod_250x250.png';
import ProjectImage2 from '@/images/projects/RayTracer_250x250.png';
import ProjectImage3 from '@/images/projects/FlappyBird_NN_762x692.png';
import ProjectImage4 from '@/images/projects/LazAR-Tag_Promo_250x250.png';
import ProjectImage5 from '@/images/projects/Midnight Harvest poster.png';
import ProjectImage6 from '@/images/projects/MineSweeper_250x189.png';
import ProjectImage7 from '@/images/projects/Codeweavers_Logo.png';
import ProjectImage8 from '@/images/projects/RefactaMasta_250x250.png';
import Image from "next/image";
import {FaCode} from "react-icons/fa";

const projects = [
    {
        name: 'FPS RPG',
        info: 'A zombies-like shooter with role-play elements',
        url: 'https://github.com/BlackRece/FPS-RPG',
        image: ProjectImage1,
    },
    {
        name: 'RayTracer',
        info: 'A memory managed app compatible for both windows and linux',
        url: 'https://github.com/BlackRece/RayTracer',
        image: ProjectImage2,
    },
    {
        name: 'Flappy Bird',
        info: 'Neural network project that runs multiple AI agents',
        url: 'https://github.com/BlackRece/FlappyBird_NN',
        image: ProjectImage3,
    },
    {
        name: 'LazAR Tag',
        info: 'An android laser tag game using Geolocation API',
        url: 'https://github.com/BlackRece/LazAR-Tag',
        image: ProjectImage4,
    },
    {
        name: 'Midnight Harvest',
        info: 'Collaborative game built from a customizable game engine',
        url: 'https://github.com/Nine-Byte-Warriors/midnight-harvest',
        image: ProjectImage5,
    },
    {
        name: 'MineSweeper',
        info: '3D minesweeper challenge',
        url: 'https://github.com/BlackRece/MineSweeper',
        image: ProjectImage6,
    },
];

export function ProjectGrid() {
    return (
        <div className="w-full">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                <FaCode className="h-6 w-6 flex-none" />
                <span className="ml-3">Recent Projects</span>
            </h2>

            <div className="mx-auto max-w-7xl">
                <div className="project-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col bg-white dark:bg-zinc-800 rounded-lg shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-0 overflow-hidden transform transition-transform duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                            style={{ height: '350px' }} // Increased container height
                        >
                            {/* Image Section with minimum height */}
                            <div className="min-h-[250px] w-full flex-1 relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    className="object-cover w-full h-full"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Text Section with consistent sizing */}
                            <div className="w-full p-3 bg-zinc-50 dark:bg-zinc-700 flex flex-col items-center justify-center text-center h-[100px]">
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
                                    {project.info}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}