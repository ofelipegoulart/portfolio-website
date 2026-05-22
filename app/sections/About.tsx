import React from 'react';
import { Database, Monitor, Sparkles } from '../components/icons';

const featureIcons = [Monitor, Database, Sparkles];

const featureStyles = [
    'bg-blue-600/10 text-[#0b78ff] border border-blue-100/60',
    'bg-emerald-500/10 text-emerald-500 border border-emerald-200/60',
    'bg-violet-500/10 text-violet-500 border border-violet-200/60'
];

export default function About({ t }: { t: any }) {
    return (
        <section
            id="about_section"
            className="w-full px-4 md:px-12 py-16 scroll-mt-20 bg-[#0d1f28] text-slate-100 sm:px-8 lg:px-10"
        >
            <div className="space-y-4 text-center lg:text-left md:mx-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0b78ff] bg-white/10 px-3 py-1 border border-white/10">
                    {t.about.subtitle}
                </span>

                <h2 className="text-4xl font-extrabold tracking-tight text-white my-4">
                    {t.about.title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:mx-8 md:grid-cols-12 gap-8 items-stretch mt-8">


                <div className="md:col-span-7 flex flex-col justify-between space-y-8">


                    <div className="space-y-6 text-slate-100 text-lg leading-relaxed font-normal">
                        <p>{t.about.p1}</p>
                        <p>{t.about.p2}</p>
                    </div>


                    <div className="
                        bg-white/5
                        border border-white/10
                        p-6
                        flex flex-col space-y-4 text-center lg:text-left
                    ">
                        {t.about.features.map((feature: any, index: number) => {
                            const Icon = featureIcons[index] || Monitor;
                            const style = featureStyles[index] || 'bg-blue-600/10 text-[#0b78ff]';

                            return (
                                <div
                                    key={feature.title}
                                    className="
                                        flex items-center space-x-3
                                        pb-4 border-b border-white/10
                                        last:border-b-0 last:pb-0
                                    "
                                >
                                    <div className={`p-3 ${style}`}>
                                        <Icon size={20} />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-base text-white">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-slate-300 mt-1">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div className="md:col-span-5 flex items-stretch">
                    <div className="relative w-full h-full min-h-[400px] border border-white/10 bg-white/5 overflow-hidden group">
                        <img
                            src="/profile-photo.jpeg"
                            alt="Felipe Goulart"
                            className="absolute inset-0 object-cover w-full h-full opacity-90 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
                        />

                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none" />                    </div>
                </div>

            </div>
        </section>
    );
}