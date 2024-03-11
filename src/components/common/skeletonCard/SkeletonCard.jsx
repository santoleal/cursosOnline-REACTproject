import Skeleton from "@mui/material/Skeleton";

const SkeletonCard = () => {
  return (
    <div>
      <Skeleton variant="rounded" width={300} height={140} padding={20} />
      <Skeleton variant="text" width={250} height={40} />
      <Skeleton variant="text" width={220} height={30} />
      <Skeleton variant="text" width={200} height={30} />
      <Skeleton variant="text" width={200} height={55} />
    </div>
  );
};

export default SkeletonCard;
