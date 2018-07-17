// 重构
function fun1() {
    // 数组重构
    let input = [1, 2, 3, 4];
    let [c, d, ...rest] = input;
    alert(rest);
    [c, d] = [d, c];
    // 对象重构
    let p = {
        x: 1,
        y: 2
    };
    let {x: name1, y: name2} = p;
    alert(name1);
    alert(name2);
    type C = {a: string, b: number};
    function f({a, b}: C = {a: '', b: 0}): void {
       alert(a);
       alert(b);
    }
    f({a: 'sss', b: 1});
    // f 和 f1 相通
    function f1(t: {a: number, b: string} = {a: 0, b: ''}): void {
        alert(t.a);
        alert(t.b);
    }
    let o = {a: 1, b: 'sss'};
    f1(o);
}
// fun1();
// 接口
function fun2() {
    interface LabelledValue {
        readonly label: string; // 只读属性
        size: number; // 可选属性
    }
    // type C = {label: string, size: number};   
    function A(s: LabelledValue): {label: string, size: number} {
        let val = {label: s.label, size: s.size};
        return val;
    }
    let myObj = {size: 10, label: 'Size 10 Object'};
    let p = A(myObj as LabelledValue); // 使用类型断言 来检测参数是否正确
    alert(p.size);
    
    interface SearchFunc {
       (source: string, subString: string): boolean;
    }
    let B: SearchFunc;
    B = function(sou, sub) {
        let result = sou.search(sub);
        if (result === -1) {
            return false;
        } else {
            return true;
        }
    };
    B('123', '456');
}
fun2();
