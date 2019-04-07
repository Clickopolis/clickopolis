export type colorKeys = 'citizens' |
                  'civilization' |
                  'production' |
                  'resources' |
                  'economy' |
                  'legacy' |
                  'settings' |
                  'buildings' |
                  'culture' |
                  'faith'  |
                  'biomes' |
                  'advancement' |
                  'advancementPurchased'
;

export const colors: Map<colorKeys, string> = new Map<colorKeys, string>([
    ['citizens', '#cfbc7a'],
    ['civilization', '#b845e6'],
    ['production', '#e6d83e'],
    ['resources', '#1edb50'],
    ['economy', '#5ea556'],
    ['buildings', '#e7ad31'],
    ['legacy', '#db6e52'],
    ['culture', 'ff006d'],
    ['faith', '#e5d48a'],
    ['settings', '#96bbce'],
    ['biomes', '#c3d463'],
    ['advancement', '#7cdef0'],
    ['advancementPurchased', '#13d14e']
]);