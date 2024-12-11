import React from 'react'

const RightDemoForm = () => {

    let imgCon  = [
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
        <div>
            {/* Right Form */}
            <form className="bg-white shadow-md p-6 rounded-lg space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="First Name *"
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        placeholder="Last Name *"
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>
                <input
                    type="email"
                    placeholder="Work Email *"
                    className="border border-gray-300 p-2 rounded w-full"
                />
                <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="border border-gray-300 p-2 rounded w-full"
                />
                <select
                    className="border border-gray-300 p-2 rounded w-full"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Where are you located? *
                    </option>
                    <option>USA</option>
                    <option>India</option>
                    <option>Other</option>
                </select>
                <input
                    type="text"
                    placeholder="Company Name *"
                    className="border border-gray-300 p-2 rounded w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                    <select
                        className="border border-gray-300 p-2 rounded w-full"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Company Size *
                        </option>
                        <option>1-10</option>
                        <option>11-50</option>
                    </select>
                    <select
                        className="border border-gray-300 p-2 rounded w-full"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Number of learners *
                        </option>
                        <option>1-10</option>
                        <option>10-50</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Job Title *"
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                    <select
                        className="border border-gray-300 p-2 rounded w-full"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Job Level *
                        </option>
                        <option>Junior</option>
                        <option>Senior</option>
                    </select>
                </div>
                <textarea
                    placeholder="What are your organization's training needs? (Optional)"
                    className="border border-gray-300 p-2 rounded w-full"
                ></textarea>
                <button
                    type="submit"
                    className="bg-purple-600 text-white font-bold p-2 rounded w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default RightDemoForm
