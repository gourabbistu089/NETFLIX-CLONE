export function NetflixRegisterComponent() {
    return (
        // Container with padding, margin, background color, text color, and width settings
        <div className="container mx-auto mt-3 p-6 text-white w-3/4 text-center">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="mt-4 flex justify-center">
                {/* Input group */}
                <input 
                    type="email" 
                    className="form-control flex-1 px-4 py-2 text-lg border border-gray-300 rounded-l-md"
                    placeholder="Email address" 
                />
                <button className="btn bg-red-600 text-white px-6 py-2 text-lg rounded-r-md flex items-center">
                    Get Started
                    <span className="ml-2 bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    );
}
