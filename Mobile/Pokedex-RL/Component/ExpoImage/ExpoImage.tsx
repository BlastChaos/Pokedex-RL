import { ImageProps, Image } from "expo-image";
import { useAssets } from "expo-asset";
import { cssInterop } from "nativewind";
cssInterop(Image, { className: "style" });

export const ExpoImage: React.FC<ImageProps> = ({ source, ...props }) => {
  const [assets, error] = useAssets([source]);

  const asset = assets?.[0];

  return asset ? <Image source={asset} {...props} /> : null;
};
