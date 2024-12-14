import React from 'react';
import RightDemoForm from './RightDemoForm';

const UdemyBusiness = () => {


    let imgCon = [
        'https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals',
        'https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals',
        'https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals',
        'https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals',
        'https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals',
        'https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals',
        'https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals',
        'https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals',
    ]



    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">

            <main className="max-w-7xl mx-auto w-full px-4 mt-8 flex gap-5">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Get your demo</h2>
                    <p className="text-lg mb-6">Tell us your needs and we’ll start on a custom plan to drive results.</p>

                    {/* Left Content */}
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                            Train your entire workforce with over 27,000+ courses in 15 languages
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                            Prep employees for over 200 industry-recognized certification exams
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                            Develop highly skilled tech teams in risk-free practice environments
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                            Identify emerging skills gaps, learning trends, and industry benchmarks
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                            Integrate content with your existing learning management system
                        </li>
                    </ul>

                    <div className="mt-6">
                        <h3 className="font-bold mb-2">Trusted by over 16,000 companies:</h3>
                        <div className="flex flex-wrap gap-4">
                            {imgCon.map((img, ind) => (
                                <div key={ind} className="bg-gray-200 p-4 rounded-md text-center text-gray-700">
                                    <img src={img} alt="img_name" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <RightDemoForm className='' />

            </main>
        </div>
    );
};

export default UdemyBusiness;
