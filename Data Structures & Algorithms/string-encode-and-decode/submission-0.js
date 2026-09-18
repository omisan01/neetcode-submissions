class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedString = "";
    for (let str of strs) {
      encodedString += str.length + "-" + str;
    }

    return encodedString;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let strs = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "-") {
        j++;
      }
      let length = Number(str.substring(i, j));
      strs.push(str.slice(j + 1, j + 1 + length));

      i = j + 1 + length;
    }
    return strs;
  }
}
