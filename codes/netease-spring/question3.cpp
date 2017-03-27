// 小易有一个长度为n序列，小易想移除掉里面的重复元素，但是小易想是对于每种元素保留最后出现的那个。小易遇到了困难,希望你来帮助他。
// 输入描述:

// 输入包括两行：
// 第一行为序列长度n(1 ≤ n ≤ 50)
// 第二行为n个数sequence[i](1 ≤ sequence[i] ≤ 1000)，以空格分隔



// 输出描述:

// 输出消除重复元素之后的序列，以空格分隔，行末无空格


// 输入例子:

// 9
// 100 100 100 99 99 99 100 100 100


// 输出例子:

// 99 100

#include <iostream>
#include <cstdio>
#include <map>
#include <algorithm>
#include <vector>

using namespace std;

int main(){
//	freopen("1.in","r",stdin);
	int n;
	while(cin>>n){
		map<int,int> record;
		for(int i =0;i<n;i++){
			int m;
			cin>>m;
			record[m]=i+1;
		}
		map<int,int>::iterator it = record.begin();
		map<int,int> r_record;
		vector<int> v;
		while(it!=record.end()){
			r_record[it->second]=it->first;
			v.push_back(it->second);
			it++;
		}
		
		sort(v.begin(),v.end());
		
		vector<int>::iterator it_v = v.begin();
		while(it_v!=v.end()){
			cout<<r_record[*it_v];
			it_v++;
			if(it_v!=v.end()){
				cout<<" ";
			}
		}
		cout<<endl;
	}
	return 0;
}