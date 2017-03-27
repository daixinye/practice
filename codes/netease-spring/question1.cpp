// 常规的表达式求值，我们都会根据计算的优先级来计算。比如*/的优先级就高于+-。但是小易所生活的世界的表达式规则很简单，从左往右依次计算即可，而且小易所在的世界没有除法，意味着表达式中没有/，只有(+, - 和 *)。现在给出一个表达式，需要你帮忙计算出小易所在的世界这个表达式的值为多少
// 输入描述:

// 输入为一行字符串，即一个表达式。其中运算符只有-,+,*。参与计算的数字只有0~9.
// 保证表达式都是合法的，排列规则如样例所示。



// 输出描述:

// 输出一个数，即表达式的值


// 输入例子:

// 3+5*7


// 输出例子:

// 56
// 
#include <iostream>
#include <cstdio>
#include <string>

using namespace std;

int main(){
//	freopen("1.in","r",stdin);
	string str;
	while(cin>>str){
		int result = str[0]-48;
		for(int i = 0;i<str.length();i++){
			char c = str[i];
			int next = str[i+1]-48;
			switch (c) {
				case '+':
					result = result + next;
					break;
				case '-':
					result = result - next;
					break;
				case '*':
					result = result * next;
					break;
				default:
					break;
			}
		}
		cout<<result<<endl;
	}
	return 0;
}