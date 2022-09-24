export const ALL_SHAPES = ['diamond', 'ellipse', 'squiggle'] as const;
export const ALL_COLORS = ['red', 'purple', 'green'] as const;
export const ALL_NUMBERS = [1, 2, 3] as const;
export const ALL_SHADINGS = ['empty', 'solid', 'hashed'] as const;

export type CardProps = {
    shape: (typeof ALL_SHAPES)[number],
    color: (typeof ALL_COLORS)[number],
    number: (typeof ALL_NUMBERS)[number],
    shading: (typeof ALL_SHADINGS)[number],
}

export type ShapeProps = Pick<CardProps, 'color' | 'shading'>;