import { Type } from "@/api/Model/Pokemon";
import Bug from "@/assets/images/bug-icon.svg";
import Dark from "@/assets/images/dark-icon.svg";
import Dragon from "@/assets/images/dragon-icon.svg";
import Electric from "@/assets/images/electric-icon.svg";
import Fairy from "@/assets/images/fairy-icon.svg";
import Fighting from "@/assets/images/fighting-icon.svg";
import Fire from "@/assets/images/fire-icon.svg";
import Flying from "@/assets/images/flying-icon.svg";
import Ghost from "@/assets/images/ghost-icon.svg";
import Grass from "@/assets/images/grass-icon.svg";
import Ground from "@/assets/images/ground-icon.svg";
import Ice from "@/assets/images/ice-icon.svg";
import Normal from "@/assets/images/normal-icon.svg";
import Poison from "@/assets/images/poison-icon.svg";
import Psychic from "@/assets/images/psychic-icon.svg";
import Rock from "@/assets/images/rock-icon.svg";
import Steel from "@/assets/images/steel-icon.svg";
import Water from "@/assets/images/water-icon.svg";
import { View } from "react-native";
import { SvgProps } from "react-native-svg";

type Props = {
  type: Type;
} & SvgProps;

export const IconType: React.FC<Props> = ({ type, ...props }) => {
  const imageByType: Record<Type, React.FC<SvgProps>> = {
    [Type.Normal]: Normal,
    [Type.Fire]: Fire,
    [Type.Water]: Water,
    [Type.Electric]: Electric,
    [Type.Grass]: Grass,
    [Type.Ice]: Ice,
    [Type.Fighting]: Fighting,
    [Type.Poison]: Poison,
    [Type.Ground]: Ground,
    [Type.Flying]: Flying,
    [Type.Psychic]: Psychic,
    [Type.Bug]: Bug,
    [Type.Rock]: Rock,
    [Type.Ghost]: Ghost,
    [Type.Dragon]: Dragon,
    [Type.Dark]: Dark,
    [Type.Steel]: Steel,
    [Type.Fairy]: Fairy,
  };
  const IconComponent = imageByType[type];
  return <IconComponent {...props} />;
};
