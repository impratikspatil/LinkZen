import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {

  return (

    <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

      <Skeleton
        height={40}
        width={250}
        baseColor="#111827"
        highlightColor="#1f2937"
      />

      <div className="mt-4">
        <Skeleton
          height={20}
          width={200}
          baseColor="#111827"
          highlightColor="#1f2937"
        />
      </div>

      <div className="mt-8 space-y-5">

        <Skeleton
          height={60}
          borderRadius={16}
          baseColor="#111827"
          highlightColor="#1f2937"
        />

        <div className="grid grid-cols-2 gap-5">

          <Skeleton
            height={60}
            borderRadius={16}
            baseColor="#111827"
            highlightColor="#1f2937"
          />

          <Skeleton
            height={60}
            borderRadius={16}
            baseColor="#111827"
            highlightColor="#1f2937"
          />

        </div>

        <Skeleton
          height={60}
          borderRadius={16}
          baseColor="#111827"
          highlightColor="#1f2937"
        />

      </div>

    </div>
  );
}

export default SkeletonCard;