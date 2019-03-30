export type colorKeys = 'citizens' |
                  'civilization' |
                  'production' |
                  'resources' |
                  'economy' |
                  'legacy' |
                  'settings' |
                  'culture' |
                  'faith'  |
                  'biomes'
;

export const colors: Map<colorKeys, string> = new Map<colorKeys, string>([
    ['citizens', '#cfbc7a'],
    ['civilization', '#b845e6'],
    ['production', '#e6d83e'],
    ['resources', '#1edb50'],
    ['economy', '#5ea556'],
    ['legacy', '#d14e2d'],
    ['settings', '#96bbce'],
    ['biomes', '#c3d463'],
]);