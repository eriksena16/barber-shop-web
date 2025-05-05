import { BoxProps, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface LinkItemProps{
    name: string;
    icon: IconType;
    route: string;
 }

 export interface NavItemProps extends FlexProps{
    icon: IconType;
    children: ReactNode;
    route: string;
 }

 export interface SideBarProps extends BoxProps{
    onClose: ()=> void;
 }

 export interface MobileProps extends FlexProps{
    onOpen: ()=> void;
 }