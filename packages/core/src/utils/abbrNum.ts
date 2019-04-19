export const abbrNum = (num:any, decPlaces:number = 2):string => {
    decPlaces = Math.pow(10, decPlaces);
    let abbrev = [ 'K', 'M', 'B', 'T', 'Q', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ' ];
    if (num > 1000) {
        return num.toFixed(decPlaces)
    }
    for (let i = abbrev.length - 1; i >= 0; i--) {
        let size = Math.pow(10, (i + 1) * 3);
        if (size <= num) {
            num = Math.round(num * decPlaces / size) / decPlaces;
            if ((num === 1000) && (i < abbrev.length - 1)) {
                num = 1;
                i++;
            }
            num += abbrev[i];
            break;
        }
    }
    return num;
};