/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
export function getCurrency(price: number | undefined): string {
    console.log('getCurrency from TS');
    
    return `${Number(price) || '-'} $`;
}
