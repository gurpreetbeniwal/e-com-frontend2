import { useContextElement } from "@/context/Context";

export default function CompareLength() {
  const { compareItem } = useContextElement();
  return <>{compareItem.length}</>;
}
