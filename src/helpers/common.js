/**
 * Created by Александр on 25.12.2017.
 */

const getProperTime = time => time < 10 ? `0${time}` : time;

export const getTime = seconds => {
    const min = parseInt(seconds / 60, 10);
    const sec = parseInt(seconds % 60);

    return `${ getProperTime(min) }:${ getProperTime(sec) }`
}