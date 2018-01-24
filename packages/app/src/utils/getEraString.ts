import { Era } from './Era';

export function getEraString (era: number):string {
    switch (era) {
        case Era.Ancient:
            return 'Ancient';
        case Era.Classical:
            return 'Classical';
        case Era.Medieval:
            return 'Medieval';
        case Era.Renaissance:
            return 'Renaissance';
        case Era.Industrial:
            return 'Industrial';
        case Era.Modern:
            return 'Modern';
        case Era.Atomic:
            return 'Atomic';
        case Era.Information:
            return 'Information';
        case Era.Future:
            return 'Future';
        default:
            return 'Future';
    }
}