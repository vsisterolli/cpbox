#include <bits/stdc++.h>
using namespace std;
 
int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    
    queue<int> fila;
    for(int i = 0; i < 1; i++)
        fila.push(i);

    while(!fila.empty()) {
        cout << fila.front() << endl;
        fila.pop();
    }
}