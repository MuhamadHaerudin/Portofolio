"use client";

import { useEffect, useState } from "react";

export function TypeWriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setDeleting(true);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      deleting ? 35 : 65,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, texts]);

  return (
    <span className="whitespace-pre-wrap">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] animate-pulse bg-blue-400 align-baseline" />
    </span>
  );
}