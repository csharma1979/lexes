import React from 'react';
import { ChevronDown } from 'lucide-react';
import { CurriculumModule } from '../../../types/course';

interface CourseCurriculumProps {
  modules: CurriculumModule[];
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ modules }) => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Course Curriculum</h2>
      <div className="space-y-6">
        {modules.map((module, index) => (
          <details key={index} className="group bg-gray-50 rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-6">
              <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
              <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <ul className="space-y-3">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#056daa] rounded-full mr-3" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default CourseCurriculum;