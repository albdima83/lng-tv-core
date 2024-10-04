import {
  type FadeOutEffectProps,
  type GlitchEffectProps,
  type GrayscaleEffectProps,
  type AnimationSettings as RendererAnimationSettings,
  type LinearGradientEffectProps,
  type RadialGradientEffectProps,
  type RadialProgressEffectProps,
  type ITextNode,
} from '@lightningjs/renderer';
import { ElementNode } from './elementNode.js';
import { NodeStates } from './states.js';

export type AnimationSettings = Partial<RendererAnimationSettings> | undefined;

export type AddColorString<T> = {
  [K in keyof T]: K extends `color${string}` ? string | number : T[K];
};

export interface BorderStyleObject {
  width: number;
  color: number | string;
}

export type BorderStyle = number | BorderStyleObject;
export type BorderRadius = number | number[];

export interface Effects {
  fadeOut?: FadeOutEffectProps;
  linearGradient?: LinearGradientEffectProps;
  radialGradient?: RadialGradientEffectProps;
  radialProgressGradient?: RadialProgressEffectProps;
  grayscale?: GrayscaleEffectProps;
  glitch?: GlitchEffectProps;
  radialProgress?: RadialProgressEffectProps;
  holePunch?: any; // shoud be HolePunchEffectProps;
}

export interface BorderEffects {
  radius?: { radius: BorderRadius };
  border?: BorderStyle;
  borderTop?: BorderStyle;
  borderRight?: BorderStyle;
  borderBottom?: BorderStyle;
  borderLeft?: BorderStyle;
}

export type StyleEffects = Effects & BorderEffects;

// Renderer should export EffectDesc
export type ShaderEffectDesc = {
  name?: string;
  type: keyof StyleEffects;
  props: StyleEffects[keyof StyleEffects];
};

export type NewOmit<T, K extends PropertyKey> = {
  [P in keyof T as Exclude<P, K>]: T[P];
};

export type Styles = {
  [key: string]: [keyof ElementNode];
} & Partial<ElementNode>;

/** Node text, children of a ElementNode of type TextNode */
export interface ElementText
  extends Partial<Omit<ITextNode, 'id' | 'parent' | 'shader'>>,
    Partial<Omit<ElementNode, '_type'>> {
  id?: string;
  _type: 'text';
  parent?: ElementNode;
  text: string;
  states?: NodeStates;
  _queueDelete?: boolean;
}

export interface NodeProps
  extends Partial<
    NewOmit<
      ElementNode,
      | 'children'
      | 'contain'
      | 'fontFamily'
      | 'fontSize'
      | 'fontStretch'
      | 'fontStyle'
      | 'fontWeight'
      | 'letterSpacing'
      | 'lineHeight'
      | 'maxLines'
      | 'overflowSuffix'
      | 'text'
      | 'textAlign'
      | 'textBaseline'
      | 'textOverflow'
      | 'verticalAlign'
      | 'wordWrap'
    >
  > {}
export interface TextProps
  extends Partial<
    NewOmit<
      ElementNode,
      | 'autosize'
      | 'children'
      | 'clipping'
      | 'linearGradient'
      | 'src'
      | 'texture'
      | 'textureOptions'
      | 'transition'
    >
  > {}
