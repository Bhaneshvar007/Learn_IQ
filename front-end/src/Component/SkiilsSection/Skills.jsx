import React, { useState } from 'react'
import SkillsFilter from './SkillsFilter'
import Courses from './Courses'

const Skills = () => {

    const [activeTab, setActiveTab] = useState("All");


    return (
        <div>
            <SkillsFilter activeTab={activeTab} setActiveTab={setActiveTab} />
            <Courses activeTab={activeTab} />
        </div>
    )
}

export default Skills
