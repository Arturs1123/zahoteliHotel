export default function formatNumberToString(num: number): string {
    if (Math.floor(num) === num) { // check if num is an integer
        return `${num}.0`;
    } else {
        return `${num}`;
    }
}