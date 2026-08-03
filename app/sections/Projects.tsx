import React from 'react';
import Link from 'next/link';
import { ExternalLink, Medical, Orkut, Gamepad } from '../components/icons';
import { Project, translations as t } from '../lib/translations';

const accentColors: Record<string, string> = {
    [Project.GenomaCOVIDSC]: '#06b6d4',
    [Project.PersonalPortfolio]: '#0b78ff',
    [Project.OrkutClone]: '#ec4899',
};

export default function Projects({ t }: { t: any }) {
    return (
        <section
            id="projects_section"
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
                    hover:bg-white/5
                    px-3 py-1
                    border border-white/10
                ">
                    {t.projects.subtitle}
                </span>

                <h2 className="text-4xl font-extrabold tracking-tight text-white mt-4">
                    {t.projects.title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:mx-8 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.projects.items.map((item: any, idx: number) => {
                  const accent = accentColors[item.project] || '#0b78ff';
                  return (
                    <div
                        key={idx}

                        className="bg-white/10
                            hover:bg-white/5
                            transition-all duration-300
                            border border-white/10
                            p-6
                            shadow-xl shadow-black/20
                            relative"
                        style={{ '--accent': accent } as React.CSSProperties}
                    >
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div
                                    className="
                                        w-10 h-10
                                        rounded-none
                                        flex items-center justify-center
                                        transition-colors
                                        hover:opacity-80
                                    "
                                    style={{ backgroundColor: 'var(--accent)' }}
                                >
                                    {item.project === Project.GenomaCOVIDSC ? (
                                        <Medical size={20} className="text-white" />
                                    ) : (item.project === Project.PersonalPortfolio ? (
                                        <Gamepad size={20} className="text-white" />
                                    ) : (
                                        <Orkut size={20} className="text-white" />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 space-y-4 text-center lg:text-left">
                            <div className="flex flex-wrap gap-1.5">
                                {item.tags.map((tag: string, tIdx: number) => (
                                    <span
                                        key={tIdx}
                                        className="
                                            text-[10px] font-semibold
                                            px-2 py-1
                                            bg-white/5
                                            border border-(--accent)/20
                                            text-(--accent)
                                            hover:bg-white/10
                                            transition-colors
                                            rounded-none
                                        "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-bold">
                                {item.link ? (
                                    <Link
                                        href={item.link || ""}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            text-(--accent)
                                            hover:underline
                                            hover:opacity-80
                                            flex items-center gap-1
                                            transition-opacity
                                        "
                                    >
                                        {item.demoLabel || t.projects.demo}
                                        <ExternalLink size={12} />
                                    </Link>
                                ) : (
                                    <span className="text-slate-400">
                                        {t.projects.comingSoon}
                                    </span>
                                )}

                                {item.linkCode ? (
                                    <Link
                                        href={item.linkCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            text-slate-400
                                            hover:text-(--accent)
                                            hover:underline
                                            flex items-center gap-1
                                            transition-colors
                                        "
                                    >
                                        {item.codeLabel || t.projects.code}
                                    </Link>
                                ) : (
                                    <span className="text-slate-500">
                                        {item.codeLabel || t.projects.code}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                  );
                })}
            </div>
        </section>
    );
}