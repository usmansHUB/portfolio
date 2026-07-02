"use client";
import { cn } from "@/lib/utils";

export function ImageRevealList({
  items,
  className
}) {
  return (
    <div className={cn("relative w-full mx-auto", className)}>
      <ul
        className="panel list-none p-2.5">
        {items.map((item) => (
          <li key={item.id} className="relative">
            <a
              href={item.href || "#"}
              target={item.href && item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href && item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center p-4.5 text-foreground/80 no-underline text-[15px] font-medium rounded-xl transition-all duration-200 hover:bg-foreground/5 hover:text-accent hover:translate-x-1">
              <img
                src={item.image}
                alt={item.title}
                className="absolute z-[100] w-[140px] h-[90px] rounded-lg object-cover shadow-2xl pointer-events-none opacity-0 scale-75 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                           left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                           group-hover:opacity-100 group-hover:scale-100 group-hover:-top-[80px] group-hover:-translate-y-0
                           md:left-auto md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:-left-[160px]
                           md:group-hover:top-1/2 md:group-hover:-translate-y-1/2 md:group-hover:-left-[150px]" />
              <span
                className="text-muted-foreground/60 text-[13px] mr-4 min-w-[24px] font-normal">
                {item.number}
              </span>
              {item.title}
              {item.subtitle && (
                <span
                  className="ml-auto text-muted-foreground text-[13px] font-normal text-right shrink-0 ml-4">
                  {item.subtitle}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageRevealList;

