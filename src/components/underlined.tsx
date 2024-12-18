import type { ComponentPropsWithoutRef, ElementType } from "react";

/**
 * A generic component which has an underline effect on hover.
 * You can use the `"group"` class in a parent element so that the underline effect is
 * visible whenever the parent is hovered. By default the underline effect is visible
 * only the element itself is hovered.
 */
export function Underlined<T extends ElementType>({
  children,
  tag,
  color = "black",
  ...props
}: {
  children: React.ReactNode;
  tag?: T;
  color?: string;
} & ComponentPropsWithoutRef<T>) {
  const Tag = tag ?? "div";
  return (
    <Tag className="group relative" {...props}>
      {children}
      {/* Fajny underline effect od ChatGPT, nie wiem jak działa ale działa */}
      <div
        className={`absolute h-[1px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bg-${color}`}
      ></div>
    </Tag>
  );
}
