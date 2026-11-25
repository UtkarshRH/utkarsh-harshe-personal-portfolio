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
    <div className="mb-12 sm:mb-14 max-w-2xl">
      <p className="text-xs sm:text-sm font-medium tracking-[0.06em] uppercase text-[#6685FF] mb-3">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.025em] leading-[1.16] text-[#F5F5F6]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#A1A7B3] leading-[1.7]">
          {description}
        </p>
      )}
    </div>
  );
};

export default EditorialHeader;
