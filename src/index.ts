/**
 * @description 格式化金额
 * @param value 数值
 * @param multiple 倍数，默认100
 * @param decimal 小数点，默认2位
 * @return 乘：整型数值，除：{ value: 格式化后的值, real: 整型数值, origin: 源始值 }
 */

class Money {
  private multy: number = 100;
  private dec: number = 2;

  multiply = (value: number | string, multiple?: number, decimal?: number): number => {
    const moneyDecimal: number = decimal ?? this.dec;
    const meneyMulty: number = multiple ?? this.multy;
    const split = String(+value * meneyMulty).split('.');
    const num = [split[0], '.', split[1] ? split[1].slice(0, moneyDecimal) : ''].join();
    let money: number = 0;

    if (value !== '' && value !== null && value !== undefined) money = parseFloat(num);
    if (!isNaN(money)) return money;
    else return 0;
  };

  divide = (
    value: number | string,
    multiple?: number,
    decimal?: number,
  ): { value: string; real: number; origin: number } => {
    const moneyDecimal: number = decimal ?? this.dec;
    const meneyMulty: number = multiple ?? this.multy;
    const zero: string = Array(moneyDecimal).fill(0).join('');
    let money: string = String(value);
    let plain: number = 0;

    if (value !== '' && value !== null && value !== undefined) {
      const split: string[] = String(+value / meneyMulty).split('.');
      const num: number = +[split[0], '.', split[1] ? split[1].slice(0, moneyDecimal) : ''].join();
      plain = parseFloat(num.toFixed(moneyDecimal));
      const mount: string[] = String(plain).split('.');

      if (mount[1] !== undefined) {
        mount[1] = mount[1].padEnd(mount[1].length + moneyDecimal, zero);
        mount[1] = String(mount[1]).substring(0, moneyDecimal);
      } else {
        mount[1] = zero;
      }
      mount[0] = mount[0].replace(/\d+/, function (n: string) {
        return n.replace(/(\d)(?=(\d{3})+$)/g, function (value: string): string {
          return value + ',';
        });
      });
      money = mount.join('.');
    } else {
      money = '0.' + zero;
      plain = 0;
      value = 0;
    }

    return {
      value: money,
      real: plain,
      origin: Number(value),
    };
  };
}

export default () => new Money();
