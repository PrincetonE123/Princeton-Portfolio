"use client";

import { useEffect, useMemo, useState } from "react";
import { ALL_TAGS, PINNED_REPOS, REPO_TAGS } from "@/data/projectsMeta";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  pushed_at: string;
};

function isPinned(name: string) {
  return PINNED_REPOS.includes(name);
}

function getTags(name: string) {
  return REPO_TAGS[name] ?? [];
}

export default function ProjectGrid() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string>("All");

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const visibleRepos = useMemo(() => {
    const withMeta = repos.map((r) => ({
      ...r,
      _pinned: isPinned(r.name),
      _tags: getTags(r.name),
    }));

    withMeta.sort((a, b) => {
      if (a._pinned && !b._pinned) return -1;
      if (!a._pinned && b._pinned) return 1;
      return 0;
    });

    if (selected === "All") return withMeta;

    if (selected === "Pinned") {
      return withMeta.filter((r) => r._pinned);
    }

    return withMeta.filter((r) => r._tags.includes(selected));
  }, [repos, selected]);

  if (loading) return <p>Loading projects...</p>;

  return (
    <section id="projects" className="mt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="border rounded p-2"
        >
          {ALL_TAGS.map((t: string) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {visibleRepos.length === 0 ? (
        <p className="text-gray-600">No projects match that filter yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {visibleRepos.map((repo: any) => (
            <div
              key={repo.id}
              className={`border rounded-xl p-5 transition 
                hover:shadow-lg hover:-translate-y-1
                flex flex-col justify-between
                ${repo._pinned ? "border-blue-500" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg tracking-tight">
                  {repo.name}
                </h3>
                {repo._pinned && (
                  <span
                    className="text-xs px-2 py-1 rounded-full 
                              border border-blue-500 text-blue-600"
                  >
                    Pinned
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 mt-1 mb-3">
                {repo.description || "No description yet."}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {repo._tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full border bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm mt-4">
                <span>{repo.language || "—"}</span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="font-medium text-blue-600 hover:underline"
                >
                  View Repo →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
