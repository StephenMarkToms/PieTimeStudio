import type { CSSProperties, ReactElement, ReactNode } from "react";

function textFrom(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textFrom).join("");
  if (typeof node === "object" && "props" in node) {
    return textFrom((node as ReactElement<{ children?: ReactNode }>).props.children);
  }
  return "";
}

type InkTag = "h1" | "h2" | "h3" | "p";

export function InkText({
  as,
  className,
  children,
  base = 80,
}: {
  as: InkTag;
  className?: string;
  children: ReactNode;
  base?: number;
}) {
  const words = textFrom(children).trim().split(/\s+/).filter(Boolean);
  const Tag = as;
  const style = {
    "--ink-count": words.length,
    "--ink-base": `${base}ms`,
  } as CSSProperties;

  return (
    <Tag className={className ? `ink-words ${className}` : "ink-words"} style={style}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          {index > 0 ? " " : null}
          <span className="ink-word" style={{ "--ink": index } as CSSProperties}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
