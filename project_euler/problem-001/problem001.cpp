long long sum_of_multiple_3_or_5(int n) {
    int n3 = (n-1)/3;
    int n5 = (n-1)/5;
    int n15 = (n-1)/15;
    return (long long) 3*n3*(n3+1)/2 + 5*n5*(n5+1)/2 - 15*n15*(n15+1)/2; 
}