export type ResponsiveProp<T> = {
    base?:T,
    sm?:T,
    md?:T,
    lg?:T,
    xl?:T
}
export type Responsive<T> = T|ResponsiveProp<T>

type SelfPosition = 
|"center"
|"end"
|"flex-end"
|"flex-start"
|"self-end"
|"self-start"
|"start"

type ContentPosition = 
|"center"
|"end"
|"flex-end"
|"flex-start"
|"start"

type ContentDistribution =
|"space-around"
|"space-between"
|"space-evenly"
|"stretch"

type CSSPropertyGlobals =
|"-moz-initial"
|"inherit"
|"initial"
|"revert"
|"unset"

export type CSSPropertyAlignItems =
|CSSPropertyGlobals
|SelfPosition
|"baseline"
|"normal"
|"stretch"
|(string&{})

export type CSSPropertyAlignContent = 
|CSSPropertyGlobals
|ContentDistribution
|"center"
|"end"
|"flex-end"
|"flex-start"
|"start"
|"baseline"
|"normal"
|(string&{})

export type CSSPropertyJustifyItems = 
|CSSPropertyGlobals
|SelfPosition
|"baseline"
|"left"
|"legacy"
|"normal"
|"right"
|"stretch"
|(string&{})

export type CSSPropertyJustifyContent =
|CSSPropertyGlobals
|ContentDistribution
|ContentPosition
|"left"
|"normal"
|"right"
|(string&{})

export type CSSPropertyFlexWrap =
|CSSPropertyGlobals
|"nowrap"
|"wrap"
|"wrap-reverse"

export type CSSPropertyFlexDirection = 
|CSSPropertyGlobals
|"column"
|"column-reverse"
|"row"
|"row-reverse"

export type CSSPropertyJustifySelf =
|CSSPropertyGlobals
|SelfPosition
|"auto"
|"baseline"
|"left"
|"normal"
|"right"
|"stretch"
|(string&{})

export type CSSPropertyAlignSelf =
|CSSPropertyGlobals
|SelfPosition
|"auto"
|"baseline"
|"normal"
|"stretch"
|(string&{})

type GridLine = "auto"|(string&{})

export type CSSPropertyGridColumn =
|CSSPropertyGlobals
|GridLine
|(String&{})

export type CSSPropertyGridRow =
|CSSPropertyGlobals
|GridLine
|(String&{})

export type CSSPropertyGridAutoFlow =
|CSSPropertyGlobals
|"column"
|"dense"
|"row"
|(String&{})

export type CSSPropertyGridArea =
|CSSPropertyGlobals
|GridLine
|(String&{})