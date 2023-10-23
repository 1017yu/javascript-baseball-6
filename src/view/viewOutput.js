import { Console } from '@woowacourse/mission-utils';

/**
 * 숫자야구 애플리케이션 Output View를 담당하는 클래스로서,
 * 주어진 문자열을 콘솔에 출력하는 책임을 갖음.
 */
class ViewOutput {
  /**
   *
   * @param {string} message
   * @returns {string}
   */
  static printMessage(message) {
    return Console.print(message);
  }
}

export default ViewOutput;
