const CourseIncludes = () => {
    const topics = [
        "ChatGPT: Create content, synthesize information, and learn faster than ever with effective prompt engineering!",
        "Productivity: Achieve your goals faster with ChatGPT, manage your time, prioritize tasks, and create an optimized daily schedule!",
        "Soft Skills: Improve your communication, leadership, problem-solving, and social skills with personalized ChatGPT feedback!",
        "AI Video Tools: Create an AI avatar that transforms scripts into presentations and quickly generate social media content!",
        "AI Writing Tools: Automate writing tasks, generate effective copy, and integrate with Google Sheets/Excel!",
        "Branding: Develop a visual identity, design logos, and generate content to establish a strong online presence!",
        "Business: Streamline your workflow, automate repetitive tasks, and gain insights that help you make data-driven decisions for your business!",
        "Midjourney: Use prompts, parameters, and modifiers to create amazing images that showcase your personal style and creativity!",
        "ChatGPT: Turn your creativity into paid work, generate fresh ideas, reach new audiences, and scale your projects!",
        "Marketing: Generate targeted content with ChatGPT, capitalize on trends, create ads, newsletters, and media campaigns!",
        "AI Voice Tools: Easily create AI-generated speech for any use case and even clone your own voice entirely!",
        "AI Photo Tools: Add motion to images, dynamically enhance image aesthetics, and create custom images in bulk!",
        "AI Music Tools: Create unique compositions for any types of video and save time with a streamlined creative process.",
        "DALL-E 3: Create amazing photos from prompts, fill in or remove elements of images using inpainting and outpainting techniques!",
        "Multimodal: Combine multiple AI tools to create immersive and engaging content that would have previously taken an entire team to create!",
        "Coding: Combine the power of ChatGPT with programming fundamentals, algorithms, debugging, and documentation!",
    ];

    return (

        <div className="min-h-screen bg-gray-100 p-6">
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-4xl bg-white shadow-md rounded-lg p-6">
                    {/* Header Section */}
                    <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>

                    {/* Topics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {topics.map((topic, index) => (
                            <div key={index} className="flex items-start space-x-2">
                                <span className="text-green-500">✓</span>
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