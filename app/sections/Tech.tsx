import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Cpu, Database } from '../components/icons';

interface Skill {
    name: string;
    level: number;
    color: string;
}

export default function Tech({ t, frontend, backend, tools }: {
    t: any;
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
}) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [lockedMax, setLockedMax] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const updateProgress = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= windowHeight) {
                setScrollProgress(0);
                setLockedMax(false);
                return;
            }

            if (rect.bottom <= 0) {
                setScrollProgress(1);
                setLockedMax(true);
                return;
            }

            if (lockedMax) return;

            const progress = Math.min(
                Math.max((windowHeight - rect.top) / windowHeight, 0),
                1
            );

            if (progress >= 1) {
                setScrollProgress(1);
                setLockedMax(true);
            } else {
                setScrollProgress(progress);
            }
        };

        const onScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateProgress);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [lockedMax]);

    return (
        <section
            id="tech_section"
            ref={sectionRef}
            className="
                py-16 scroll-mt-20
                bg-[#0d1f28]
                text-slate-100
                px-6 sm:px-8 lg:px-10
                
            "
        >
            <div className="space-y-4 text-center lg:text-left mb-12 md:mx-8">
                <span className="
                    text-xs font-bold uppercase tracking-widest
                    text-[#0b78ff]
                    bg-white/10
                    px-3 py-1
                    border border-white/10
                ">
                    {t.tech.subtitle}
                </span>

                <h2 className="text-4xl font-extrabold tracking-tight text-white mt-4">
                    {t.tech.title}
                </h2>

                <p className="text-sm text-slate-200">
                    {t.tech.experienceLevel}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:mx-8">

                {[
                    { label: t.tech.frontend, icon: Monitor, color: 'bg-blue-600', skills: frontend },
                    { label: t.tech.backend, icon: Cpu, color: 'bg-emerald-600', skills: backend },
                    { label: t.tech.tools, icon: Database, color: 'bg-violet-600', skills: tools }
                ].map(({ label, icon: Icon, color, skills }, cardIndex) => (
                    <div
                        key={cardIndex}
                        className="
                            bg-white/10
                            hover:bg-white/5
                            transition-all duration-300
                            border border-white/10
                            p-6
                            shadow-xl shadow-black/20
                            relative
                        "
                    >
                        <div className="absolute top-4 right-4 text-white/20 md:hidden">
                            <Icon size={24} />
                        </div>

                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <Icon size={24} className="hidden md:block" />
                            {label}
                        </h3>

                        <div className="space-y-5">
                            {skills.map((skill, index) => {
                                const width = Math.round(scrollProgress * skill.level);

                                return (
                                    <div key={index} className="space-y-1.5">
                                        <div className="flex justify-between text-xs font-semibold text-slate-200">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>

                                        <div className="w-full h-2.5 bg-white/10 overflow-hidden">
                                            <div
                                                className={`${skill.color} h-full transition-all duration-200`}
                                                style={{ width: `${width}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}