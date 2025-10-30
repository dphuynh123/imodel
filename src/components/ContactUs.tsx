import React from "react";

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Section */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>

                    <div className="space-y-3 text-gray-700">
                        <p>
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:example@shadcnblocks.com"
                                className="text-blue-600 hover:underline"
                            >
                                dphuynh123@gmail.com
                            </a>
                        </p>
                        <p>
                            <strong>Phone / Zalo:</strong> 0917642655
                        </p>
                        <p>
                            <strong>Address:</strong> HCMC, Vietnam
                        </p>
                        <p>
                            <strong>Hours:</strong> 24/7
                        </p>
                    </div>
                </div>

                {/* Right Section - Form */}
                <form className="space-y-4 bg-transparent">
                    <img
                        src={`${import.meta.env.BASE_URL}model-owner-contact.png`}
                        alt="ForLabJP Logo"
                        width={400}
                        height={200}
                        className="rounded-md"
                    />
                </form>
            </div>
        </div>
    );
}
