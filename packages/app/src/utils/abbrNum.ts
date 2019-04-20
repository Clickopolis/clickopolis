
const getIfZeroes = (n1: string, n2: string) => {
    if (n2 == '0' && n1 !== '0') {
        return '.' + n1;
    }

    if (n2 === '0' && n1 === '0') {
        return ''
    }

    return '.' + n1 + n2;
}

export function abbrNum (n: number, decimals: number = 2) {
    const isNegative = n.toString().charAt(0) === '-';
    const str = n.toString().split('.')[0]
    const places = str.length / 3;
    const left = str.length % 3;
    const abbrs = ['K', 'M', 'B', 'T', 'Q', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF'];

    if (n < 999) {
        return Number.isInteger(n) ? n : n.toFixed(1);
    }

    const placesRound = Math.floor(places);
    const abb = (placesRound - 1) >= 0 ? abbrs[placesRound - 1] : '';

    switch (left) {
        case 1:
            return str[0] + (getIfZeroes(str[1], str[2])) + abb
        case 2:
            return str[0] + str[1] + getIfZeroes(str[2], str[3]) + abb
        default:
            return str[0] + str[1] + getIfZeroes(str[2], str[3]) + abb
    }

}