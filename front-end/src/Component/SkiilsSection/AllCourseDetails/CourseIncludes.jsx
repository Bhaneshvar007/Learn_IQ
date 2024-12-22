import { useParams } from "react-router-dom";
import Context from "../../../../context";
import { useContext } from "react";

const CourseIncludes = () => {


    let { id } = useParams();

    let { courseData } = useContext(Context);
    let filterData = courseData.find((data, ind) => {
        return ind == id;
    });


    const topics = [
        `${filterData?.title}: Master the art of content creation, synthesize complex information, and enhance your learning experience with effective prompt engineering!`,
        "Productivity: Learn to optimize your time, set goals, and develop an efficient schedule to achieve more in less time!",
        "Soft Skills: Develop your communication, leadership, problem-solving, and interpersonal skills with personalized feedback and growth strategies!",
        `${filterData?.title}: Create impactful presentations, turn ideas into engaging content, and automate your creative processes for faster results!`,
        `${filterData?.category}: Automate repetitive tasks, generate high-quality copy, and integrate seamlessly with tools like Google Sheets/Excel for efficient workflow!`,
        "Branding: Build a memorable brand identity, design visuals, and craft content that resonates with your audience to establish a strong online presence!",
        "Business: Improve decision-making with data-driven insights, streamline your operations, and automate key processes to enhance business performance!",
        "Midjourney: Harness the power of creative prompts, parameters, and modifiers to generate stunning visuals that capture your unique style!",
        `${filterData?.description}: Transform your creativity into valuable projects, generate innovative ideas, and scale your work efficiently with AI-powered assistance!`,
        "Marketing: Create targeted content, craft compelling campaigns, and capitalize on trends to boost engagement and drive results!",
        `${filterData?.title}: Generate high-quality AI-driven speech for various applications, from voiceovers to personalized messages, and even clone your voice!`,
        `${filterData?.title}: Enhance and animate your images dynamically, create custom visuals at scale, and bring your creative ideas to life with ease!`,
        `${filterData?.title}: Streamline video creation with AI tools, craft unique compositions for all types of projects, and save time with an optimized creative workflow!`,
        `DALL-E 3: Create visually striking images from text prompts, customize visuals with inpainting and outpainting, and push the boundaries of your creative work!`,
        `Multimodal: Combine multiple AI tools to craft rich, immersive content, and deliver high-quality results that would typically require a full team to produce!`,
        "Coding: Unlock the power of AI in coding by combining programming fundamentals with AI-driven solutions for faster debugging, algorithm creation, and documentation!"
    ];


    return (

        <div className="min-h-screen bg-gray-100 p-6">
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-4xl bg-white shadow-md rounded-lg p-6">
                    {/* Header Section */}
                    <h2 className="text-2xl font-bold mb-4">What you'll learn in {filterData?.title}</h2>

                    {/* Topics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {topics.map((topic, index) => (
                            <div key={index} className="flex items-start space-x-2">
                                <span className="text-green-500 font-semibold">✓</span>
                                <p className="text-gray-700 text-sm">{topic}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};


export default CourseIncludes