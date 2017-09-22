module.exports = function multiply(first, second) {
    var mas=[];
    var str=[];
    var p;
    var k;
    var f=0;
    first=first.split("").reverse();
    second=second.split("").reverse();
    for (var i=0;i<first.length;i++) {//цикл по первому числу
        for (var t=0;t<f;t++){//поразрядно добавляем нули, чтобы удобно складывать числа
            mas.push(0);
        }
        p=0;
        for (var j=0;j<second.length;j++) {
            k=first[i]*second[j]+p;
            if (k<=9) {mas.push(k); p=0;}
            else {mas.push(k%10); p=k/10; p=Math.trunc(p);}//вычисляем элемент "в уме"
        }
        if (p>0) mas.push(p);// после цикла могла остаться недобавленная цифра
        p=0;
        for(t=0;t<mas.length;t++) {
            if (isNaN(str[t])) {str[t]=0;}//если в рез.строке на позиции t пусто, ставим 0
            k = mas[t] + str[t] + p;
            if (k<=9) {str[t]=k; p=0;}
            else {str[t] = k%10; p=k/10; p=Math.trunc(p);}
        }
        if (p>0) str.push(p);
        mas=[];
        f++;
    }
    return str.reverse().join("");
};