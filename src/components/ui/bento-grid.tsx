import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  image,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  image: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-[#1c1c22] dark:shadow-none",
        className,
      )}

    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 group-hover/bento:opacity-40 transition duration-300"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="z-10 mt-auto">
        
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}
          <div className="mt-2 mb-2 text-3xl font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          <div className="  text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
