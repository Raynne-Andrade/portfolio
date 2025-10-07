import { useState } from "react";
import skills from "../../content/skills";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const activeSkill = skills.find((skill) => skill.id === selectedSkill);


  return (
    <section
      className="my-10 sm:flex min-h-[200px] justify-center p-5 items-center flex-wrap"
      id="skills"
    >
      <div className="text-white min-w-full sm:flex items-center flex-col">
        <h2 className="text-black dark:text-white font-semibold text-4xl">
          {" "}
          {"< Habilidades />"}{" "}
        </h2>
        <p className="text-pink-500 font-semibold text-4xl mb-20 leading-6">
          {" "}
          ______{" "}
        </p>
      </div>
      <div className="my-10 sm:flex justify-center items-center flex-row ">
        <div className="w-full justify-between mb-5 sm:w-[400px]">
          {skills.map((skill) => {
            return (
              <button
                key={skill.id}
                className="bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2"
                onMouseEnter={() => setSelectedSkill(skill.id)}
                onMouseLeave={() => setSelectedSkill(null)}
              >
                {skill.icon}
              </button>
            );
          })}
        </div>
        <div className="max-w-lg w-2/4">
          {activeSkill && (
            <h3
              className={`text-2xl font-bold mb-8 text-gray-800 dark:text-white block text-center transition-opacity duration-300 ${
                activeSkill ? "opacity-100" : "opacity-50"
              }`}
            >
              {activeSkill.label}
            </h3>
          )}

          <p
            className={` text-gray-800 dark:text-white block text-center transition-opacity duration-300 ${
              activeSkill ? "opacity-100" : "opacity-50"
            }`}
          >
            {activeSkill
              ? activeSkill.description
              : "Passe o mouse sobre as habilidades para entender um pouco mais sobre cada uma delas."}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Skill;
