import React from 'react';

const AllTechonologies = ({ technologies }) => {

    console.log(technologies, "All technologies from technology")
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  mx-auto ">
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                    <div
                        key={tech.id}
                        className="w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md flex flex-col justify-between"
                    >
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="h-8 w-8 object-contain"
                                    />
                                </div>
                                {tech.badge && (
                                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-500">
                                        {tech.badge}
                                    </span>
                                )}
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-slate-900">
                                {tech.name}
                            </h3>
                            <p className="mb-6 text-sm leading-relaxed text-slate-500">
                                {tech.description}
                            </p>
                        </div>

                        <div>
                            <div className="mb-5 flex items-center justify-between text-xs font-medium text-slate-600">
                                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-700">
                                    {tech.category}
                                </span>
                                <span>{tech.difficulty}</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-amber-400">★</span>
                                    <span className="font-semibold text-slate-800">{tech.rating}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => onAdd?.(tech)}
                                className="w-full rounded-xl bg-[#0b0f19] py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 active:scale-[0.99]"
                            >
                                Add to Stack
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="lg:col-span-3 border border-gray-100 bg-white p-6 rounded-2xl shadow-sm h-fit">
                <h2 className="text-xl font-bold text-slate-900">Your stack</h2>
            </div>
        </div>
    );
};

export default AllTechonologies;