import ProjectImage1 from '@/images/projects/COD_Mod_250x250.png';
import ProjectImage2 from '@/images/projects/Codeweavers_Logo.png';
import ProjectImage3 from '@/images/projects/FlappyBird_NN_762x692.png';
import ProjectImage4 from '@/images/projects/LazAR-Tag_Promo_250x250.png';
import ProjectImage5 from '@/images/projects/Midnight Harvest poster.png';
import ProjectImage6 from '@/images/projects/MineSweeper_250x189.png';
import ProjectImage7 from '@/images/projects/RayTracer_250x250.png';
import ProjectImage8 from '@/images/projects/RefactaMasta_250x250.png';
import Image from "next/image";

const projects = [
    {
        name: 'FPS RPG',
        info: 'Brief project description',
        url: 'https://github.com/BlackRece/FPS-RPG',
        image: ProjectImage1,
    },
    {
        name: 'Project 2',
        info: 'Brief project description',
        url: 'https://github.com/user/project2',
        image: ProjectImage2,
    },
    {
        name: 'Flappy Bird - Neural Network',
        info: 'Brief project description',
        url: 'https://github.com/BlackRece/FlappyBird_NN',
        image: ProjectImage3,
    },
    {
        name: 'LazAR Tag',
        info: 'Brief project description',
        url: 'https://github.com/BlackRece/LazAR-Tag',
        image: ProjectImage4,
    },
    {
        name: 'Midnight Harvest',
        info: 'Brief project description',
        url: 'https://github.com/Nine-Byte-Warriors/midnight-harvest',
        image: ProjectImage5,
    },
    {
        name: 'MineSweeper',
        info: 'Brief project description',
        url: 'https://github.com/BlackRece/MineSweeper',
        image: ProjectImage6,
    },
];

export function ProjectGrid() {
    // Debugging: Log imported images
    console.log('Project Images:', {
        ProjectImage1,
        ProjectImage2,
        ProjectImage3,
        ProjectImage4,
        ProjectImage5,
        ProjectImage6,
    });

    return (
        <div className="w-full"> {/* Parent container */}
            {/* Centered grid with max-width */}
            <div className="mx-auto max-w-7xl">
                <div className="project-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-between bg-white dark:bg-zinc-800 rounded-lg shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-0 overflow-hidden transform transition-transform duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                            style={{ height: '300px' }} // Set a fixed height for all buttons
                        >
                            {/* Image Section (80% of the button height) */}
                            <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title Section (20% of the button height) */}
                            <div className="w-full p-4 bg-zinc-50 dark:bg-zinc-700 flex flex-col items-center justify-center">
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                    {project.name}
                                </h3>
                                <br />
                                <p>{project.info}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}