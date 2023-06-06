import { LoadingIcon } from "@/components/icons/LoadingIcon";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-row items-center justify-center p-global-container">
      <LoadingIcon />
    </div>
  );
}
