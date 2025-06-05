import React from 'react';
import { 
  SiReact, 
  SiPython, 
  SiJavascript, 
  SiTensorflow, 
  SiNodedotjs,
  SiSpringboot,
  SiMongodb
} from 'react-icons/si';
import { FiCpu } from 'react-icons/fi';

const SkillsCard = () => {
  const skills = [
    { icon: <SiReact className="text-[#61DAFB]" />, name: 'React' },
    { icon: <SiPython className="text-[#3776AB]" />, name: 'Python' },
    { icon: <SiJavascript className="text-[#F7DF1E]" />, name: 'JavaScript' },
    { icon: <SiTensorflow className="text-[#FF6F00]" />, name: 'TensorFlow' },
    { icon: <FiCpu className="text-[#FF4154]" />, name: 'AI/ML' },
    { icon: <SiNodedotjs className="text-[#339933]" />, name: 'Node.js' },
    { icon: <SiSpringboot className="text-[#6DB33F]" />, name: 'Spring Boot' },
    { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
  ];

  return (
    <div className="flex-shrink-0 w-[300px] p-4 rounded-xl">
      <div className="grid grid-cols-4 gap-x-16 gap-y-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/10 transition-all duration-300"
          >
            <div className="text-7xl transform transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Always learning
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard; 