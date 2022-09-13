import { TagCloud } from "react-tagcloud";
import dynamic from "next/dynamic";

type TagCloudProps = React.ComponentProps<typeof TagCloud>;

const DynamicComponentWithNoSSR = dynamic<TagCloudProps>(
  () => import("react-tagcloud").then((mod) => mod.TagCloud),
  {
    ssr: false,
  }
);

export default function (props: TagCloudProps) {
  return <DynamicComponentWithNoSSR {...props} />;
}
