import * as React from "react";
export interface ButtonProps{variant?:"primary"|"secondary"|"ghost";href?:string;onClick?:()=>void;disabled?:boolean;children:React.ReactNode}
export interface KickerProps{accent?:"brand"|"fatigue"|"stress"|"high";children:React.ReactNode}
export interface NavBarProps{brand?:string;links?:{label:string;href?:string}[];actions?:React.ReactNode}
export interface HeroProps{kicker?:string;accent?:KickerProps["accent"];line1:string;line2?:string;lede?:string;actions?:React.ReactNode}
export interface StatCardProps{value:string;label:string;source?:string}
export interface FeatureCardProps{kicker?:string;accent?:KickerProps["accent"];title:string;children:React.ReactNode}
export interface StateChipProps{state:"baseline"|"watch"|"elevated"|"high";label?:string}
export interface TrendChartProps{fatigue:number[];stress:number[];band?:[number,number];width?:number;height?:number;label?:string}
export interface SnapshotPanelProps{title?:string;rows:{label:string;value:string;tone?:"fatigue"|"stress"|"good"|"alert"}[]}
export interface PricingCardProps{name:string;price:string;per?:string;detail:string;featured?:boolean;cta?:React.ReactNode}
export interface StepProps{n:string;title:string;children:React.ReactNode}
export interface CheckItemProps{children:React.ReactNode}
export interface FooterProps{note?:string}
