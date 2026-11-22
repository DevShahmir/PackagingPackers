import { BoxCategory, AnySubCategory } from "@/app/Data/types";

interface BoxVisualProps {
  category: BoxCategory;
  subCategory?: AnySubCategory;
  className?: string;
}

export default function BoxVisual({
  category,
  subCategory = "" as AnySubCategory,
  className = "w-full h-full",
}: BoxVisualProps) {
  const sub = (subCategory || "").toLowerCase();

  if (sub.includes("mailer") || sub.includes("shipping") || category === "Corrugated") {
    return (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="corrug-top" x1="80" y1="20" x2="80" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c2a180" stopOpacity="0.35" />
            <stop stopColor="#8c6a4a" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="corrug-left" x1="30" y1="50" x2="80" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6b4a2e" stopOpacity="0.45" />
            <stop stopColor="#3a2418" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="corrug-right" x1="80" y1="50" x2="130" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8c6a4a" stopOpacity="0.4" />
            <stop stopColor="#3a2418" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <path
          d="M 50 35 L 80 14 L 125 28 L 95 48 Z"
          fill="url(#corrug-top)"
          stroke="#a88462"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 32 44 L 50 35 L 60 52 L 42 61 Z"
          fill="#3a2418"
          stroke="#8c6a4a"
          strokeWidth="1"
          strokeLinejoin="round"
          opacity="0.7"
        />

        <path
          d="M 30 52 L 80 32 L 130 52 L 80 72 Z"
          fill="#261811"
          stroke="#a88462"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 33 54 L 78 36 L 127 54 L 78 68 Z"
          fill="#1a120e"
          opacity="0.8"
        />

        <path
          d="M 30 52 L 80 72 L 80 106 L 30 86 Z"
          fill="url(#corrug-left)"
          stroke="#c2a180"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 80 72 L 130 52 L 130 86 L 80 106 Z"
          fill="url(#corrug-right)"
          stroke="#c2a180"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path d="M 42 62 L 42 88" stroke="#a88462" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.4" />
        <path d="M 55 67 L 55 93" stroke="#a88462" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.4" />
        <path d="M 68 72 L 68 98" stroke="#a88462" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.4" />
        <path d="M 92 72 L 92 98" stroke="#a88462" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.4" />
        <path d="M 105 67 L 105 93" stroke="#a88462" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.4" />
        <path d="M 118 62 L 118 88" stroke="#a88462" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.4" />
      </svg>
    );
  }

  if (sub.includes("magnetic") || category === "Rigid") {
    return (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="rigid-lid" x1="40" y1="20" x2="120" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c2a180" stopOpacity="0.4" />
            <stop stopColor="#6b4a2e" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="rigid-body" x1="30" y1="55" x2="80" y2="105" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6b4a2e" stopOpacity="0.5" />
            <stop stopColor="#261811" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <path
          d="M 38 42 L 78 22 L 132 36 L 92 56 Z"
          fill="url(#rigid-lid)"
          stroke="#c2a180"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 92 56 L 132 36 L 135 44 L 95 64 Z"
          fill="#3a2418"
          stroke="#a88462"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        <circle cx="114" cy="50" r="2.5" fill="#e3d7c7" stroke="#c2a180" strokeWidth="0.75" />

        <path
          d="M 32 58 L 78 40 L 126 58 L 80 76 Z"
          fill="#1a120e"
          stroke="#a88462"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M 40 60 L 78 45 L 118 60 L 80 72 Z"
          fill="#261811"
          stroke="#6b4a2e"
          strokeWidth="0.75"
        />

        <path
          d="M 32 58 L 80 76 L 80 102 L 32 84 Z"
          fill="url(#rigid-body)"
          stroke="#c2a180"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 80 76 L 126 58 L 126 84 L 80 102 Z"
          fill="#3a2418"
          stroke="#c2a180"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path d="M 80 76 L 80 102" stroke="#e3d7c7" strokeWidth="1" opacity="0.6" />
      </svg>
    );
  }

  if (sub.includes("drawer") || sub.includes("sleeve")) {
    return (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M 28 46 L 72 30 L 114 46 L 70 62 Z"
          fill="#3a2418"
          stroke="#a88462"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 28 46 L 70 62 L 70 94 L 28 78 Z"
          fill="#261811"
          stroke="#a88462"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path
          d="M 74 61 L 116 45 L 138 54 L 96 70 Z"
          fill="#6b4a2e"
          stroke="#c2a180"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M 74 61 L 96 70 L 96 98 L 74 89 Z"
          fill="#3a2418"
          stroke="#c2a180"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M 96 70 L 138 54 L 138 82 L 96 98 Z"
          fill="#8c6a4a"
          stroke="#c2a180"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path
          d="M 117 76 C 117 76, 125 82, 122 88 C 120 92, 115 88, 115 88 Z"
          fill="#c2a180"
          stroke="#e3d7c7"
          strokeWidth="1"
        />
      </svg>
    );
  }

  if (sub.includes("twopiece") || sub.includes("two piece")) {
    return (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M 35 32 L 80 16 L 125 32 L 80 48 Z"
          fill="#6b4a2e"
          stroke="#c2a180"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 35 32 L 80 48 L 80 58 L 35 42 Z"
          fill="#3a2418"
          stroke="#c2a180"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 80 48 L 125 32 L 125 42 L 80 58 Z"
          fill="#261811"
          stroke="#c2a180"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path
          d="M 40 68 L 80 54 L 120 68 L 80 82 Z"
          fill="#1a120e"
          stroke="#a88462"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M 40 68 L 80 82 L 80 106 L 40 92 Z"
          fill="#3a2418"
          stroke="#a88462"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 80 82 L 120 68 L 120 92 L 80 106 Z"
          fill="#261811"
          stroke="#a88462"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 46 36 L 80 20 L 114 36 L 80 52 Z"
        fill="#6b4a2e"
        stroke="#c2a180"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M 80 20 L 98 12 L 128 26 L 114 36 Z"
        fill="#8c6a4a"
        stroke="#a88462"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.8"
      />

      <path
        d="M 46 36 L 80 52 L 80 102 L 46 86 Z"
        fill="#3a2418"
        stroke="#c2a180"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M 80 52 L 114 36 L 114 86 L 80 102 Z"
        fill="#261811"
        stroke="#c2a180"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path d="M 80 52 L 80 102" stroke="#e3d7c7" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
