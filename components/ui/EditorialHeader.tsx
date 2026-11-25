import React from "react";

interface EditorialHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <div className="mb-12 sm:mb-16 max-w-3xl">
      <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#6685FF] mb-3">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.025em] leading-[1.15] text-[#F4F5F7]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#A3AAB6] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default EditorialHeader;
